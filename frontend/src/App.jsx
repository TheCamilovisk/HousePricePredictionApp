import React, { useEffect, useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";

import { default as Features } from "./containers/Features";
import { PredictButton, PredictionArea } from "./components";
import { v4 } from "uuid";

const App = () => {
  const { register, handleSubmit, getValues } = useForm();

  const [featuresFields, setFeaturesFields] = useState(0);
  const [predictionValue, setPredictionValue] = useState(0);

  const apiUrl = import.meta.env.VITE_API_URL;

  const getApiFieldsData = async () => {
    await fetch(apiUrl + "get-fields/")
      .then((response) => response.json())
      .then(({ data }) => setFeaturesFields(data));
  };

  const getApiPrediction = async (data) => {
    const requestOptions = {
      method: "POST",
      body: JSON.stringify([data]),
      headers: {
        "Content-Type": "application/json",
      },
    };
    await fetch(apiUrl + "predict/", requestOptions)
      .then((response) => response.json())
      .then(({ data }) => setPredictionValue(data[0].sale_price));
  };

  const getGroupedData = () => {
    let groupedData = [];
    for (let i = 0; i < Math.ceil(featuresFields.length / 3); i++) {
      groupedData.push(featuresFields.slice(i * 3, i * 3 + 3));
    }
    return groupedData;
  };

  useEffect(() => {
    getApiFieldsData();
  }, []);

  const onSubmit = (data) => {
    getApiPrediction(data);
  };

  return (
    <div className="container">
      <h1>House Price Prediction App</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {featuresFields &&
          getGroupedData().map((fields) => (
            <Features
              fields={fields}
              key={v4()}
              register={register}
              getValues={getValues}
            />
          ))}
        <PredictButton />
      </form>
      <PredictionArea predictionValue={predictionValue} />
    </div>
  );
};

export default App;
