from dataclasses import asdict
from datetime import date, datetime
from enum import Enum
from typing import Any

import pandas as pd
import sklearn

from .dependencies import load_model, load_preprocessing_pipelines
from .models import House, SalePrice


def house_factory(data: dict) -> dict:
    def convert_value(obj: Any) -> Any:
        if isinstance(obj, Enum):
            return obj.value
        elif isinstance(obj, date):
            return datetime.combine(obj, datetime.min.time())
        else:
            return obj

    return {k: convert_value(v) for k, v in data}


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
