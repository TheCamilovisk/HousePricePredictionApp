import React from "react";

const FeatureDateField = ({ label, id, name, register }) => {
  return (
    <div className="featurefield">
      <label htmlFor={id}>{label}</label>
      <input type="date" id={id} {...register(name)} />
    </div>
  );
};

const createDateField = ({ label, id, name, register }) => (
  <FeatureDateField
    label={label}
    id={id}
    name={name}
    register={register}
    key={id}
  />
);

export { FeatureDateField, createDateField };
