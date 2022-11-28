import { useState } from "react";
import Cart from "../../components/cart";
import Header from "../../components/header";
import List from "../../components/list";
import StyledHome from "./homePage";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [cartList, setCartList] = useState([]);
  // const [filteredProducts, setFilteredProducts] = useState([]);

  return (
    <>
      <Header />
      <StyledHome>
        <List
          products={products}
          setProducts={setProducts}
          cartList={cartList}
          setCartList={setCartList}
        />
        <Cart cartList={cartList} setCartList={setCartList} />
      </StyledHome>
    </>
  );
};

export default HomePage;
