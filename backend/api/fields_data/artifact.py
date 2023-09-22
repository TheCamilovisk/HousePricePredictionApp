from copy import deepcopy

from ..entities import OptionsListOutput
from ..utils import load_artifact
from .protocols import OptionsListProvider


class ArtifactOptionsProvider(OptionsListProvider):
    def __init__(
        self, property_types_artifact_filepath: str, neighborhood_artifact_filepath: str
    ) -> None:
        self.property_types_options: OptionsListOutput = load_artifact(
            property_types_artifact_filepath
        )

        self.neighborhoods_options: OptionsListOutput = load_artifact(
            neighborhood_artifact_filepath
        )

    def get_property_types_options(self) -> OptionsListOutput:
        return deepcopy(self.property_types_options)

    def get_neighborhoods_options(self) -> OptionsListOutput:
        return deepcopy(self.neighborhoods_options)
