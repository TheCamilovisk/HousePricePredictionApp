# HousePricePredictionApp Backend

This is the backend component of the House Price Prediction App. It's a microservice that is intended to supply an REST API to be consumed by the frontend component.

## Table of Contents

- [Introduction](#introduction)

## Introduction

This backend component implements a REST API to serve as an interface with the regression model that we have built. It depends on the following packages.

- [FastAPI][fastapi], used to build the endpoint routes.
- [Uvicorn][uvicorn], an ASGI web server implementation for Python.
- [Cloudpicke][cloudpickle], for extended serialization support for Python.
- [Pandas][pandas], the famous Python open source data analysis and manipulation tool.
- [Numpy][numpy], the equaly famous Python packae for scientific computing.
- [Scikit-Learn][sklearn], the simple and efficient tools for predictive data analysis.
- [XGBoost][xgboost], [LightGBM][lightgbm] and [Catboost][catboost] packages, that provides state-of-the-art predictive models.

Besides those packages, during the design and building of the regression model, we also used the following packages.

- [Jupyter Lab][jupyterlab], that provided the convenient environment for the data analysis, model design, testing and prototyping.
- [Matplotlib][matplotlib] and [Seaborn][seaborn], the graphical analysis tools.
- [Optuna][optuna], the hyperparameter optimization software framework, particularly designed for machine learning.
- [Pyarrow][pyarrow], the anable the handling of `parquet` files.
- [rope][rope], [flake8][flake8] and [black][black] packages, to keep the code clean.

<!-- Link Definitions -->

[fastapi]: https://fastapi.tiangolo.com/
[uvicorn]: https://www.uvicorn.org/
[cloudpickle]: https://github.com/cloudpipe/cloudpickle
[pandas]: https://pandas.pydata.org/
[numpy]: https://numpy.org/
[sklearn]: https://scikit-learn.org/stable/
[xgboost]: https://xgboost.readthedocs.io/en/stable/
[lightgbm]: https://lightgbm.readthedocs.io/en/stable/
[catboost]: https://catboost.ai/
[jupyterlab]: https://jupyter.org/
[matplotlib]: https://matplotlib.org/
[seaborn]: https://seaborn.pydata.org/
[optuna]: https://optuna.org/
[pyarrow]: https://arrow.apache.org/docs/python/index.html
[rope]: https://github.com/python-rope/rope
[flake8]: https://flake8.pycqa.org/en/latest/
[black]: https://github.com/psf/black