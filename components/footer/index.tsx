import React from 'react';
import { useContext } from 'react';
import ctx from '../../utility/navbarContext';
import { Box, Grid, Typography } from '@mui/material';
import LogoIcon from '../../assets/icons/logoIcon';
import Link from 'next/link';
import Button from '@mui/material/Button';

const Footer: React.FC = () => {
  const navbarCTX = useContext(ctx);
  const mapNameToRoute = (name: string) => {
    let route = '/';
    switch (name) {
      case 'Home':
        route = '/';
        break;
      case 'About':
        route = '/about';
        break;
      case 'Roadmap':
        route = '/roadmap';
        break;
      case 'Pricing':
        route = '/pricing';
        break;
      case 'Contact Us':
        route = '/contact';
        break;
    }
    return route;
  };
  return (
    <Box
      sx={{
        height: 'auto',
        backgroundColor: '#E2EFFF',
      }}
    >
      <Grid container spacing={1}>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: 'grid', placeItems: 'center', height: '100%' }}
        >
          <LogoIcon></LogoIcon>
          <Typography variant="subtitle1" sx={{ color: 'rgba(0,0,0,0.5)' }}>
            CopyWrite Text Here
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: 'grid', placeItems: 'center' }}
        >
          <Typography
            variant="h3"
            sx={{ width: '100%', marginBottom: '3%', marginTop: '6%' }}
          >
            Links
          </Typography>
          <Grid container spacing={1}>
            {['Home', 'About', 'Roadmap', 'Pricing', 'Contact Us'].map(
              (page, index) => {
                const isNaviagted = index === navbarCTX?.selected;
                return (
                  <Grid item xs={6} key={page}>
                    <Link href={mapNameToRoute(page)}>
                      <Button
                        variant="text"
                        sx={{
                          fontFamily: 'Poppins',
                          color: isNaviagted ? '#49B295' : 'black',
                          fontWeight: isNaviagted ? '700' : '400',
                          textTransform: 'none',
                        }}
                      >
                        {page}
                      </Button>
                    </Link>
                  </Grid>
                );
              }
            )}
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: 'grid', placeItems: 'center' }}
        >
          <Typography
            variant="h3"
            sx={{ width: '100%', marginBottom: '0%', marginTop: '1%' }}
          >
            Get In Touch
          </Typography>
          <Grid container spacing={1}>
            {['022 405 5543', 'resourezen@gmail.com'].map((page, index) => {
              return (
                <Grid item xs={12} key={page}>
                  <Link href="/contact">
                    <Button
                      variant="text"
                      sx={{
                        fontFamily: 'Poppins',
                        color: 'black',
                        fontWeight: '400',
                        textTransform: 'none',
                      }}
                    >
                      {page}
                    </Button>
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
