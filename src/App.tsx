import { Box, Divider, Stack, Typography } from "@mui/material";
import logo from "./assets/Logo.png";
import { useState } from "react";

function App() {
  const titleStyle = {
    fontWeight: 600,
    fontSize: "2em",
    color: "white",
  };
  return (
    <Stack sx={{ width: "100vw", height: "100vh" }} direction="row">
      <Box sx={{ position: "fixed", bottom: 30, right: 30 }}>
        <img src={logo} style={{ width: "300px" }} />
      </Box>

      <Box sx={{ width: "100%" }}>
        <Box sx={titleStyle} pt={2.5} pb={1.5} px={5} bgcolor="#6c6e71">
          <Typography variant="h4" fontWeight={500} pb={1}>
            Preparing...
          </Typography>
        </Box>
        <Stack p={2}>
          {["123", "124", "125", "126", "127"].map((value) => (
            <Stack key={value} sx={{ maxWidth: 200 }} p={2}>
              <Typography variant="h1" fontWeight={500} pb={1}>
                {value}
              </Typography>
              <Divider sx={{ borderBottomWidth: 2 }} />
            </Stack>
          ))}
        </Stack>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Box sx={titleStyle} pt={2.5} pb={1.5} px={5} bgcolor="#1d91ce">
          <Typography variant="h4" fontWeight={500} pb={1}>
            Please Collect
          </Typography>
        </Box>
        <Stack p={2}>
          {["120", "121", "122"].map((value) => (
            <Stack key={value} sx={{ maxWidth: 200 }} p={2}>
              <Typography variant="h1" fontWeight={500} pb={1} color="#1d91ce">
                {value}
              </Typography>
              <Divider sx={{ borderBottomWidth: 2 }} />
            </Stack>
          ))}
        </Stack>
      </Box>
    </Stack>
  );
}

export default App;
