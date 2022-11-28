import React from "react";
import StyledFont from "../../../styles/fonts";
import Button from "../../button";
import StyledCardCart from "./cardCart";

const CardCart = ({ elt, removeCartList }) => {
  return (
    <StyledCardCart id={elt.id.toString()}>
      <div className="divImg">
        <img src={elt.img} alt={elt.name} />
      </div>
      <div className="divInf">
        <StyledFont tag={"h2"} size={"var(--font-14)"}>
          {elt.name}
        </StyledFont>
        <StyledFont
          tag={"span"}
          size={"var(--font-12)"}
          weight={"400"}
          color={"var(--color-grey-100)"}
        >
          {elt.category}
        </StyledFont>
      </div>

      <div>
        <Button
          size={"var(--font-12)"}
          background={"transparent"}
          border={"transparent"}
          color={"var(--color-grey-50)"}
          onClick={()=>removeCartList(elt)}
        >
          Remover
        </Button>
      </div>
    </StyledCardCart>
  );
};

export default CardCart;
