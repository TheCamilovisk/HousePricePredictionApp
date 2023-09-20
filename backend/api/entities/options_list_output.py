from dataclasses import dataclass
from typing import List


@dataclass
class OptionsListOutput:
    options: List[str]
