from typing import Any, Protocol


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
