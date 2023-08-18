import React from "react";
import "./App.css";
import { useForm } from "react-hook-form";

import { default as Features } from "./containers/Features";
import { PredictButton, PredictionArea } from "./components";
import { v4 } from "uuid";

const featuresFields = [
  [
    {
      type: "select",
      props: {
        label: "Property Type",
        id: "property_type",
        name: "property_type",
        options: ["Apartament", "House"],
      },
    },
    {
      type: "text",
      props: {
        label: "Neighborhood",
        id: "neighborhood",
        name: "neighborhood",
        placeholder: "Neighborhood",
      },
    },
    {
      type: "area",
      props: {
        label: "Usable Area",
        id: "usable_area",
        name: "usable_area",
        defaultValue: 0,
      },
    },
  ],
  [
    {
      type: "date",
      props: {
        label: "Ad Date",
        id: "ad_date",
        name: "ad_date",
      },
    },
    {
      type: "currency",
      props: {
        label: "Condominum Fee",
        id: "condominium_fee",
        name: "condominium_fee",
        placeholder: "0",
      },
    },
    {
      type: "currency",
      props: {
        label: "Annual IPTU tax",
        id: "annual_iptu_tax",
        name: "annual_iptu_tax",
        placeholder: "0",
      },
    },
  ],
  [
    {
      type: "range",
      props: {
        label: "Bathrooms",
        id: "bathrooms",
        name: "bathrooms",
        min: 0,
        max: 7,
        currentValue: 1,
      },
    },
    {
      type: "range",
      props: {
        label: "Suites",
        id: "suites",
        name: "suites",
        min: 0,
        max: 6,
        currentValue: 0,
      },
    },
    {
      type: "range",
      props: {
        label: "Parking Spots",
        id: "parking_spots",
        name: "parking_spots",
        min: 0,
        max: 7,
        currentValue: 1,
      },
    },
  ],
];

const App = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = ({
    usable_area,
    condominium_fee,
    annual_iptu_tax,
    bathrooms,
    suites,
    parking_spots,
    ...data
  }) => {
    const new_data = {
      usable_area: parseInt(usable_area) || 0,
      condominium_fee: parseFloat(condominium_fee) || 0,
      annual_iptu_tax: parseFloat(annual_iptu_tax) || 0,
      bathrooms: parseInt(bathrooms),
      suites: parseInt(suites),
      parking_spots: parseInt(parking_spots),
      ...data,
    };
    console.log(new_data);
  };

  return (
    <div className="container">
      <h1>House Price Prediction App</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {featuresFields.map((fields) => (
          <Features fields={fields} key={v4()} register={register} />
        ))}
        <PredictButton />
      </form>
      <PredictionArea />
    </div>
  );
};

export default App;
