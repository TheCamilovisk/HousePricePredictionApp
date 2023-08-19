import React, { useState } from "react";

const FeatureCurrencyField = ({ label, id, name, placeholder, register }) => {
  const [currencyValue, setCurrencyValue] = useState(0);
  return (
    <div className="featurefield">
      <label htmlFor={id}>{label} (R$)</label>
      <input
        type="number"
        id={id}
        step={0.01}
        {...register(name)}
        placeholder={placeholder}
        onChange={(event) => setCurrencyValue(event.target.value)}
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
