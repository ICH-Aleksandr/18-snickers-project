import { useState } from "react";
import ProductsContext from "../../context";
import axios from "axios";

const BASE_URL = "https://69c39e40b780a9ba03e759f4.mockapi.io";

function ProductProvider({ children }) {
  const [cartData, setCartData] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await axios.get(`${BASE_URL}/productsData`);
    setProducts(data);
  };

  const addToCart = async () => {};
  const deleteFromCart = async () => {};
  const fetchCartData = async () => {};

  return (
    <ProductsContext.Provider value={{ products, fetchProducts, cartData }}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductProvider;
