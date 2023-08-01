from fastapi import FastAPI

from .ml import make_prediction
from .models import House, SalePrice

app = FastAPI()


@app.post("/predict/")
def read_root(house: House):
    return SalePrice(**make_prediction(house))
