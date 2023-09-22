from dataclasses import asdict
from datetime import date, datetime
from enum import Enum
from typing import Any, List

import pandas as pd
import sklearn

from ..entities import House
from .protocols import Predictor, Transform


def house_factory(data: dict) -> dict:
    def convert_value(obj: Any) -> Any:
        if isinstance(obj, Enum):
            return obj.value
        elif isinstance(obj, date):
            return datetime.combine(obj, datetime.min.time())
        else:
            return obj

    return {k: convert_value(v) for k, v in data}


def houses_as_dicts(houses: List[House]) -> List[dict]:
    return [asdict(house, dict_factory=house_factory) for house in houses]


def make_predictions(
    houses: List[dict],
    predictor: Predictor,
    features_transform: Transform,
    target_transform: Transform,
) -> List[float]:
    sklearn.set_config(transform_output="pandas")

    features = pd.DataFrame.from_records(houses)

    transformed_features = features_transform.transform(features)

    transformed_prediction = predictor.predict(transformed_features)
    predictions = target_transform.inverse_transform(transformed_prediction).tolist()

    return predictions
