from typing import List

from ..entities import House
from .protocols import Predictor, Transform
from .utils import houses_as_dicts, make_predictions


class PredictionPipeline:
    features_transform: Transform
    target_transform: Transform
    prediction_model: Predictor

    def __init__(
        self,
        features_transform: Transform,
        target_transform: Transform,
        prediction_model: Predictor,
    ) -> None:
        self.features_transform = features_transform
        self.target_transform = target_transform
        self.prediction_model = prediction_model

    def predict(self, houses: List[House]) -> List[float]:
        houses_dicts = houses_as_dicts(houses)
        sale_prices = make_predictions(
            houses_dicts,
            self.prediction_model,
            self.features_transform,
            self.target_transform,
        )
        return sale_prices
