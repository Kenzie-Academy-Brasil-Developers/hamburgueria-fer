import React from "react";
import StyledHeader from "./header";
import Logo from "../../assets/logo.svg";
import Form from "../form";

const Header = ({products, filtered, setFiltered} ) => {
  return (
    <StyledHeader>
      <div className="containerHeader">
        <img src={Logo} alt="logo" />
        <Form products={products}  filtered={filtered} setFiltered={setFiltered} />
      </div>
    </StyledHeader>
  );
};

export default Header;
