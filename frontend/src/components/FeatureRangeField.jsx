import React from "react";

const FeatureRangeField = ({ label, id, name, min, max, currentValue }) => {
  return (
    <div className="featurefield">
      <label htmlFor={id}>{label}</label>
      <div className="range-feature">
        <input
          type="range"
          name={name}
          id={id}
          min={min}
          max={max}
          defaultValue={currentValue}
        />
        <p>0</p>
      </div>
    </div>
  );
};

const createRangeField = ({ label, id, name, min, max, currentValue }) => (
  <FeatureRangeField
    label={label}
    id={id}
    name={name}
    min={min}
    max={max}
    currentValue={currentValue}
    key={id}
  />
);

export { FeatureRangeField, createRangeField };
