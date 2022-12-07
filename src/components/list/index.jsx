import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../service/api";
import CardList from "./cardCart";
import StyledList from "./list";

const List = ({ products, setProducts, cartList, setCartList, filtered }) => {
  const [loading, setLoading] = useState(false);

  function addCartList(product) {
    if (!cartList.some((elt) => Number(elt.id) === Number(product.id))) {
      setCartList([...cartList, product]);
      toast.success("Produto adicionado ao carrinho!");
    } else {
      toast.error("Esse produto já foi adicionado ao carrinho");
    }
  }

  const productFiltered = products.filter(
    (elt) =>
      elt.category.toLowerCase().includes(filtered.toLowerCase()) ||
      elt.name.toLowerCase().includes(filtered.toLowerCase())
  );

  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true);
        const response = await api.get("products");
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    getProducts();
  }, []);

  return (
    <>
      {loading ? (
        <h2>Carregando...</h2>
      ) : (
        <StyledList>
          {productFiltered.map((elt) => (
            <CardList
              key={elt.id.toString()}
              elt={elt}
              addCartList={addCartList}
            />
          ))}
        </StyledList>
      )}
    </>
  );
};
export default List;
