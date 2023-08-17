import React from "react";

import {
  createAreaField,
  createCurrencyField,
  createDateField,
  createRangeField,
  createSelectField,
  createTextField,
} from "../components";

const createField = ({ type, props }) => {
  let field;
  switch (type) {
    case "text":
      field = createTextField(props);
      break;

    case "select":
      field = createSelectField(props);
      break;

    case "area":
      field = createAreaField(props);
      break;

    case "date":
      field = createDateField(props);
      break;

    case "currency":
      field = createCurrencyField(props);
      break;

    case "range":
      field = createRangeField(props);
      break;

    default:
      field = createTextField(props);
      break;
  }
  return field;
};

const Features = ({ fields }) => {
  return (
    <div className="features">{fields.map((field) => createField(field))}</div>
  );
};

export default Features;
