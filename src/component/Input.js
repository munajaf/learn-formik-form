import React from "react";
import { Field } from "formik";
import { displayError } from "../function/displayError";
import Label from "./styled/Label";

export default ({label, name, disabled, error}) => {

  return (
    <>
      <Label error={error[name]}>{displayError`${label} - ${error[name]}`}</Label><br/>
      <Field name={name} disabled={disabled}/><br/>
    </>
  );
}