import React from "react";

const FeatureAreaField = ({
  label,
  id,
  name,
  placeholder,
  register,
  errors,
}) => {
  return (
    <div className="featurefield">
      <label htmlFor={id}>
        {label} (m<sup>2</sup>)
      </label>
      {errors[name] && <span className="error">{errors[name].message}</span>}
      <input
        type="number"
        id={id}
        {...register(name, {
          required: "This field is required and must be a positive number.",
        })}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FeatureAreaField;
