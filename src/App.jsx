import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./components/header";
import Footer from "./components/footer";
import ProductProvider from "./components/productsProvider";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Contacts from "./pages/contacts";

function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;
