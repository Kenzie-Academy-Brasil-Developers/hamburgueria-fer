import React from "react";
import { useState } from "react";
import Button from "../button";
import Input from "../input";
import StyledForm from "./form";

const Form = ({ setFiltered }) => {
  const [search, setSearch] = useState("");
  function searchSubmit(e) {
    e.preventDefault();
    setFiltered(search);
    setSearch("");
  }

  return (
    <StyledForm onSubmit={searchSubmit}>
      <Input
        type={"text"}
        placeholder={"Digite a pesquisa..."}
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <Button type={"submit"}>Pesquisar</Button>
    </StyledForm>
  );
};

export default Form;
