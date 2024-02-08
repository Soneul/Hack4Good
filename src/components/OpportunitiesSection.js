import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import styles from './OpportunitiesSection.module.css';
// ...other imports

export default function OpportunitiesSection() {
  // Define your opportunities here, or fetch them from an API
  const opportunities = [
    { title: 'Opportunities', description: 'OPPORTUNITIES description' },
    // ...other opportunities
  ];

  return (
    <Grid container spacing={4} className={styles.opportunitiesGrid}>
      {opportunities.map((opportunity, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <Paper className={styles.opportunity}>
            <Typography variant="h5">{opportunity.title}</Typography>
            <Typography>{opportunity.description}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
