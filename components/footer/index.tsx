import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import LogoIcon from '../../assets/icons/logoIcon';
const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        border: '1px solid red',
        height: '30vh',
        backgroundColor: '#E2EFFF',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <LogoIcon></LogoIcon>
          <Typography variant="h6">CopyWrite Text Here</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Links</Typography>
          <Grid container spacing={2}>
            {['Home', 'About', 'Roadmap', 'Pricing', 'Contact Us'].map(
              (page) => {
                return (
                  <Grid item xs={6} key={page}>
                    <Typography>page</Typography>
                  </Grid>
                );
              }
            )}
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <Typography>Get in Touch</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;

{
  /* <div className={styles.wrapper}>
      <div className={styles.header}>
        
        <div className={styles.logo}>
          <Image
            src={rzLogo}
            alt="leaf and gear logo"
            width={120}
            height={120}
          />
        </div>
        <h2>Resource Zen</h2>
        <h3>Copywrite text here</h3>
      </div>
      <div className={styles.links}>
        <h2>Links</h2>
        <div className={styles.linksGrid}>
          <h3>Home</h3>
          <h3>Pricing</h3>
          <h3>About</h3>
          <h3>Contact Us</h3>
          <h3>Roadmap</h3>
        </div>
      </div>
      <div className={styles.getInTouch}>
        <h2>Get in Touch</h2>
        <h3>022 405 5543</h3>
        <h3>resourcezen@gmail.com</h3>
      </div>
    </div> */
}
