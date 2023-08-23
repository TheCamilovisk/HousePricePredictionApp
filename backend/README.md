# HousePricePredictionApp Backend

This is the backend component of the House Price Prediction App. It's a microservice that is intended to supply an REST API to be consumed by the frontend component.

## Table of Contents

- [Introduction](#introduction)

## Introduction

This backend component implements a REST API to serve as an interface with the regression model that we have built. It depends on the following packages.

- FastAPI, used to build the endpoint routes.
- Uvicorn, an ASGI web server implementation for Python.
- Cloudpicke, for extended serialization support for Python.
- Pandas, the famous Python open source data analysis and manipulation tool.
- Numpy, the equaly famous Python packae for scientific computing.
- Scikit-Learn, the simple and efficient tools for predictive data analysis.
- XGBoost, LightGBM and Catboost packages, that provides state-of-the-art predictive models.

Besides those packages, during the design and building of the regression model, we also used the following packages.

- Jupyter Lab, that provided the convenient environment for the data analysis, model design, testing and prototyping.
- Matplotlib and Seaborn, the graphical analysis tools.
- Optuna, the hyperparameter optimization software framework, particularly designed for machine learning.
- Pyarrow, the anable the handling of `parquet` files.
- rope, flake8 and black packages, to keep the code clean.