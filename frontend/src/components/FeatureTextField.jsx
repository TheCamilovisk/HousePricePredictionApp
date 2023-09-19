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

export default FeatureTextField;
