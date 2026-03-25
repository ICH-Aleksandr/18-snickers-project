import { useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ProductsContext from "../../context";
import ProductCard from "../../components/productCard";

function Home() {
  const { products, fetchProducts } = useContext(ProductsContext);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Container maxWidth={false} sx={{ maxWidth: "1420px", py: 4 }}>
      <Box
        component="img"
        src="/src/assets/img/banner.jpg"
        alt="banner"
        sx={{
          width: "100%",
          height: "530px",
          objectFit: "cover",
          borderRadius: 2,
          mb: 4,
          display: "block",
        }}
      />
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
        Товары
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 3,
        }}
      >
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
    </Container>
  );
}

export default Home;
