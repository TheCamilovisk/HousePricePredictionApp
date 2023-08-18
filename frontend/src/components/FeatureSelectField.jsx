import React from "react";

const FeatureSelectField = ({ label, id, name, options, register }) => {
  return (
    <div className="featurefield">
      <label htmlFor={id}>{label}</label>
      <select id={id} {...register(name)}>
        {options.map((value, index) => (
          <option value={value} key={id + "option" + index}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

const createSelectField = ({ label, id, name, options, register }) => (
  <FeatureSelectField
    label={label}
    id={id}
    name={name}
    options={options}
    register={register}
    key={id + "_field"}
  />
);

export { FeatureSelectField, createSelectField };
