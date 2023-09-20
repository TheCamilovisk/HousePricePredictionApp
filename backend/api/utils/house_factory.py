from dataclasses import asdict
from datetime import date, datetime
from enum import Enum
from typing import Any, List

from api.models import House


def house_factory(data: dict) -> dict:
    def convert_value(obj: Any) -> Any:
        if isinstance(obj, Enum):
            return obj.value
        elif isinstance(obj, date):
            return datetime.combine(obj, datetime.min.time())
        else:
            return obj

    return {k: convert_value(v) for k, v in data}


def houses_as_dicts(houses: List[House]) -> List[dict]:
    return [asdict(house, dict_factory=house_factory) for house in houses]
