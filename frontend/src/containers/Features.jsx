import React from "react";

import {
  createAreaField,
  createCurrencyField,
  createDateField,
  createRangeField,
  createSelectField,
  createTextField,
} from "../components";

const createField = ({ type, props, register, getValues }) => {
  let field;
  switch (type) {
    case "text":
      field = createTextField({ ...props, register });
      break;

    case "select":
      field = createSelectField({ ...props, register });
      break;

    case "area":
      field = createAreaField({ ...props, register });
      break;

    case "date":
      field = createDateField({ ...props, register });
      break;

    case "currency":
      field = createCurrencyField({ ...props, register });
      break;

    case "range":
      field = createRangeField({ ...props, register, getValues });
      break;

    default:
      field = createTextField({ ...props, register });
      break;
  }
  return field;
};

const Features = ({ fields, register, getValues }) => {
  return (
    <div className="features">
      {fields.map((field) => createField({ ...field, register, getValues }))}
    </div>
  );
};

export default Features;
