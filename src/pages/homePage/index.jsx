import { useState } from "react";
import Cart from "../../components/cart";
import Header from "../../components/header";
import List from "../../components/list";
import StyledHome from "./homePage";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState("");

  return (
    <>
      <Header
        setSearch={setSearch}
        search={search}
        filtered={filtered}
        setFiltered={setFiltered}
      />
      <StyledHome>
        <List
          products={products}
          setProducts={setProducts}
          cartList={cartList}
          setCartList={setCartList}
          filtered={filtered}
        />
        <Cart cartList={cartList} setCartList={setCartList} />
      </StyledHome>
    </>
  );
};

export default HomePage;
