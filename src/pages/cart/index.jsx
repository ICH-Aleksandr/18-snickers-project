// import styles from "./styles.module.css";

// function Cart() {
//   return <div>Корзина</div>;
// }

// export default Cart;

import { useContext } from "react";
import { CartContext } from "../../context";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function Cart() {
  const { cartData, deleteFromCart } = useContext(CartContext);
  const total = cartData.reduce((sum, item) => sum + Number(item.price), 0);

  return (
    <Container maxWidth={false} sx={{ maxWidth: "1420px", py: 4 }}>
      <Typography variant="h6" sx={{ fontWeight: 700, fontSize: 36, mb: 3 }}>
        Корзина
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
          {cartData.length === 0 && (
            <Typography sx={{ color: "rgba(0,0,0,0.4)" }}>
              Корзина пуста
            </Typography>
          )}
          {cartData.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                alignItems: "center",
                border: "1px solid rgba(0,0,0,0.1)",
                background: "rgba(250, 250, 250, 1)",
                borderRadius: 3,
                p: 2,
                gap: 2,
                maxWidth: 900,
                height: 134,
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt={item.name}
                sx={{ width: 250, height: 170, objectFit: "contain" }}
              />
              <Divider orientation="vertical" flexItem />
              <Typography
                sx={{
                  flexShrink: 0,
                  fontSize: 24,
                  fontWeight: 500,
                  width: 274,
                }}
              >
                {item.name}
              </Typography>
              <Box sx={{ mr: 2 }}>
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
                  {item.price} €
                </Typography>
              </Box>

              <IconButton
                onClick={() => deleteFromCart(item.id)}
                sx={{ ml: "auto", width: 80, height: 80 }}
              >
                <DeleteOutlineIcon sx={{ fontSize: 30 }} />
              </IconButton>
            </Box>
          ))}
        </Box>

        {cartData.length > 0 && (
          <Box
            sx={{
              width: 388,
              border: "1px solid rgba(0,0,0,0.1)",
              background: "rgba(250, 250, 250, 1)",
              borderRadius: 3,
              p: 4,
            }}
          >
            <Typography
              sx={{ fontWeight: 700, fontSize: 36, textAlign: "center", mb: 2 }}
            >
              Итого
            </Typography>

            {cartData.map((item) => (
              <Typography
                key={item.id}
                sx={{ fontSize: 24, width: 274, mb: 4 }}
              >
                {item.name}
              </Typography>
            ))}

            <Divider sx={{ my: 2 }} />

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
              {total} €
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default Cart;
