import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const commonStyles = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
};

const borderImage = {
  border: "1px solid #E5E7EB",
  borderRadius: "15px",
};

const TrendingVendors = ({
  image,
  title,
  verified,
  job,
  star,
  location,
  rate,
}) => {
  return (
    <Box
      sx={{
        ...borderImage,
        height: "270px",
        width: "300px",
        display: "flex",
        marginRight: { xs: "0", sm: "1.5rem" },
        marginY: "15px",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
      }}
    >
      <Stack direction="column" alignItems="center" justifyContent="center">
        <img
          src={image}
          style={{
            height: "130px",
            width: "130px",
            borderRadius: "130px",
            objectFit: "cover",
          }}
        />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          marginTop="5px"
        >
          <Typography variant="h3">{title}</Typography>
          <img src={verified} />
        </Stack>
        <Typography variant="career">{job}</Typography>
        <Box
          sx={{
            ...commonStyles,
          }}
        >
          <Typography variant="body3">{location}</Typography>
          <Box sx={{ ...borderImage, height: "14px", mx: "5px" }} />
          <Box
            sx={{
              ...commonStyles,
            }}
          >
            <img src={star} />
            <Typography variant="body3" sx={{ ml: "2px" }}>
              {rate}
            </Typography>
          </Box>
        </Box>
      </Stack>
      <FavoriteBorderIcon
        sx={{
          transform: "translate(-10px, -100px)",
          fontSize: "25px",
          position: "absolute",
          right: "20px",
          color: "#A4A9AB",
        }}
      />
    </Box>
  );
};

export default TrendingVendors;
