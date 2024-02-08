import React from 'react';
import { Paper, Grid, Typography, Avatar } from '@mui/material';

function TestimonialCard({ name, text, image }) {
  return (
    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'row', alignItems: 'center', width: 'calc(100% - 32px)', mb: 3}}>
      <Grid container>
        <Grid item xs={9}>
          <Typography variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" component="p">
            {text}
          </Typography>
        </Grid>
        <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', pr: 1 }}>
          <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56 }} src={image} />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TestimonialCard;