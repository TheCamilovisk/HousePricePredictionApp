import datetime
import typing
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


class FeatureFieldTypes(str, Enum):
    select = "select"
    text = "text"
    area = "area"
    date = "date"
    currency = "currency"
    range = "range"


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


@dataclass
class FeatureFieldPropsBase:
    label: str
    id: str
    name: str


@dataclass
class SelectFieldProps(FeatureFieldPropsBase):
    options: List[str]


@dataclass
class TextFieldProps(FeatureFieldPropsBase):
    placeholder: str


@dataclass
class AreaFieldProps(FeatureFieldPropsBase):
    placeholder: int


@dataclass
class DateFieldProps(FeatureFieldPropsBase):
    defaultDate: datetime.date = datetime.date.today()


@dataclass
class CurrencyFieldProps(FeatureFieldPropsBase):
    placeholder: float


@dataclass
class RangeFieldProps(FeatureFieldPropsBase):
    min: int
    max: int
    defaultValue: int


@dataclass
class FeatureField:
    type: FeatureFieldTypes
    props: typing.Union[
        SelectFieldProps,
        TextFieldProps,
        AreaFieldProps,
        DateFieldProps,
        CurrencyFieldProps,
        RangeFieldProps,
    ]


@dataclass
class ApiOutput:
    data: typing.Union[List[SalePrice], List[FeatureField]]
    status: str
