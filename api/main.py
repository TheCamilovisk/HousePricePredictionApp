from contextlib import asynccontextmanager

from fastapi import FastAPI

from .config import Settings
from .load_utils import load_model, load_preprocessing_pipelines
from .ml import make_prediction
from .models import House, SalePrice

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
async def read_root(house: House):
    sale_price = make_prediction(house, predictor, features_transform, target_transform)
    return SalePrice(sale_price)
