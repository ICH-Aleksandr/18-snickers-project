import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home";
import Cart from "../../pages/cart";
import Contacts from "../../pages/contacts";

function Main() {
  return (
    <main style={{ flex: 1 }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </main>
  );
}

export default Main;
