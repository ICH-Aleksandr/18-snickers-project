import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";

function ProductCard({ product }) {
  return (
    <Card
      sx={{
        width: "386px",
        height: "393px",
        borderRadius: 4,
        boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
        p: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        cursor: "pointer",
        transition: "box-shadow 0.25s, transform 0.25s",
        "&:hover": {
          boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
          transform: "translateY(-4px)",
        },
      }}
    >
      <CardMedia
        component="img"
        image={product.image}
        alt={product.name}
        sx={{ height: 220, objectFit: "contain" }}
      />
      <CardContent sx={{ p: 0 }}>
        <Typography
          sx={{ fontSize: 14, fontWeight: 500, mb: 2, lineHeight: 1.4 }}
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
                fontSize: 10,
                color: "rgba(0,0,0,0.4)",
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              цена:
            </Typography>
            <Typography sx={{ fontWeight: 700, fontSize: 18 }}>
              {product.price} €
            </Typography>
          </Box>
          <IconButton
            size="small"
            sx={{
              border: "1px solid rgba(0,0,0,0.15)",
              width: 32,
              height: 32,
              "&:hover": { backgroundColor: "#000", color: "#fff" },
            }}
          >
            <AddIcon sx={{ fontSize: 18 }} />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
