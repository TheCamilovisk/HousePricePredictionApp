import React from "react";

const FeatureCurrencyField = ({
  label,
  id,
  name,
  placeholder,
  register,
  errors,
}) => {
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
        onChange={(event) => event.target.value}
      />
    </div>
  );
};

export default FeatureCurrencyField;
