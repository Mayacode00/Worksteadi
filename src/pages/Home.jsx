import React from "react";
import { Navbar } from "../components";
import { RecVendors, TrendServices, TrendVendors } from "../container";
import { Box } from "@mui/material";
import Header from "../container/Header";

const Home = () => {
  return (
    <>
      <Box sx={{ mx: "2rem" }}>
        <Navbar />
      </Box>
      <Header />
      <Box
        sx={{
          mx: "2rem",
          bgColor: "transparent",
        }}
      >
        <RecVendors />
        <TrendServices />
        <TrendVendors />
      </Box>
    </>
  );
};

export default Home;
