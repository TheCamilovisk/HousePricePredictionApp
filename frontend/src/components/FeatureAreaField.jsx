import React from "react";

const FeatureAreaField = ({ label, id, name, placeholder }) => {
  return (
    <div className="featurefield">
      <label htmlFor={id}>{label}</label>
      <input type="text" name={name} id={id} placeholder={placeholder} />
    </div>
  );
};

const createAreaField = ({ label, id, name, placeholder }) => (
  <FeatureAreaField
    label={label}
    id={id}
    name={name}
    placeholder={placeholder}
    key={id}
  />
);

export { FeatureAreaField, createAreaField };
