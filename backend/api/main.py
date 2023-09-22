from contextlib import asynccontextmanager
from typing import List

from fastapi import APIRouter, FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .config import Settings
from .entities import House, OptionsListOutput, SalePicesPredictions
from .providers import OptionsListProvider, create_artifacts_provider
from .prediction import PredictionPipeline, create_predictor_from_artifacts

prediction_pipeline: PredictionPipeline = None
options_provider: OptionsListProvider = None


@asynccontextmanager
async def lifespan(app: FastAPI):
    global prediction_pipeline
    global options_provider

    settings = Settings()

    prediction_pipeline = create_predictor_from_artifacts(settings)
    options_provider = create_artifacts_provider(settings)

    yield

    del prediction_pipeline
    del options_provider


app = FastAPI(lifespan=lifespan)

origins = [
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

api_router = APIRouter()


@api_router.post("/predict/")
async def predict(houses: List[House]) -> SalePicesPredictions:
    sales_prices = prediction_pipeline.predict(houses)
    return SalePicesPredictions(sale_prices=sales_prices)


@api_router.get("/property-types/")
async def property_types() -> OptionsListOutput:
    property_types_list = options_provider.get_property_types_options()
    return OptionsListOutput(options=property_types_list)


@api_router.get("/neighborhoods/")
async def neighborhoods() -> OptionsListOutput:
    neighborhood_list = options_provider.get_neighborhoods_options()
    return OptionsListOutput(options=neighborhood_list)


app.include_router(api_router, prefix="/api")
