import React from "react";

const FeatureAreaField = ({ label, id, name, placeholder, register }) => {
  return (
    <div className="featurefield">
      <label htmlFor={id}>
        {label} (m<sup>2</sup>)
      </label>
      <input
        type="number"
        id={id}
        {...register(name)}
        placeholder={placeholder}
      />
    </div>
  );
};

const createAreaField = ({ label, id, name, placeholder, register }) => (
  <FeatureAreaField
    label={label}
    id={id}
    name={name}
    placeholder={placeholder}
    register={register}
    key={id}
  />
);

export { FeatureAreaField, createAreaField };
