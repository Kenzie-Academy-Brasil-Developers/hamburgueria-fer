import React from "react";

import TypeTag from "../../styles/typeTag";
import Button from "../button";
import { StyledTotal, StyledVazio } from "./total";

const Total = ({ setCartList, cartList }) => {
  const totalSome = cartList.reduce((acc, actualValue) => {
    return Number(actualValue.price) + Number(acc);
  }, 0);

  function removeAll() {
    setCartList([]);
  }
  return (
    <>
      {totalSome !== 0 ? (
        <StyledTotal>
          <div className="divValue">
            <TypeTag tag={"h3"}>Total</TypeTag>
            <TypeTag tag={"p"}>R$ {totalSome}</TypeTag>
          </div>
          <Button
            type={"button"}
            background={"var(--color-grey-50)"}
            border={"var(--color-grey-50)"}
            onClick={() => removeAll()}
          >
            Remover todos
          </Button>
        </StyledTotal>
      ) : (
        <StyledVazio>
          <TypeTag tag={"h3"}>Sua sacola está vazia </TypeTag>
          <TypeTag tag={"span"}> Adicione itens</TypeTag>
        </StyledVazio>
      )}
    </>
  );
};

export default Total;
