import React from "react";

import {
  createAreaField,
  createCurrencyField,
  createDateField,
  createRangeField,
  createSelectField,
  createTextField,
} from "../components";

const createField = ({ type, props, register, errors, getValues }) => {
  let field;
  switch (type) {
    case "text":
      field = createTextField({ ...props, register });
      break;

    case "select":
      field = createSelectField({ ...props, register });
      break;

    case "area":
      field = createAreaField({ ...props, register, errors });
      break;

    case "date":
      field = createDateField({ ...props, register });
      break;

    case "currency":
      field = createCurrencyField({ ...props, register, errors });
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

const Features = ({ fields, register, errors, getValues }) => {
  return (
    <div className="features">
      {fields.map((field) =>
        createField({ ...field, register, errors, getValues })
      )}
    </div>
  );
};

export default Features;
