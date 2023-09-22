from os import path as P

from ..config import Settings
from ..utils import load_artifact
from .predictor import PredictionPipeline


def create_predictor_from_artifacts(settings: Settings) -> PredictionPipeline:
    (features_transform, target_transform, prediction_model) = map(
        lambda artifact_name: load_artifact(
            P.join(settings.artifacts_dir, artifact_name + ".pickle")
        ),
        (
            settings.features_transform_name,
            settings.target_transform_name,
            settings.predictor_name,
        ),
    )

    return PredictionPipeline(features_transform, target_transform, prediction_model)
