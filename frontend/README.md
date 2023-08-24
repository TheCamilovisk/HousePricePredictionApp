# HousePricePredictionApp Frontend

This is the frontend component of the House Price Prediction App. It was built to exemplify how to use the REST API supplied by the backend.

## Table of Contents

## Introduction

This frontend component was built using the Vite framework to create an React application. The application consumes the REST API endpoints supplied by the backend component.

This frontend was built to be easily extendable: all input components are originated from the outputs of the `/api/get-fields` endpoint. Each input information is self-sufficient, and has it's own type and parameters.

## Run Locally

There are two ways to run the application locally.

### Install the Packages

First of all, Node.js must be installed. Then, install the project using `npm`.

```
npm install
```

Next, use your terminal or create a `.env` file, with the following environment variable definition:

```
VITE_API_URL=[API_URL]
```

Where `API_URL` is the url where the REST API is being served. Remember that the default url used in this project is `http://127.0.0.1:8000/api/`.

Next, run the development environment.

```
npm run dev
```

#### Run the API

```
uvicorn api.main:app --host 0.0.0.0 --port 8000
```

### Run using Docker

A `Dockerfile` is also provided to run the application without installing any dependency. It's only required to run:

```
docker run -p 80:80 -e VITE_API_URL=[API_URL] frontend
```

Remember to replace `API_URL` with the actual url of the REST API.

## Application Screen

With the application running, in your browser, access http://localhost. You should see the glorious app page.

![House Price Prediction App Page][app-screen]


This application is pretty simple. I tried to make the interface as cleaner as possible.

<!-- Link Definitions -->

[app-screen]: https://raw.githubusercontent.com/TheCamilovisk/HousePricePredictionApp/main/imgs/app-screen.png