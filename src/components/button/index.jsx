import React from "react";
import { StyledButton } from "./button";

const Button = ({
  children,
  background,
  border,
  color,
  type,
  onClick,
  size,
}) => {
  return (
    <>
      <StyledButton
        type={type}
        onClick={onClick}
        background={background}
        border={border}
        color={color}
        size={size}
      >
        {children}
      </StyledButton>
    </>
  );
};

export default Button;
