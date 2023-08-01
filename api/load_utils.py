import pickle
from os.path import exists, join
from typing import Tuple, Union

from .config import Settings
from .protocols import Predictor, Transform


def load_artifact(
    artifacts_dir: str, artifact_name: str
) -> Union[Transform, Predictor]:
    filepath = join(artifacts_dir, artifact_name + ".pickle")

    if not exists(filepath):
        raise RuntimeError(f"Artifact {filepath} doesn't exists")

    with open(filepath, "rb") as f:
        artifact = pickle.load(f)

    return artifact


def load_preprocessing_pipelines(settings: Settings) -> Tuple[Transform, Transform]:
    features_transform = load_artifact(
        settings.artifacts_dir, settings.features_transform_name
    )
    target_transform = load_artifact(
        settings.artifacts_dir, settings.target_transform_name
    )

    return features_transform, target_transform


def load_model(settings: Settings) -> Predictor:
    return load_artifact(settings.artifacts_dir, settings.predictor_name)