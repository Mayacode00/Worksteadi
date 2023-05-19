import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Bg from "../assets/background.jpg";


const gradientBackground = {
  background: "linear-gradient(90deg, #ffffff 0%, #f2e8e8 100%)",
  opacity: 0.9,
  position: "relative",
  zIndex: "",
};

const Header = () => {
  return (
    <Box
      sx={{
        overflow: "hidden",
        backgroundImage: `url(${Bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Grid
        container
        justify="flex-end"
        sx={{
          ...gradientBackground,
          height: "60vh",
          px: "1.6rem",
        }}
      >
        <Stack sx={{ height: "inherit", mt: "50px" }} justifyContent="center">
          <Typography variant="h1">Marketplace</Typography>
          <Typography color="gray">
            Find and access vendors and services on Workstedi today
          </Typography>
          <Box sx={{ mt: "1rem" }}>
            <Typography
              variant="body2"
              color="primary"
              sx={{ textDecoration: "underline" }}
            >
              See All Service Categories
            </Typography>
          </Box>
        </Stack>
      </Grid>
    </Box>
  );
};

export default Header;
