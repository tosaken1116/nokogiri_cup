import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const status = 1;
export default function Header() {
  return (
    <Box sx={{ flex: "auto", color: "text.disabled" }}>
      <AppBar position="static">
        <Stack direction="row" sx={{ bgcolor: "#EEEEEE" }}>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "black" }}
            >
              Surportforio仮
            </Typography>
          </Toolbar>
          {status ? (
            <Stack direction="row">
              <Button variant="contained" sx={{ bgcolor: "grey" }}>
                <Typography sx={{ flexGrow: 1, color: "black" }}>
                  singin
                </Typography>
              </Button>
              <Button variant="contained" sx={{ bgcolor: "black" }}>
                <Typography sx={{ flexGrow: 1, color: "black" }}>
                  singup
                </Typography>
              </Button>
            </Stack>
          ) : (
            <Button variant="contained">
              <Typography sx={{ flexGrow: 1, color: "black" }}>
                Username
              </Typography>
            </Button>
          )}
        </Stack>
      </AppBar>
    </Box>
  );
}
