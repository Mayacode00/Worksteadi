import {
  AppBar,
  Box,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { Children } from "react";
import Logo from "../assets/workstedi.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import Main from "../assets/main_profile.jpg";

const LinkButton = ({ children, ...props }) => (
  <Stack
    direction="row"
    alignItems="center"
    sx={{
      color: "black",
      cursor: "pointer",
      "&:hover": {
        bgcolor: "primary.main",
        color: "white",
        textAlign: "center",
        py: "13px",
        px: "15px",
        transition: "0.6s ease",
        borderRadius: "24px",
      },
    }}
    {...props}
  >
    {children}
  </Stack>
);

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <AppBar
      elevation={0}
      sx={{
        bgcolor: "white",
        color: "black",
        py: "1.5rem",
        px: "2rem",
      }}
    >
      <Box>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          alignContent="center"
        >
          <img src={Logo} style={{ height: "100%", objectFit: "contain" }} />
          {!isMobile && (
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              alignContent="center"
              spacing={4}
              sx={{ flex: "1" }}
            >
              <LinkButton direction="row" alignItems="center">
                <Typography variant="body1">Home</Typography>
                <KeyboardArrowDownIcon fontSize="small" color="#3E4447" />
              </LinkButton>
              <LinkButton style={{}}>
                <Typography variant="body1">Transactions</Typography>
                <KeyboardArrowDownIcon fontSize="small" color="#3E4447" />
              </LinkButton>
              <LinkButton style={{}}>
                <Typography variant="body1">Discover</Typography>
                <KeyboardArrowDownIcon fontSize="small" color="#3E4447" />
              </LinkButton>
            </Stack>
          )}

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            alignContent="center"
            spacing={2}
          >
            <NotificationsNoneIcon />
            <Box>
              <img
                style={{
                  height: "40px",
                  objectFit: "cover",
                  borderRadius: "40px",
                  width: "40px",
                }}
                src={Main}
              />
            </Box>
            <KeyboardArrowDownIcon
              sx={{ display: { xs: "none", sm: "flex" } }}
            />
            {isMobile ? (
              <IconButton>
                <DragHandleIcon sx={{ color: "black" }} />
              </IconButton>
            ) : (
              <></>
            )}
          </Stack>
        </Stack>
      </Box>
    </AppBar>
  );
};

export default Navbar;
