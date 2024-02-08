import React, { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import { Typography, TextField, Button, Box, Container, Grid, Paper } from "@mui/material";

export default function Volunteer() {
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would usually collect the data and do something with it
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}> {/* This Box is now a flex container */}
      {/* AppBar with navigation links */}
      <NavigationBar value={value} handleChange={handleChange} />

      {/* Main image section */}
      <Container 
        maxWidth="lg" 
        component="main" 
        sx={{ 
          pt: 8, 
          pb: 6,
          backgroundImage: `linear-gradient(rgba(23, 44, 130, 0.3), rgba(23, 44, 130, 0.3)), url('hands-together.png')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '240px', 
        }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="white"
          gutterBottom
        >
          Volunteer With Us
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="white"
          component="p"
        >
          Join us in making a difference in the lives of others.
        </Typography>
      </Container>

      <Container maxWidth="lg" component="main" sx={{ flexGrow: 1, pt: 8, pb: 6, backgroundColor: '#172c60' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="h6" gutterBottom>
                Volunteer Form
              </Typography>
              <Typography variant="body1" gutterBottom>
                Fill out the form below to volunteer with us.
              </Typography>
              <form onSubmit={handleSubmit}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  margin="auto"
                  padding={2}
                >
                  <TextField
                    label="Name"
                    name="name"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                  />
                  <TextField
                    label="Email"
                    name="email"
                    type="email"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                  />
                  <TextField
                    label="Contact Number"
                    name="contactNumber"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                  />
                  <TextField
                    label="Address"
                    name="address"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                  />
                  <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                    Submit
                  </Button>
                </Box>
              </form>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}
            >
              <Typography variant="h6" gutterBottom>
                Frequently Asked Questions
              </Typography>
              <Typography variant="body1" gutterBottom>
                Click on the tabs below to find answers to common questions.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
