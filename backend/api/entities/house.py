from dataclasses import dataclass
from datetime import date
from typing import Optional

from .property_type import PropertyType


@dataclass
class House:
    neighborhood: str
    property_type: PropertyType
    usable_area: float
    ad_date: date
    bathrooms: Optional[float] = None
    suites: Optional[float] = None
    bedrooms: Optional[float] = None
    parking_spots: Optional[float] = None
    condominium_fee: Optional[float] = None
    annual_iptu_tax: Optional[float] = None
