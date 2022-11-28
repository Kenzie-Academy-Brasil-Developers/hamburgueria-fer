import React, { useEffect } from "react";
import { toast } from "react-toastify";
import api from "../../service/api";
import CardList from "./cardCart";
import StyledList from "./list";

const List = ({ products, setProducts, cartList, setCartList }) => {
  function addCartList(product) {
    if (!cartList.some((elt) => Number(elt.id) === Number(product.id))) {
      setCartList([...cartList, product]);
      toast.success("Produto adicionado ao carrinho!");
    } else {
      toast.error("Esse produto já foi adicionado ao carrinho");
    }
  }

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get("products");
        console.log(response);
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getProducts();
  }, []);

  return (
    <StyledList>
      {products.map((elt) => (
        <CardList key={elt.id.toString()} elt={elt} addCartList={addCartList} />
      ))}
    </StyledList>
  );
};
export default List;
