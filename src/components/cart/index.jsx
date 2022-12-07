import React from "react";
import { toast } from "react-toastify";
import StyledFont from "../../styles/fonts";
import Total from "../total";
import CardCart from "./cardCart";
import StyledCart from "./cart";

const Cart = ({ cartList, setCartList }) => {
  function removeCartList(product) {
    const newList = cartList.filter((elt) => elt.id !== product.id);
    setCartList(newList);
    toast.warn("Ixiii, produto removido do carrinho!");
  }

  return (
    <StyledCart>
      <div className="headerCard">
        <StyledFont tag={"h2"} color={"var(--color-white)"}>
          Carrinho de compras
        </StyledFont>
      </div>
      {cartList.map((elt) => (
        <CardCart
          key={elt.id.toString()}
          elt={elt}
          removeCartList={removeCartList}
        />
      ))}
      <Total cartList={cartList} setCartList={setCartList} />
    </StyledCart>
  );
};

export default Cart;
