import React from "react";
import StyledHeader from "./header";
import Logo from "../../assets/logo.svg";
import Form from "../form";

const Header = ({products, setSearch, filtered, search, setFiltered} ) => {
  return (
    <StyledHeader>
      <div className="containerHeader">
        <img src={Logo} alt="logo" />
        <Form products={products} setSearch={setSearch} search={search} filtered={filtered} setFiltered={setFiltered} />
      </div>
    </StyledHeader>
  );
};

export default Header;
