import React from "react";

const FeatureDateField = ({ label, id, name, defaultDate, register }) => {
  return (
    <div className="featurefield">
      <label htmlFor={id}>{label}</label>
      <input type="date" id={id} {...register(name)} defaultValue={defaultDate}/>
    </div>
  );
};

const createDateField = ({ label, id, name, defaultDate, register }) => (
  <FeatureDateField
    label={label}
    id={id}
    name={name}
    defaultDate={defaultDate}
    register={register}
    key={id}
  />
);

export { FeatureDateField, createDateField };
