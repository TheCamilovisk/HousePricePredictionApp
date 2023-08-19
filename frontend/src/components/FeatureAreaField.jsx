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
        {...register(name, { required: "This field is required and must be a positive number." })}
        placeholder={placeholder}
      />
    </div>
  );
};

const createAreaField = ({
  label,
  id,
  name,
  placeholder,
  register,
  errors,
}) => (
  <FeatureAreaField
    label={label}
    id={id}
    name={name}
    placeholder={placeholder}
    register={register}
    errors={errors}
    key={id}
  />
);

export { FeatureAreaField, createAreaField };
