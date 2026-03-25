import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import ProductProvider from "./components/productsProvider";

function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Header />
          <Main />
          <Footer />
        </div>
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;
