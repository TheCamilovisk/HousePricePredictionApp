# HousePricePredictionApp Backend

This is the backend component of the House Price Prediction App. It's a microservice that is intended to supply an REST API to be consumed by the frontend component.

## Table of Contents

1. [Introduction](#introduction)
2. [Run Locally](#run-locally)
    - [Install the Packages](#install-the-packages)
        - [Install dev and main packages](#install-dev-and-main-packages)
        - [Install packages required for the API to run](#install-packages-required-for-the-api-to-run)
        - [Activate the virtual environment](#activate-the-virtual-environment)
        - [Setting environment variables](#setting-environment-variables)
        - [Run the API](#run-the-api)
    - [Run Using Docker](#run-using-docker)
3. [API Documentation](#api-documentation)
4. [Run the Machine Learning Development Environment](#run-the-machine-learning-development-environment)
    - [Setting Development Environment Variables](#setting-development-environment-variables)
    - [Run the Environment](#run-the-machine-learning-development-environment)

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

## Run Locally

There are two ways to run the application locally.

### Install the Packages

The Poetry Package Manager was used to manage Python dependencies. The `pyproject.toml` file is provided to install all required packages.

#### Install dev and main packages

To install all requirements (dev + main), run:

```
poetry install
```

#### Install packages required for the API to run

To install the bare minimum requirements packages, run:

```
poetry install --only main
```

#### Activate the virtual environment

With the project installed, you'll need to activate the virtual environment created by Poetry.

```
poetry shell
```

#### Setting environment variables

For the API to run, it needs to be able to load three `.pickle` files, that represents the prediction pipeline:
- The preprocessing pipeline.
- The target transform.
- The regression model.

For simplicity sake, I designed the system to search for all three files in the same folder. So, you just need to provide the `ARTIFACTS_FOLDER` and the name of each file, as described below:

```
ARTIFACTS_DIR=[ARTIFACTS_FOLDER]                        <-- place the right folder
FEATURES_TRANSFORM_NAME="preprocessing_pipeline"
TARGET_TRANSFORM_NAME="target_transform"
PREDICTOR_NAME="regression_model"
```

You can choose to declare this variables via terminal or create a `.env` file.

#### Run the API

```
uvicorn api.main:app --host 0.0.0.0 --port 8000
```

### Run using Docker

A `Dockerfile` is also provided to run the server without installing any dependency. It's only required to run:

```
docker run -p 8000:[HOST_PORT] \
-e ARTIFACTS_DIR=/app/artifacts \
-e FEATURES_TRANSFORM_NAME=preprocessing_pipeline \
-e TARGET_TRANSFORM_NAME=target_transform \
-e PREDICTOR_NAME=regression_model \
-v [ARTIFACTS_FOLDER]:/app/artifacts \
backend
```

Where `HOST_PORT` is the port in your host machine that you want to access the API through and the `ARTIFACTS_FOLDER` is the artifacts folder in the host system.

## API Documentation

With the API server running in your machine, go to you browser and open the link `http://locahost:8000/docs` to access the automatically generated OpenAPI documentation. There you can see the endpoints served.

![OpenAPI documentation][openapi-docs]

## Run the Machine Learning Development Environment

To run the environment where you can prototype and test the machine learning model used in this project, follow these steps.

### Setting Development Environment Variables

In addition to [the app environment variables](#setting-environment-variables), you must also define the Kaggle credentials, to be able to download the required dataset.Create you account (if you haven't already) and follow these instructions to generate you credentials `.json`. Then, open your terminal and run: 

```
docker run -p 8888:[HOST_PORT] \
-v [ARTIFACTS_FOLDER]:/app/artifacts \
-v [NOTEBOOKS_FOLDER]:/app/notebooks \
-e KAGGLE_USERNAME=[JSON_USERNAME] 
-e KAGGLE_KEY=[JSON_KEY]machine-learning \
machine-learning
```

### Run the Environment

Where `HOST_PORT` is the port in your host machine that you want to access the API through, `ARTIFACTS_FOLDER` is the artifacts folder in the host system, `NOTEBOOKS_FOLDER` is the notebooks folder in the host system and `JSON_USERNAME` and `KAGGLE_KEY` are, respectively, the username and key, found in your kaggle credentials `.json` file.
```
docker compose -f mldev-docker-compose.yml up
```

Wait the setup to finish and you should see a line like in the figure below. `Ctrl + click` or copy/paste the line in your browser to open the Jupyter environment.

![Jupyter lab URL][jupyter-url]

In the Jupyter lab home screen, in the left sidebar, open the notebooks folder. There, in the **numbered notebooks**, you'll find all prototyping and pipeline design that I've made for this project.

![Jupyter home screen][jupyter-home]

![ML notebooks][ml-notebooks]

**Note:** The `build-artifacts.ipynb` notebook is a summarization of all the other notebooks, meant to create all necessary artifacts to run the main application.

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
[openapi-docs]: https://raw.githubusercontent.com/TheCamilovisk/HousePricePredictionApp/main/imgs/openapi-docs.png
[jupyter-url]: https://raw.githubusercontent.com/TheCamilovisk/HousePricePredictionApp/main/imgs/jupyter-url.png
[jupyter-home]: https://raw.githubusercontent.com/TheCamilovisk/HousePricePredictionApp/main/imgs/jupyter-home.png
[ml-notebooks]: https://raw.githubusercontent.com/TheCamilovisk/HousePricePredictionApp/main/imgs/ml-notebooks.png
[artifacts-files]: https://raw.githubusercontent.com/TheCamilovisk/HousePricePredictionApp/main/imgs/artifacts-files.png