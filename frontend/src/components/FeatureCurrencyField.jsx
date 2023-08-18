import React, { useState } from "react";

const FeatureCurrencyField = ({ label, id, name, placeholder, register }) => {
  const [currencyValue, setCurrencyValue] = useState("");
  return (
    <div className="featurefield">
      <label htmlFor={id}>{label} (R$)</label>
      <input
        type="text"
        id={id}
        {...register(name)}
        placeholder={0.0}
        value={currencyValue}
        onChange={(event) => setCurrencyValue(parseFloat(event.target.value))}
      />
    </div>
  );
};

const createCurrencyField = ({ label, id, name, placeholder, register }) => (
  <FeatureCurrencyField
    label={label}
    id={id}
    name={name}
    placeholder={placeholder}
    register={register}
    key={id}
  />
);

export { FeatureCurrencyField, createCurrencyField };
