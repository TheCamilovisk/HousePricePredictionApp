from dataclasses import dataclass
from typing import List


@dataclass
class SalePicesPredictions:
    sale_prices: List[float]
