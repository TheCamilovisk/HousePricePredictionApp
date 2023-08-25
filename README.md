# HousePricePredictionApp

In this project we'll go through a complete Machine Learning workflow to build a web app where a user can input some house features (e.g.: input, number of suites, usable area, etc.) and a prediction of the house price will be returned.

We'll follow all required steps to build this app, starting with the dataset collection and analysis, passing trhough the data pre-processing, the Machine Learning model building and finishing with a nice web UI.

## Table of Contents


1. [Introduction](#introduction)
2. [Run Locally](#run-locally)
    - [Docker Compose Configuration](#docker-compose-configuration)
    - [Run the App](#run-the-app)

## Introduction

One of the main goals of the Data Science field is to support business decision making. There are two main ways to accomplish this:
- Extract information about the business data and supply users with important insights;
- Creating statistical models that synthesizes both data and insights into value.

In this project we'll go through a complete process of extract insights of a dataset and building a system that delivers actual value from data. More specifically, we'll use a dataset of features of house located in the São Paulo brazilian state to build an application that predicts the price of a specific house.

The application consists in 2 main components: the backend, written in Python, and the frontend written in Javascript using the React library.

We also supply with all Docker files to easily setup and run the application locally. I also plan to create a complete serverless cloud hosting to publish a live demo, so stay tuned.

**Note 1:** This is a complete example solution. If you want just the REST API backend implementation, it can be dound in the backend folder of this respository.

**Note 2:** This project is meant to be for learning purposes, for both readers and myself. So, of you find any problems or are aware of better ways of doing some of the things that I do here, please let me know. And don't forget to be kind.

## Run Locally

I provided all Docker files required to run this project locally. The configuraton itself is pretty simple and easily extendable.

### Docker Compose Configuration

First of all, you need to enter the backend folder and follow the instructions on how to create the data preprocessing and the model files used for inference. With the `.pickle` files created, open the docker-compose file in the root directory of this repository and change the following lines.

```
version: "3.8"

services:
  api:
    image: backend
    build:
      context: backend
      dockerfile: ./Dockerfile.api
    container_name: backend
    environment:
      - ARTIFACTS_DIR=/app/artifacts
      - FEATURES_TRANSFORM_NAME=preprocessing_pipeline
      - TARGET_TRANSFORM_NAME=target_transform
      - PREDICTOR_NAME=regression_model
    volumes:
      - [ARTIFACTS_FOLDER]:/app/artifacts     <-- replace ARTIFACTS_FOLDER with the right artifacts folder
    networks:
      - housepriceprediction-network
    ports:
      - 8000:8000

  frontend:
    image: frontend
    build: 
      context: frontend
      dockerfile: ./Dockerfile.app
    container_name: frontend
    environment:
      - VITE_API_URL=http://127.0.0.1:8000/api/
    depends_on:
      - api
    networks:
      - housepriceprediction-network
    ports:
      - 80:80

networks:
  housepriceprediction-network:
    name: housepriceprediction-network


```

**Note 3:** The `ARTIFACTS_FOLDER` is an example. You can store the artifacts anywhere, just be sure that all required artifacts are located in the same folder.

### Run the App

After making the required modifications according with your choice, in the root folder of the project, run:

```
docker compose up
```

Wait for the services startup to complete and, in your browser, access `http://localhost`. You should see the glorious app page.

![House Price Prediction App Page][app-screen]

<!-- Link Definitions -->

[app-screen]: https://raw.githubusercontent.com/TheCamilovisk/HousePricePredictionApp/main/imgs/app-screen.png