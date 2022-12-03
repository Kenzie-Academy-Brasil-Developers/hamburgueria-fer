import React from "react";
import StyledInput from "./input";

const Input = ({ type, placeholder, onChange }) => {
  return <StyledInput type={type} placeholder={placeholder} onChange={onChange} />;
};

export default Input;
