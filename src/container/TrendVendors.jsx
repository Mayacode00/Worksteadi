import React from "react";
import { trendingVendors } from "../utils/content";
import { Box, Typography, Stack } from "@mui/material";
import { TrendingVendors } from "../components";
import { Seeall } from "../components";

const { items } = trendingVendors;

const TrendVendors = () => {
  return (
    <Box sx={{ transform: "translateY(-50px)", mt: "50px" }}>
      <Stack
        marginY="20px"
        position="relative"
        zIndex="10"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h2">Trending Vendors</Typography>
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
            <TrendingVendors {...item} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TrendVendors;
