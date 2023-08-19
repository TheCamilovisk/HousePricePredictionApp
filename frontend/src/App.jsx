import React, { useEffect, useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";

import { default as Features } from "./containers/Features";
import { PredictButton, PredictionArea } from "./components";
import { v4 } from "uuid";

const App = () => {
  const { register, handleSubmit } = useForm();

  const [featuresFields, setFeaturesFields] = useState(0);
  const [predictionValue, setPredictionValue] = useState(0);

  const getApiFieldsData = async () => {
    const { data } = await fetch("http://127.0.0.1:8000/get-fields/").then(
      (response) => response.json()
    );

    let groupedData = [];
    for (let i = 0; i < Math.ceil(data.length / 3); i++) {
      groupedData.push(data.slice(i * 3, i * 3 + 3));
    }

    setFeaturesFields(groupedData);
  };

  const transformData = ({
    property_type,
    neighborhood,
    usable_area,
    ad_date,
    condominium_fee,
    annual_iptu_tax,
    bathrooms,
    suites,
    parking_spots,
  }) => {
    return {
      property_type: property_type,
      neighborhood: neighborhood,
      usable_area: parseFloat(usable_area) || 0,
      ad_date: ad_date,
      condominium_fee: parseFloat(condominium_fee) || 0,
      annual_iptu_tax: parseFloat(annual_iptu_tax) || 0,
      bathrooms: parseInt(bathrooms) || 0,
      suites: parseInt(suites) || 0,
      parking_spots: parseInt(parking_spots) || 0,
    };
  };

  const getApiPrediction = async (data) => {
    const response = await fetch("http://127.0.0.1:8000/predict/", {
      method: "POST",
      body: JSON.stringify([data]),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
    const salePrice = response.data[0].sale_price;
    setPredictionValue(salePrice)
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
          featuresFields.map((fields) => (
            <Features fields={fields} key={v4()} register={register} />
          ))}
        <PredictButton />
      </form>
      <PredictionArea predictionValue={predictionValue} />
    </div>
  );
};

export default App;
