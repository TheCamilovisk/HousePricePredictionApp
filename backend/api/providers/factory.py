from ..config import Settings
from .artifact import ArtifactOptionsProvider

from os import path as P


def create_artifacts_provider(settings: Settings) -> ArtifactOptionsProvider:
    property_types_artifact_filepath = P.join(
        settings.artifacts_dir, settings.property_types_name + ".pickle"
    )
    neighborhoods_artifact_filepath = P.join(
        settings.artifacts_dir, settings.neighborhood_name + ".pickle"
    )
    return ArtifactOptionsProvider(
        property_types_artifact_filepath, neighborhoods_artifact_filepath
    )
