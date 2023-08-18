import React from "react";

const FeatureTextField = ({ label, id, name, placeholder, register }) => {
  return (
    <div className="featurefield">
      <label htmlFor={id}>{label}</label>
      <input
      type="text"
        id={id}
        {...register(name, {
          maxLength: 50,
        })}
        placeholder={placeholder}
      />
    </div>
  );
};

const createTextField = ({ label, id, name, placeholder, register }) => (
  <FeatureTextField
    label={label}
    id={id}
    name={name}
    placeholder={placeholder}
    register={register}
    key={id + "_field"}
  />
);

export { FeatureTextField, createTextField };
