import React from "react";
import StyledInput from "./input";

const Input = ({ type, placeholder, onChange, value }) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
