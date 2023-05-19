import React from "react";
import { recommendedVendors } from "../utils/content";
import { RecommendedVendors } from "../components";
import { Box, Typography, Stack } from "@mui/material";
import { Seeall } from "../components";
const { items } = recommendedVendors;


const RecVendors = () => {
  return (
    <Box sx={{ transform: "translateY(-90px)" }}>
      <Stack
        marginY="10px"
        position="relative"
        zIndex="10"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h2">Recommended Vendors</Typography>
        <Seeall />
      </Stack>
      <Box
        sx={{
          display: { xs: "column", sm: "flex" },
          overflowX: { xs: "none", sm: "scroll" },
          "&::-webkit-scrollbar": { display: "none" },
        }}
        justifyContent="space-between"
      >
        {items.map((item, i) => (
          <Box key={i}>
            <RecommendedVendors {...item} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default RecVendors;
