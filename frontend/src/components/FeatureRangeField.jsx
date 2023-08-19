import React, { useState } from "react";

const FeatureRangeField = ({
  label,
  id,
  name,
  min,
  max,
  defaultValue,
  register,
}) => {
  const [fieldValue, setFieldValue] = useState(defaultValue);

  return (
    <div className="featurefield">
      <label htmlFor={id}>{label}</label>
      <div className="range-feature">
        <input
          type="range"
          id={id}
          {...register(name)}
          min={min}
          max={max}
          defaultValue={defaultValue}
          onChange={(event) => setFieldValue(event.target.value)}
        />
        <p>{fieldValue}</p>
      </div>
    </div>
  );
};

const createRangeField = ({
  label,
  id,
  name,
  min,
  max,
  defaultValue,
  register,
}) => (
  <FeatureRangeField
    label={label}
    id={id}
    name={name}
    min={min}
    max={max}
    defaultValue={defaultValue}
    register={register}
    key={id}
  />
);

export { FeatureRangeField, createRangeField };
