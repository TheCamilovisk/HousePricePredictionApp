from typing import List

import pandas as pd
import sklearn

from .models import House
from .protocols import Predictor, Transform


def make_predictions(
    houses: List[House],
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
