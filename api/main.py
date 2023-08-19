from contextlib import asynccontextmanager
from typing import List

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .config import Settings
from .load_utils import load_model, load_preprocessing_pipelines
from .ml import make_predictions
from .models import (
    ApiOutput,
    AreaFieldProps,
    CurrencyFieldProps,
    DateFieldProps,
    FeatureField,
    FeatureFieldTypes,
    House,
    PropertyType,
    RangeFieldProps,
    SalePrice,
    SelectFieldProps,
    TextFieldProps,
)
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
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
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


@app.post("/predict/")
async def predict(houses: List[House]) -> ApiOutput:
    houses_dicts = houses_as_dicts(houses)
    sales_prices = make_predictions(
        houses_dicts, predictor, features_transform, target_transform
    )
    return ApiOutput(
        data=[SalePrice(sale_price) for sale_price in sales_prices], status="success"
    )


@app.get("/get-fields/")
async def get_fields() -> ApiOutput:
    property_type = FeatureField(
        type=FeatureFieldTypes.select,
        props=SelectFieldProps(
            label="Property Type",
            id="property_type",
            name="property_type",
            options=[obj for obj in PropertyType],
        ),
    )

    neighborhood = FeatureField(
        type=FeatureFieldTypes.text,
        props=TextFieldProps(
            label="Neighborhood",
            id="neighborhood",
            name="neighborhood",
            placeholder="Neighborhood",
        ),
    )

    usable_area = FeatureField(
        type=FeatureFieldTypes.area,
        props=AreaFieldProps(
            label="Usable Area", id="usable_area", name="usable_area", defaultValue=0
        ),
    )

    ad_date = FeatureField(
        type=FeatureFieldTypes.date,
        props=DateFieldProps(
            label="Ad Date",
            id="ad_date",
            name="ad_date",
        ),
    )

    condominium_fee = FeatureField(
        type=FeatureFieldTypes.currency,
        props=CurrencyFieldProps(
            label="Condominium Fee",
            id="condominium_fee",
            name="condominium_fee",
            placeholder=0.0,
        ),
    )

    annual_iptu_tax = FeatureField(
        type=FeatureFieldTypes.currency,
        props=CurrencyFieldProps(
            label="Annual IPTU tax",
            id="annual_iptu_tax",
            name="annual_iptu_tax",
            placeholder=0.0,
        ),
    )

    bathrooms = FeatureField(
        type=FeatureFieldTypes.range,
        props=RangeFieldProps(
            label="Bathrooms",
            id="bathrooms",
            name="bathrooms",
            min=0,
            max=7,
            defaultValue=1,
        ),
    )

    suites = FeatureField(
        type=FeatureFieldTypes.range,
        props=RangeFieldProps(
            label="Suites",
            id="suites",
            name="suites",
            min=0,
            max=6,
            defaultValue=0,
        ),
    )

    parking_spots = FeatureField(
        type=FeatureFieldTypes.range,
        props=RangeFieldProps(
            label="Parking Spots",
            id="parking_spots",
            name="parking_spots",
            min=0,
            max=7,
            defaultValue=1,
        ),
    )

    return ApiOutput(
        data=[
            property_type,
            neighborhood,
            usable_area,
            ad_date,
            condominium_fee,
            annual_iptu_tax,
            bathrooms,
            suites,
            parking_spots,
        ],
        status="success",
    )
