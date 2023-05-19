import React from "react";
import { Box, Typography, Stack, Avatar } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Profile03 from "../assets/profile3.jpg";
import click01 from "../assets/click_image.jpg";
import click02 from "../assets/click_image02.jpg";
import click03 from "../assets/click_image03.jpg";

const commonStyles = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
};
const borderImage = {
  border: "1px solid #E5E7EB",
  borderRadius: "15px",
};
const profileImage = {
  width: "25px",
  height: "25px",
  borderRadius: "25px",
  cursor: "pointer",
  border: "4px solid #fff",
};
const pictures = [click01, click03, click02, Profile03];
const EachProfile = ({ image }) => {
  return (
    <Avatar
      src={image}
      sx={{
        width: "25px",
        height: "25px",
        border: "3px solid #fff",
        transition: "ease-in",
        marginLeft: "-17px",
        "&:hover": { marginLeft: "0px" },
      }}
    />
  );
};

const RecommendedVendors = ({
  image,
  name,
  verified,
  job,
  location,
  star,
  rate,
  description,
  patronage,
}) => {
  return (
    <Box
      sx={{
        ...borderImage,
        height: "180px",
        display: "flex",
        marginRight: { xs: "0", sm: "1.5rem" },
        marginBottom: { xs: "1.5rem", sm: "0" },
        bgcolor: "#ffffff",
      }}
    >
      <img
        src={image}
        style={{
          objectFit: "contain",
          borderTopLeftRadius: "15px",
          borderBottomLeftRadius: "15px",
        }}
      />
      <Stack sx={{ width: "240px", p: "15px" }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          alignContent="center"
        >
          <Stack direction="row" alignItems="center">
            <Typography variant="h3">{name}</Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                ml: "6px",
                justifyContent: "center",
              }}
            >
              <img src={verified} />
            </Box>
          </Stack>
          <FavoriteBorderIcon
            fontSize="10px"
            sx={{
              color: "#A4A9AB",
            }}
          />
        </Stack>
        <Typography variant="career">{job}</Typography>
        <Box
          sx={{
            ...commonStyles,
            my: "5px",
            width: "140px",
          }}
        >
          <Typography variant="body3">{location}</Typography>
          <Box sx={{ ...borderImage, height: "14px" }} />
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
        <Typography variant="body3" sx={{ my: "8px" }}>
          {description}
        </Typography>
        <Box sx={{ ...commonStyles, my: "4px", width: "135px" }}>
          <Typography variant="body3">{patronage}</Typography>
          <Stack direction="row" width="60px" position="relative">
            <Box sx={{ display: "flex", ml: "20px" }}>
              {pictures.map((picture, i) => (
                <EachProfile key={i} image={picture} />
              ))}
            </Box>
            <Typography
              variant="profile"
              sx={{
                bgcolor: "#f3f4f6",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                ...profileImage,
                cursor: "pointer",
                zIndex: "10",
                marginLeft: "-17px",
                "&:hover": { marginLeft: "0px" },
              }}
            >
              9+
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default RecommendedVendors;
