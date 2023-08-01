from dataclasses import dataclass, field
from datetime import date
from enum import Enum
from typing import List, Optional


class PropertyType(str, Enum):
    apartment = "Apartament"
    two_story_house = "Two-story House"
    house = "House"
    condominium = "Condominium"
    flat = "Flat"
    penthouse = "Penthouse"
    studio_apartament = "Studio Apartament"
    residential_building = "Residential Building"


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


@dataclass
class SalePrice:
    sale_price: float


@dataclass
class PropertyTypesList:
    property_types: List[PropertyType] = field(
        default_factory=lambda: [obj for obj in PropertyType]
    )
