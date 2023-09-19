import React, { useState } from "react";

const FeatureSelectField = ({ label, id, name, options, register, errors }) => {
  const [optionValue, setOptionValue] = useState("");

  return (
    <div className="featurefield">
      <label htmlFor={id}>{label}</label>
      {errors[name] && <span className="error">{errors[name].message}</span>}
      <select
        id={id}
        {...register(name, {
          required: "Select a valid property type.",
        })}
        defaultValue={""}
        onChange={(e) => e.target.value}
      >
        <option value="" key={id + "option_null"} disabled hidden>
          Select a property type
        </option>
        {options.map((value, index) => (
          <option value={value} key={id + "option" + index}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FeatureSelectField;
