import React, { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import { Typography, TextField, Button, Box, Container, Grid, Paper, Avatar } from "@mui/material";
import TestimonialCard from "../components/TestimonialCard";

export default function Testimonial() {
  const [value, setValue] = useState(3);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}> 
      <NavigationBar value={value} handleChange={handleChange} />
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
            Testimonials
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="white"
          component="p"
        >
            See what others have to say about their experience with Big At Heart.
        </Typography>
      </Container>
        <Container maxWidth="lg" component="main" sx={{ flexGrow: 1, pt: 8, pb: 6, backgroundColor: '#172c60' }}>
            <Grid container spacing={2}>
                <Grid item xs={12}> 
                    <TestimonialCard 
                        name="John Doe" 
                        text="I had a great experience volunteering with Big At Heart. I was able to make a difference in the lives of others and I felt like I was part of a community." 
                        image="/path/to/image.jpg"
                    />
                    <TestimonialCard 
                        name="John Doe" 
                        text="I had a great experience volunteering with Big At Heart. I was able to make a difference in the lives of others and I felt like I was part of a community." 
                        image="/path/to/image.jpg"
                    />
                    <TestimonialCard 
                        name="John Doe" 
                        text="I had a great experience volunteering with Big At Heart. I was able to make a difference in the lives of others and I felt like I was part of a community." 
                        image="/path/to/image.jpg"
                    />
                    <TestimonialCard 
                        name="John Doe" 
                        text="I had a great experience volunteering with Big At Heart. I was able to make a difference in the lives of others and I felt like I was part of a community." 
                        image="/path/to/image.jpg"
                    />
                    <TestimonialCard 
                        name="John Doe" 
                        text="I had a great experience volunteering with Big At Heart. I was able to make a difference in the lives of others and I felt like I was part of a community." 
                        image="/path/to/image.jpg"
                    />
                    <TestimonialCard 
                        name="John Doe" 
                        text="I had a great experience volunteering with Big At Heart. I was able to make a difference in the lives of others and I felt like I was part of a community." 
                        image="/path/to/image.jpg"
                    />
                    <TestimonialCard 
                        name="John Doe" 
                        text="I had a great experience volunteering with Big At Heart. I was able to make a difference in the lives of others and I felt like I was part of a community." 
                        image="/path/to/image.jpg"
                    />
                </Grid>
            </Grid>
        </Container>
    </Box>
  );
}
