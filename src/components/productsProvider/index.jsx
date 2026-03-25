import { useState, useEffect, useCallback } from "react";
import ProductsContext, { CartContext } from "../../context";
import axios from "axios";

const BASE_URL = "https://69c39e40b780a9ba03e759f4.mockapi.io";

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cartData, setCartData] = useState([]);

  const fetchProducts = useCallback(async () => {
    const { data } = await axios.get(`${BASE_URL}/productsData`);
    setProducts(data);
  }, []);

  useEffect(() => {
    axios.get(`${BASE_URL}/cartData`).then(({ data }) => {
      setCartData(data);
    });
  }, []);

  const addToCart = useCallback(
    async (product) => {
      const already = cartData.some((item) => item.name === product.name);
      if (already) return;
      const { data } = await axios.post(`${BASE_URL}/cartData`, {
        name: product.name,
        price: product.price,
        image: product.image,
      });
      setCartData((prev) => [...prev, data]);
    },
    [cartData],
  );

  const deleteFromCart = useCallback(async (productId) => {
    await axios.delete(`${BASE_URL}/cartData/${productId}`);
    setCartData((prev) => prev.filter((item) => item.id !== productId));
  }, []);

  useEffect(() => {
    axios.get(`${BASE_URL}/cartData`).then(({ data }) => {
      setCartData(data);
    });
  }, []);

  return (
    <ProductsContext.Provider value={{ products, fetchProducts }}>
      <CartContext.Provider value={{ cartData, addToCart, deleteFromCart }}>
        {children}
      </CartContext.Provider>
    </ProductsContext.Provider>
  );
}

export default ProductProvider;
