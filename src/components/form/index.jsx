import React from "react";
import Button from "../button";
import Input from "../input";
import StyledForm from "./form";

const Form = ({ setSearch, search, filtered, setFiltered }) => {
  function searchSubmit(e) {
    e.preventDefault();
    setFiltered(search);
  }

  return (
    <StyledForm onSubmit={searchSubmit}>
      <Input
        type={"text"}
        placeholder={"Digite a pesquisa..."}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button type={"submit"}>Pesquisar</Button>
    </StyledForm>
  );
};

export default Form;
