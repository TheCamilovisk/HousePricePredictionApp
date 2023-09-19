from contextlib import asynccontextmanager
from typing import List

from fastapi import APIRouter, FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .config import Settings
from .load_utils import load_model, load_preprocessing_pipelines
from .ml import make_predictions
from .models import House, SalePicesPredictions, OptionsListOutput, PropertyType
from .utils import houses_as_dicts

predictor = None
features_transform = None
target_transform = None


@asynccontextmanager
async def lifespan(app: FastAPI):
    global predictor
    global features_transform
    global target_transform

    settings = Settings()

    features_transform, target_transform = load_preprocessing_pipelines(settings)
    predictor = load_model(settings)
    yield

    del features_transform
    del target_transform
    del predictor


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
    houses_dicts = houses_as_dicts(houses)
    sales_prices = make_predictions(
        houses_dicts, predictor, features_transform, target_transform
    )
    return SalePicesPredictions(sale_prices=sales_prices)


@api_router.get("/property-types/")
async def property_types() -> OptionsListOutput:
    return OptionsListOutput(options=[opt for opt in PropertyType])


app.include_router(api_router, prefix="/api")
