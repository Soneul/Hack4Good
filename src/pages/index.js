import * as React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Grid,
} from "@mui/material";
import { Instagram } from "@mui/icons-material";

export default function HomePage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Top navigation bar */}
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hack4Good
          </Typography>
          <Button color="inherit">Homepage</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
          <Button color="inherit">Opportunities</Button>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {/* Main content */}
          <Grid item xs={12} md={8}>
            <Box sx={{ textAlign: "center", my: 4 }}>
              <Typography variant="h3" gutterBottom>
                Hack 4 Goodaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </Typography>
              <Typography variant="subtitle1" paragraph>
                Descriptionaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </Typography>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Learn More
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Contact
                  </Button>
                </Grid>
              </Grid>

              {/* Social media icons */}
              <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                <Instagram sx={{ margin: 1 }} />
              </Box>
            </Box>
          </Grid>

          {/* Placeholder for the image */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                width: "100%",
                height: 300,
                backgroundColor: "secondary.main",
                mt: 4,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                typography: "h5",
              }}
            >
              Placeholder for Image/Illustration
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
