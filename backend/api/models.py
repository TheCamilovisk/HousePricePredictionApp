from dataclasses import dataclass
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
class SalePicesPredictions:
    sale_prices: List[float]


@dataclass
class OptionsListOutput:
    options: List[str]
