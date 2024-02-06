import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "next/link";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function NavigationBar({ value, handleChange }) {
  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#172c60", padding: 1 }}
        elevation={0}
      >
        <Toolbar>
          <Image
            src="/big-at-heart-logo.png"
            alt="Big Heart Logo"
            width={70}
            height={70}
          />
          <Typography variant="h6" color="inherit" noWrap>
            Social Service For All
          </Typography>
          <Box
            sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}
          >
            <Link href="/about" passHref>
              <Button color="primary" variant="outlined">
                Log in
              </Button>
            </Link>
            <Button color="primary" variant="contained">
              Sign up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="navigation tabs"
        centered
        sx={{ backgroundColor: "#bf0109" }}
      >
        <Tab label="Home" component={Link} href="/" sx={{ color: "white" }} />
        <Tab
          label="Volunteer"
          component={Link}
          href="/volunteer"
          sx={{ color: "white" }}
        />
        <Tab
          label="Donate"
          component={Link}
          href="/donate"
          sx={{ color: "white" }}
        />
        <Tab
          label="Testimonial"
          component={Link}
          href="/testimonial"
          sx={{ color: "white" }}
        />
      </Tabs>
    </>
  );
}

export default NavigationBar;
