import pickle
from os.path import abspath, dirname, exists, join
from typing import Tuple, Union

from .protocols import Predictor, Transform


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
