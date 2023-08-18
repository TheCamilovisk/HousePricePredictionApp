import React from "react";

const FeatureAreaField = ({ label, id, name, defaultValue, register }) => {
  return (
    <div className="featurefield">
      <label htmlFor={id}>{label} (m<sup>2</sup>)</label>
      <input
        type="number"
        id={id}
        {...register(name)}
        placeholder={defaultValue}
      />
    </div>
  );
};

const createAreaField = ({ label, id, name, defaultValue, register }) => (
  <FeatureAreaField
    label={label}
    id={id}
    name={name}
    defaultValue={defaultValue}
    register={register}
    key={id}
  />
);

export { FeatureAreaField, createAreaField };
