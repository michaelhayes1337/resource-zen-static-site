import React from 'react';
import Head from 'next/head';
import HomePageFeatureSection from '../components/homePageComponents/homePageFeatureSection';
import HomePageCallToAction from '../components/homePageComponents/homePageCallToAction';

import LandingArt from '../assets/art/landingArt';
import { Container, Box } from '@mui/material';

import { useMediaQuery, useTheme } from '@mui/material';

const Home: React.FC = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box
      sx={{
        overflow: 'visible',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Container
        maxWidth="xl"
        sx={{ position: 'relative', overflow: 'visible' }}
      >
        <Head>
          <title key="title">Resource Zen</title>
        </Head>
        <HomePageCallToAction />
        <LandingArt
          sx={{
            position: isMatch ? 'relative' : 'absolute',
            zIndex: '-10',
            right: '0%',
            top: '15%',
            fontSize: isMatch ? '80em' : '80em',
            maxWidth: '100%',
            height: isMatch ? '40vh' : 'auto',
          }}
        ></LandingArt>
        <HomePageFeatureSection />
      </Container>
    </Box>
  );
};

export default Home;
