import pickle
from fastapi import FastAPI
from dataclasses import dataclass, asdict
from typing import Optional, Any, Protocol, Union, Tuple
from enum import Enum
import pandas as pd
from os.path import join, dirname, abspath, exists
import sklearn
from datetime import datetime, date

sklearn.set_config(transform_output="pandas")


class PropertyType(str, Enum):
    apartment = "Apartament"
    two_story_house = "Two-story House"
    house = "House"
    condominium = "Condominium"
    flat = "Flat"
    penthouse = "Penthouse"
    studio_apartament = "Studio Apartament"
    residential_building = "Residential Building"


@dataclass
class House:
    neighborhood: str
    property_type: PropertyType
    usable_area: float
    ad_date: date
    bathrooms: Optional[float] = None
    suites: Optional[float] = None
    bedrooms: Optional[float] = None
    parking_spots: Optional[float] = None
    condominium_fee: Optional[float] = None
    annual_iptu_tax: Optional[float] = None


@dataclass
class SalePrice:
    sale_price: float


def house_factory(data: dict) -> dict:
    def convert_value(obj: Any) -> Any:
        if isinstance(obj, Enum):
            return obj.value
        elif isinstance(obj, date):
            return datetime.combine(obj, datetime.min.time())
        else:
            return obj

    return {k: convert_value(v) for k, v in data}


class Predictor(Protocol):
    def fit(self, X: Any, y: Any, *args, **kwargs) -> None:
        raise NotImplementedError

    def predict(self, X: Any) -> Any:
        raise NotImplementedError


class Transform(Protocol):
    def transform(self, X: Any) -> Any:
        raise NotImplementedError

    def inverse_transform(self, X: Any) -> Any:
        raise NotImplementedError


def load_artifact(filename: str) -> Union[Transform, Predictor]:
    root_dir = abspath(join(dirname(__file__), ".."))
    artifacts_root_dir = join(root_dir, "artifacts")

    filepath = join(artifacts_root_dir, filename)

    if not exists(filepath):
        raise RuntimeError(f"Artifact {filepath} doesn't exists")

    with open(filepath, "rb") as f:
        artifact = pickle.load(f)

    return artifact


def load_preprocessing_pipelines() -> Tuple[Transform, Transform]:
    features_transform = load_artifact("preprocessing_pipeline.pickle")
    target_transform = load_artifact("target_transform.pickle")

    return features_transform, target_transform


def load_model() -> Predictor:
    return load_artifact("regression_model.pickle")


def make_prediction(house: House) -> SalePrice:
    sklearn.set_config(transform_output="pandas")

    features_transform, target_transform = load_preprocessing_pipelines()
    regression_model = load_model()

    features = pd.DataFrame.from_records(
        asdict(house, dict_factory=house_factory), index=[0]
    )

    transformed_features = features_transform.transform(features)

    transformed_prediction = regression_model.predict(transformed_features)
    prediction = target_transform.inverse_transform(transformed_prediction)

    return {"sale_price": pred for pred in prediction}


app = FastAPI()


@app.post("/predict/")
def read_root(house: House):
    return SalePrice(**make_prediction(house))
