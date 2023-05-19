import React from "react";
import { Box, Typography, Stack } from "@mui/material";


const TrendingServices = ({ image, title, vendors }) => {
  return (
    <Box
      sx={{
        color: "#ffffff",
        position: "relative",
        height: "150px",
        width: "320px",
        marginBottom: "1rem",
        marginRight: { xs: "0", sm: "1.5rem" },
      }}
    >
      <img
        src={image}
        style={{
          height: "150px",
          width: "320px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bgcolor: "rgb(0, 0, 0, 0.3)",
          borderRadius: "10px",
          height: "150px",
          width: "320px",
          bottom: "0px",
        }}
      >
        <Stack
          sx={{
            px: "10px",
            marginTop: "100px",
          }}
        >
          <Typography variant="h4">{title}</Typography>
          <Typography variant="body3">{vendors}</Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default TrendingServices;
