import React, { useEffect, useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";

import { default as Features } from "./containers/Features";
import { PredictButton, PredictionArea } from "./components";
import { v4 } from "uuid";

const App = () => {
  const { register, handleSubmit } = useForm();

  const [featuresFields, setFeaturesFields] = useState(0);

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

  useEffect(() => {
    getApiFieldsData();
  }, []);

  const onSubmit = (data) => {
    console.log(data);
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
      <PredictionArea />
    </div>
  );
};

export default App;
