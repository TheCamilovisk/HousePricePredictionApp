import React, { useEffect, useState } from "react";

const FeatureRangeField = ({
  label,
  id,
  name,
  min,
  max,
  defaultValue,
  register,
  getValues,
}) => {
  const [fieldValue, setFieldValue] = useState();

  useEffect(() => {
    const currentValue = getValues(name);
    setFieldValue(currentValue ? currentValue : defaultValue);
  }, []);

  return (
    <div className="featurefield">
      <label htmlFor={id}>{label}</label>
      <div className="range-feature">
        <input
          type="range"
          id={id}
          {...register(name)}
          min={min}
          max={max}
          defaultValue={defaultValue}
          onChange={(event) => setFieldValue(event.target.value)}
          onLoad={(event) => setFieldValue(event.target.value)}
        />
        <p>{fieldValue}</p>
      </div>
    </div>
  );
};

export default FeatureRangeField;
