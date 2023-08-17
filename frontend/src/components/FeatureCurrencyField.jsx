import React from "react";

const FeatureCurrencyField = ({ label, id, name, placeholder }) => {
  return (
    <div className="featurefield">
      <label htmlFor={id}>{label}</label>
      <input type="text" name={name} id={id} placeholder={placeholder} />
    </div>
  );
};

const createCurrencyField = ({ label, id, name, placeholder }) => (
  <FeatureCurrencyField
    label={label}
    id={id}
    name={name}
    placeholder={placeholder}
    key={id}
  />
);

export { FeatureCurrencyField, createCurrencyField };
