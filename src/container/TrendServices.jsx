import React from "react";
import { trendingServices } from "../utils/content";
import { Box, Typography, Stack } from "@mui/material";
import { TrendingServices } from "../components";

import { Seeall } from "../components";

const { items } = trendingServices;

const TrendServices = () => {
  return (
    <Box sx={{ transform: "translateY(-50px)" }}>
      <Stack
        marginY="20px"
        position="relative"
        zIndex="10"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h2">Trending Services</Typography>
        <Seeall />
      </Stack>
      <Box
        sx={{
          display: { xs: "column", sm: "flex" },
          overflowX: { xs: "none", sm: "scroll" },
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {items.map((item, i) => (
          <Box
            key={i}
            sx={{
              display: { xs: "flex" },
              justifyContent: { xs: "center" },
            }}
          >
            <TrendingServices {...item} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TrendServices;
