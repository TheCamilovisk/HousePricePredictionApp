import React from "react";

const FeatureTextField = ({ label, id, name, placeholder }) => {
  return (
    <div className="featurefield">
      <label htmlFor={id}>{label}</label>
      <input type="text" name={name} id={id} placeholder={placeholder} />
    </div>
  );
};

const createTextField = ({ label, id, name, placeholder }) => (
  <FeatureTextField
    label={label}
    id={id}
    name={name}
    placeholder={placeholder}
    key={id}
  />
);

export { FeatureTextField, createTextField };
