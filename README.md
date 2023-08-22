# HousePricePredictionApp

In this project we'll go through a complete Machine Learning workflow to build a web app where a user can input some house features (e.g.: input, number of suites, usable area, etc.) and a prediction of the house price will be returned.

We'll follow all required steps to build this app, starting with the dataset collection and analysis, passing trhough the data pre-processing, the Machine Learning model building and finishing with a nice web UI.

## Table of Contents

1.[Introduction](#introduction)

## Introduction

One of the main goals of the Data Science field is to support business decision making. There are two main ways to accomplish this:
- Extract information about the business data and supply users with important insights;
- Creating statistical models that synthesizes both data and insights into value.

In this project we'll go through a complete process of extract insights of a dataset and building a system that delivers actual value from data. More specifically, we'll use a dataset of features of house located in the São Paulo brazilian state to build an application that predicts the price of a specific house.

The application consists in 2 main components: the backend, written in Python, and the frontend written in Javascript using the React library.

We also supply with all Docker files to easily setup and run the application locally. I also plan to create a complete serverless cloud hosting to publish a live demo, so stay tuned.

**Note 1:** This is a complete example solution. If you want just the REST API backend implementation, it can be dound in the backend folder of this respository.

**Note 2:** This project is meant to be for learning purposes, for both readers and myself. So, of you find any problems or are aware of better ways of doing some of the things that I do here, please let me know. And don't forget to be kind.