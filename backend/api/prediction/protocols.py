from typing import Protocol

import numpy as np


class Transform(Protocol):
    def transform(self, X: np.ndarray) -> np.ndarray:
        raise NotImplementedError

    def inverse_transform(self, X: np.ndarray) -> np.ndarray:
        raise NotImplementedError


class Predictor(Protocol):
    def predict(self, X: np.ndarray) -> np.ndarray:
        raise NotImplementedError
