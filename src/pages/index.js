import React, { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import { Typography, Button, Box, Container, Grid, Paper } from "@mui/material";

export default function HomePage() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const opportunities = [
    {
      title: "OPPORTUNITIES",
      description: "OPPORTUNITIES description",
      imageUrl: "/opportunities.png"
    },
    {
      title: "VOLUNTEER",
      description: "We do many on-ground volunteering activities in Singapore. If you are keen to join, please click below and be a part of our volunteer group.",
      imageUrl: "volunteer-with-us.png"
    },
    {
      title: "ATTENDANCE",
      description: "ATTENDANCE description",
      imageUrl: "attendance.png"
    },
    {
      title: "PAST EVENTS",
      description: "PAST EVENTS description",
      imageUrl: "past-events.png"
    },
    // ...add more opportunities if needed
  ];

  return (
    <Box>
      {/* AppBar with navigation links */}
      <NavigationBar value={value} handleChange={handleChange} />
      <Box sx={{ 
        marginX: "auto", 
        position: 'absolute',
        top: { xs: '8vh', sm: '10vh', md: '12vh' }, // Example of responsive top positioning
        left: { xs: '0%', sm: '1.8%', md: '1.8%' }, // Responsive left positioning
        width: { xs: '95%', sm: '92%', md: '93%' }, // Responsive width
        height: '150%', // Responsive height
        backgroundColor: 'rgba(23, 44, 96, 1.0)',
        padding: '16px',
        textAlign: 'center',
        zIndex: -3
      }}> 
      </Box>
      <Box sx={{ 
        marginX: "auto", 
        position: 'absolute',
        top: { xs: '25vh', sm: '12vh', md: '15vh' }, // Example of responsive top positioning
        left: { xs: '0%', sm: '1.8%', md: '1.8%' }, // Responsive left positioning
        width: { xs: '95%', sm: '92%', md: '93%' }, // Responsive width
        height: '70%', // Responsive height
        backgroundColor: 'rgba(23, 44, 96, 0.4)',
        padding: '16px',
        textAlign: 'center',
        zIndex: -1
      }}> 
      </Box>
   
      {/* Image and overlay with the same width as the solid blue box but shorter in height */}
      <Box sx={{ 
        position: 'absolute', 
        top: { xs: '25vh', sm: '12vh', md: '15vh' },
        left: '49.8%',
        width: { xs: '95%', sm: '93%', md: '93%' }, // Same width settings as the solid blue box
        transform: 'translateX(-50%)',
        zIndex: -2,
      }}>
        <img
          src={"/hands-together.png"}
          alt={"Big At Heart"}
          style={{ 
            width: '103.5%', 
            height: 'auto', // Adjust based on the aspect ratio of your image
            maxHeight: '60vh', // Example to make it shorter, adjust as needed
            objectFit: 'cover', 
            position: 'absolute', 
            left: '50%', 
            top: '0',
            transform: 'translateX(-50%)',
          }}
        />
      </Box>
      {/* Main image section */}
      <Container maxWidth="lg" component="main" sx={{ pt: 8, pb: 6 , zIndex: 2}}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          sx={{
            color: '#ffffff', // Custom color, white in this case
          }}
          gutterBottom
        >
          Big At Heart
        </Typography>
        <Container maxWidth="md" sx={{ mx: 'auto' }}> {/* Narrower container for the description */}
          <Typography
            variant="p"
            align="center"
            color="textSecondary"
            sx={{
              color: '#ffffff', // Custom color, white in this case
            }}
            component="p"
          >
            VOLUNASIA is that moment when you forget you're volunteering to help change lives, because it's changing yours.
            Big At Heart is a Non-Profit Social Service Organization inspiring GIVING through Volunteering, Donations-in-kind, and Fundraising. We help match volunteers and donors to curated causes, specifically those working for Children, Women, and Low Income communities. We create custom giving projects or connect you to existing causes that you can get involved in.
            Join us and start your giving journey in a fun, easy and fulfilling way.
            Come find your volunasia with us!
          </Typography>
        </Container>
      </Container>
      
  
      {/* Opportunities / Volunteer with Us section */}
      <Container maxWidth="md" component="section" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {opportunities.map((opportunity, index) => (
            <Grid item key={index} xs={12} sm={6} md={6}>
              <Paper elevation={0} sx={{ padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' , background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 100%)'}}>
                {/* Image and white container */}
                <div style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '180px' }}>
                  {/* Image */}
                  <img
                    src={opportunity.imageUrl}
                    alt={opportunity.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', border: 'none' }} // Removed border
                  />
                  {/* Transparent dark overlay */}
                  <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(23, 44, 96, 0.4)', padding: '16px', textAlign: 'center' }}></Box>
                  {/* White container */}
                  <Box sx={{ position: 'absolute', top: 10, left: 10, width: '50%', height: '70%', backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '16px', textAlign: 'center' }}>
                    <Typography variant="h6" gutterBottom>
                      {opportunity.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '0.575rem', 
                        color: '#000000', 
                      }}
                    >
                      {opportunity.description}
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        mt: '11px',
                        backgroundColor: '#172c60', // Custom color code
                        '&:hover': {
                          backgroundColor: '#131f4c', // Darker version for the hover state
                        },
                      }}
                    >
                    Learn More
                  </Button>
                  </Box>
                </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* ... rest of your component */}
    </Box>
  );
}