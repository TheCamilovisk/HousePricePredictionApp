from contextlib import asynccontextmanager
from typing import List

from fastapi import FastAPI

from .config import Settings
from .load_utils import load_model, load_preprocessing_pipelines
from .ml import make_predictions
from .models import House, PropertyTypesList, SalePrice
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


@app.post("/predict/")
async def predict(houses: List[House]) -> List[SalePrice]:
    houses_dicts = houses_as_dicts(houses)
    sales_prices = make_predictions(
        houses_dicts, predictor, features_transform, target_transform
    )
    return [SalePrice(sale_price) for sale_price in sales_prices]


@app.get("/property-types/")
async def property_types() -> PropertyTypesList:
    return PropertyTypesList()
