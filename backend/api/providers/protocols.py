from typing import Protocol

from ..entities import OptionsListOutput


class OptionsListProvider(Protocol):
    def get_property_types_options(self) -> OptionsListOutput:
        raise NotImplementedError

    def get_neighborhoods_options(self) -> OptionsListOutput:
        raise NotImplementedError
