import React from "react";

const FeatureDateField = ({ label, id, name }) => {
  return (
    <div className="featurefield">
      <label htmlFor={id}>{label}</label>
      <input type="date" name={name} id={id} />
    </div>
  );
};

const createDateField = ({ label, id, name }) => (
  <FeatureDateField label={label} id={id} name={name} key={id} />
);

export { FeatureDateField, createDateField };
