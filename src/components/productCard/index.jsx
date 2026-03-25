import { useContext } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import { CartContext } from "../../context";

function ProductCard({ product }) {
  const { cartData, addToCart } = useContext(CartContext);
  const inCart = cartData.some((item) => item.name === product.name);

  return (
    <Card
      sx={{
        width: "386px",
        height: "393px",
        borderRadius: 4,
        boxShadow: "none",
        border: "1px solid rgba(0,0,0,0.1)",
        p: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        cursor: "pointer",
        transition: "box-shadow 0.25s, transform 0.25s",
        "&:hover": {
          boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
          transform: "translateY(-1px)",
        },
      }}
    >
      <CardMedia
        component="img"
        image={product.image}
        alt={product.name}
        sx={{ height: 200, width: 293, objectFit: "contain", mx: "auto" }}
      />
      <CardContent sx={{ p: 0, width: 293, mx: "auto" }}>
        <Typography
          sx={{
            fontSize: 24,
            fontWeight: 500,
            mb: 2,
            lineHeight: 1.4,
            width: 274,
          }}
        >
          {product.name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: 14,
                color: "rgba(0,0,0,0.4)",
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              цена:
            </Typography>
            <Typography sx={{ fontWeight: 700, fontSize: 24 }}>
              {product.price} €
            </Typography>
          </Box>
          <IconButton
            size="small"
            onClick={() => addToCart(product)}
            sx={{
              border: "1px solid rgba(0,0,0,0.15)",
              width: 32,
              height: 32,
              backgroundColor: inCart ? "#000" : "transparent",
              color: inCart ? "#fff" : "inherit",
              "&:hover": { backgroundColor: "#000", color: "#fff" },
            }}
          >
            {inCart ? (
              <CheckIcon sx={{ fontSize: 18 }} />
            ) : (
              <AddIcon sx={{ fontSize: 18 }} />
            )}
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
