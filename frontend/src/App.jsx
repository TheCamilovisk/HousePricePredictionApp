import React from "react";
import "./App.css";

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
        label: "Neighboor",
        id: "neighboor",
        name: "neighboor",
        placeholder: "Neighboor",
      },
    },
    {
      type: "area",
      props: {
        label: "Usable Area",
        id: "usable_are",
        name: "usable_are",
        placeholder: "0",
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
        id: "annul_iptu_tax",
        name: "annul_iptu_tax",
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
  return (
    <div className="container">
      <h1>House Price Prediction App</h1>
      <form action="#">
        {featuresFields.map((fields) => (
          <Features fields={fields} key={v4()} />
        ))}
        <PredictButton />
        <PredictionArea />
      </form>
    </div>
  );
};

export default App;
