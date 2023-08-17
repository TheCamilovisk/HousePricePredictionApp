import React from "react";

const FeatureSelectField = ({ label, id, name, options }) => {
  return (
    <div className="featurefield">
      <label htmlFor={id}>{label}</label>
      <select name={name} id={id}>
        {options.map((value, index) => (
          <option value={value} key={id + "option" + index}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

const createSelectField = ({ label, id, name, options }) => (
  <FeatureSelectField
    label={label}
    id={id}
    name={name}
    options={options}
    key={id}
  />
);

export { FeatureSelectField, createSelectField };
