import React from 'react';
import { useContext } from 'react';
import ctx from '../../utility/navbarContext';
import { Box, Grid, Typography, AppBar } from '@mui/material';
import LogoIcon from '../../assets/icons/logoIcon';
import Link from 'next/link';
import Button from '@mui/material/Button';

type ContactDetail = {
  id: string;
  content: string;
  type: string;
};

const contactDetailList: ContactDetail[] = [
  {
    id: '1',
    content: 'info@al.co.za',
    type: 'email',
  },
  {
    id: '2',
    content: '+27 21 949 4080',
    type: 'number',
  },
];

const Footer: React.FC = () => {
  const navbarCTX = useContext(ctx);
  const getContactDetailRef = (type: string) => {
    let href = '';
    switch (type) {
      case 'email':
        href = 'mailto:info@al.co.za';
        break;
      case 'number':
        href = 'tel:+27219494080';
        break;
    }
    return href;
  };
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
    <AppBar
      position="static"
      sx={{
        top: 'auto',
        bottom: 0,
        backgroundColor: '#E2EFFF',
        height: '35vh',
      }}
    >
      <Box
        sx={{
          height: 'auto',
        }}
      >
        <Grid container spacing={1} sx={{ marginTop: '5vh' }}>
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
            sx={{
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                width: '100%',
                marginBottom: '0%',
                marginTop: '0%',
                fontWeight: '700',
              }}
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
                            color: isNaviagted ? '#506C94' : 'black',
                            fontWeight: isNaviagted ? '700' : '400',
                            textTransform: 'none',
                            fontSize: '22px',
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
            sx={{
              display: 'grid',
              placeContent: 'flex-start',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                width: '100%',
                marginBottom: '0%',
                marginTop: '0%',
                fontWeight: '700',
              }}
            >
              Get In Touch
            </Typography>
            <Grid container spacing={1}>
              {contactDetailList.map((contactInfo, index) => {
                return (
                  <Grid item xs={12} key={contactInfo.id}>
                    <a
                      href={getContactDetailRef(contactInfo.type)}
                      target="_blank"
                      rel="noreferrer"
                      key={index}
                    >
                      <Button
                        variant="text"
                        sx={{
                          color: 'black',
                          fontWeight: '400',
                          textTransform: 'none',
                          fontSize: '22px',
                        }}
                      >
                        {contactInfo.content}
                      </Button>
                    </a>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </AppBar>
  );
};

export default Footer;
