import React from "react";
import Arrow from "../assets/arrow.png";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";


const SeeAll = ({ sx = {}, ...props }) => {
  return (
    <Box
      sx={{
        borderBottom: "1.5px solid #2991F1",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography
        variant="body2"
        underline="none"
        color="primary"
        marginRight="3px"
      >
        See All
      </Typography>
      <img src={Arrow} />
    </Box>
  );
};

export default SeeAll;
