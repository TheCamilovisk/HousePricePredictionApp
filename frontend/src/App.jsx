import React, { useEffect, useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";

import { default as Features } from "./containers/Features";
import {
  FeatureAreaField,
  FeatureCurrencyField,
  FeatureDateField,
  FeatureRangeField,
  FeatureSelectField,
  FeatureTextField,
  PredictButton,
  PredictionArea,
} from "./components";

const App = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const [propertyTypes, setPropertyTypes] = useState([]);
  const [neighborhoods, setNeighborhoods] = useState([]);
  const [predictionValue, setPredictionValue] = useState(0);

  const apiUrl = import.meta.env.VITE_API_URL;

  const getApiPropertyTypeOptions = async () => {
    await fetch(apiUrl + "property-types/")
      .then((response) => response.json())
      .then(({ options }) => setPropertyTypes(options));
  };

  const getApiNeighborhoodsOptions = async () => {
    await fetch(apiUrl + "neighborhoods/")
      .then((response) => response.json())
      .then(({ options }) => setNeighborhoods(options));
  };

  const getApiPrediction = async (data) => {
    const requestOptions = {
      method: "POST",
      body: JSON.stringify([data]),
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log(requestOptions);
    await fetch(apiUrl + "predict/", requestOptions)
      .then((response) => response.json())
      .then(({ sale_prices }) => setPredictionValue(sale_prices[0]));
  };

  useEffect(() => {
    getApiPropertyTypeOptions();
    getApiNeighborhoodsOptions();
  }, []);

  const onSubmit = (data) => {
    getApiPrediction(data);
  };

  return (
    <div className="container">
      <h1>House Price Prediction App</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {propertyTypes && (
          <>
            <Features>
              <FeatureSelectField
                label={"Property Type"}
                id={"neighborhood"}
                name={"property_type"}
                options={propertyTypes}
                defaultMessage={"Select a property type"}
                register={register}
                errors={errors}
              />
              <FeatureSelectField
                label={"Neighborhood"}
                id={"neighborhood"}
                name={"neighborhood"}
                options={neighborhoods}
                defaultMessage={"Select a neighborhood"}
                register={register}
                errors={errors}
              />
              <FeatureAreaField
                label={"Usable area"}
                id={"usable_area"}
                name={"usable_area"}
                placeholder={0}
                register={register}
                errors={errors}
              />
            </Features>
            <Features>
              <FeatureDateField
                label={"Ad Date"}
                id={"ad_date"}
                name={"ad_date"}
                defaultDate={new Date().toISOString().substring(0, 10)}
                register={register}
              />
              <FeatureCurrencyField
                label={"Condominium Fee"}
                id={"condominium_fee"}
                name={"condominium_fee"}
                placeholder={0.0}
                register={register}
                errors={errors}
              />
              <FeatureCurrencyField
                label={"Annual IPTU Tax"}
                id={"annual_iptu_tax"}
                name={"annual_iptu_tax"}
                placeholder={0.0}
                register={register}
                errors={errors}
              />
            </Features>
            <Features>
              <FeatureRangeField
                label={"Bedrooms"}
                id={"bedrooms"}
                name={"bedrooms"}
                min={0}
                max={7}
                defaultValue={1}
                register={register}
                getValues={getValues}
              />
              <FeatureRangeField
                label={"Bathrooms"}
                id={"bathrooms"}
                name={"bathrooms"}
                min={0}
                max={7}
                defaultValue={1}
                register={register}
                getValues={getValues}
              />
              <FeatureRangeField
                label={"Suites"}
                id={"suites"}
                name={"suites"}
                min={0}
                max={7}
                defaultValue={0}
                register={register}
                getValues={getValues}
              />
              <FeatureRangeField
                label={"Parking spots"}
                id={"parking_spots"}
                name={"parking_spots"}
                min={0}
                max={7}
                defaultValue={1}
                register={register}
                getValues={getValues}
              />
            </Features>
          </>
        )}
        <PredictButton />
      </form>
      <PredictionArea predictionValue={predictionValue} />
    </div>
  );
};

export default App;
