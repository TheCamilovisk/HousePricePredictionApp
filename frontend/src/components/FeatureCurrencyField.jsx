import React from "react";

const FeatureCurrencyField = ({ label, id, name, placeholder, register, errors }) => {
  return (
    <div className="featurefield">
      <label htmlFor={id}>{label} (R$)</label>
      {errors[name] && <span className="error">{errors[name].message}</span>}
      <input
        type="number"
        id={id}
        step={0.01}
        {...register(name, {
          required: "This field is required and must be a positive number.",
        })}
        placeholder={placeholder}
        onChange={(event) => setCurrencyValue(event.target.value)}
      />
    </div>
  );
};

const createCurrencyField = ({ label, id, name, placeholder, register, errors }) => (
  <FeatureCurrencyField
    label={label}
    id={id}
    name={name}
    placeholder={placeholder}
    register={register}
    errors={errors}
    key={id}
  />
);

export { FeatureCurrencyField, createCurrencyField };
