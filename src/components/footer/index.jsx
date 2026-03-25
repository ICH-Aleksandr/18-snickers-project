import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#3a3a3a",
        mt: "auto",
        height: 347,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 4,
          }}
        >
          <Box>
            <Typography
              sx={{ color: "#fff", fontWeight: 700, fontSize: 24, mb: 1 }}
            >
              Контакты
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: 18 }}>
              8 800 000 00 00
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: 18 }}>
              email@example@email.com
            </Typography>
          </Box>

          <Box>
            <IconButton sx={{ color: "#fff" }}>
              <FacebookIcon sx={{ fontSize: 32 }} />
            </IconButton>
            <IconButton sx={{ color: "#fff" }}>
              <TwitterIcon sx={{ fontSize: 32 }} />
            </IconButton>
            <IconButton sx={{ color: "#fff" }}>
              <InstagramIcon sx={{ fontSize: 32 }} />
            </IconButton>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: "rgba(255,255,255,0.4)", fontSize: 20 }}>
            2024 Сникер-магазин. Все права защищены
          </Typography>

          <Box
            sx={{
              borderBottom: "1px solid rgba(255,255,255,0.4)",
              display: "flex",
            }}
          >
            <InputBase
              placeholder="Введите свой email:"
              sx={{ color: "rgba(255,255,255,0.5)", fontSize: 20, width: 200 }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
