import pickle
from os.path import exists
from typing import Any


def load_artifact(artifacts_filepath: str) -> Any:
    if not exists(artifacts_filepath):
        raise RuntimeError(f"Artifact {artifacts_filepath} doesn't exists")

    with open(artifacts_filepath, "rb") as f:
        artifact = pickle.load(f)

    return artifact
