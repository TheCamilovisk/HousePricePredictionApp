# HousePricePredictionApp

In this project we'll go through a complete Machine Learning workflow to build a web app where a user can input some house features (e.g.: input, number of suites, usable area, etc.) and a prediction of the house price will be returned.

We'll follow all required steps to build this app, starting with the dataset collection and analysis, passing through the data pre-processing, the Machine Learning model building and finishing with a nice web UI.

## Table of Contents


1. [Introduction](#introduction)
2. [Run Locally](#run-locally)
    - [Generate the Artifacts](#generate-the-artifacts)
    - [Run the App](#run-the-app)

## Introduction

One of the main goals of the Data Science field is to support business decision making. There are two main ways to accomplish this:
- Extract information about the business data and supply users with important insights;
- Creating statistical models that synthesizes both data and insights into value.

In this project we'll go through a complete process of extract insights of a dataset and building a system that delivers actual value from data. More specifically, we'll use a dataset of features of house located in the São Paulo brazilian state to build an application that predicts the price of a specific house.

The application consists in 2 main components: the backend, written in Python, and the frontend written in Javascript using the React library.

We also supply with all Docker files to easily setup, prototype/train the machine learning model and run the application locally. I also plan to create a complete serverless cloud hosting to publish a live demo, so stay tuned.

**Note 1:** This is a complete example solution. If you want just the REST API backend implementation, it can be found in the [backend folder of this respository](https://github.com/TheCamilovisk/HousePricePredictionApp/tree/main/backend).

**Note 2:** If you want the frontend implementation, it can be found in the [frontend folder of this repository](https://github.com/TheCamilovisk/HousePricePredictionApp/tree/main/frontend).

**Note 3:** This project is meant to be for learning purposes, for both readers and myself. So, of you find any problems or are aware of better ways of doing some of the things that I do here, please let me know. And don't forget to be kind.

## Run Locally

### Generate the Artifacts

To run this app, you'll need to generate all model artifacts previously. To do this, first you'll need to define your kaggle credentials as environment variables. Create you account (if you haven't already) and follow these instructions to generate you credentials `.json`. Then, open your terminal and define the following variables in your shell prompt accordingly.

```
export KAGGLE_USERNAME=[JSON_USERNAME]
export KAGGLE_KEY=[JSON_KEY]
```

Finally, without closing your terminal, setup the environment using Docker Compose.

```
docker compose -f mldev-docker-compose.yml up
```

Wait the setup to finish and you should see a line like in the figure below. `Ctrl + click` or copy/paste the line in your browser to open the Jupyter environment.

![Jupyter lab URL][jupyter-url]

In the Jupyer lab home screen, in theleft sidebar, open the notebooks folder and run the notebook named `build-artifacts.ipynb`.

![Jupyter home screen][jupyter-home]

![Build Artifacts notebook][build-artifacts-notebook]

Wait for the notebook to finish. At the end, you should have three `.pickle` files in the `backend/artifacts` folder.

![Artifacts files][artifacts-files].

Now you're able to run the app.

### Run the App

After creating all model artifacts, with the `.pickle` files created, use the Docker Compose tool to run the app environment.

```
docker compose -f app-docker-compose.yml up
```

Wait for the services startup to complete and, in your browser, access `http://localhost`. You should see the glorious app page.

![House Price Prediction App Page][app-screen]

<!-- Link Definitions -->

[app-screen]: https://raw.githubusercontent.com/TheCamilovisk/HousePricePredictionApp/main/imgs/app-screen.png
[jupyter-url]: https://raw.githubusercontent.com/TheCamilovisk/HousePricePredictionApp/main/imgs/jupyter-url.png
[jupyter-home]: https://raw.githubusercontent.com/TheCamilovisk/HousePricePredictionApp/main/imgs/jupyter-home.png
[build-artifacts-notebook]: https://raw.githubusercontent.com/TheCamilovisk/HousePricePredictionApp/main/imgs/build-artifacts-notebook.png
[artifacts-files]: https://raw.githubusercontent.com/TheCamilovisk/HousePricePredictionApp/main/imgs/artifacts-files.png