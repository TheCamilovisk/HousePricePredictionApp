from enum import Enum


class PropertyType(str, Enum):
    apartment = "Apartament"
    two_story_house = "Two-story House"
    house = "House"
    condominium = "Condominium"
    flat = "Flat"
    penthouse = "Penthouse"
    studio_apartament = "Studio Apartament"
    residential_building = "Residential Building"
