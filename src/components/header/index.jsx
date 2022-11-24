import React from "react";
import StyledHeader from "./header";
import Logo from "../../assets/logo.svg";
import Form from "../form";

const Header = () => {
  return (
    <StyledHeader>
      <div className="containerHeader">
        <img src={Logo} alt="logo" />
        <Form />
      </div>
    </StyledHeader>
  );
};

export default Header;
