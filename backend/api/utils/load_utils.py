import pickle
from os.path import exists, join
from typing import List, Tuple, Union

from api.config import Settings
from api.protocols import Predictor, Transform


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


def load_property_types_list(settings: Settings) -> List[str]:
    return load_artifact(settings.artifacts_dir, settings.property_types_name)


def load_neighborhoods_list(settings: Settings) -> List[str]:
    return load_artifact(settings.artifacts_dir, settings.neighborhood_name)
