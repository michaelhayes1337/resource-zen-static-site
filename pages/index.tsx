import React from 'react';
import Head from 'next/head';
// Socials
import FacebookSocial from 'assets/icons/facebookSocial';
import LinkedInSocial from 'assets/icons/linkedinSocial';
import YoutubeSocial from 'assets/icons/youtubeSocial';
import InstagramSocial from 'assets/icons/instagramSocial';

// Cards
import JobcardIcon from 'assets/icons/jobcardIcon';
import InvoiceIcon from 'assets/icons/invoiceIcon';
import StockIcon from 'assets/icons/stockIcon';

// Background
import BlobBackground from '../assets/backgrounds/blobBackground';
import LandingArt from '../assets/art/landingArt';
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  IconButton,
} from '@mui/material';

import { useMediaQuery, useTheme } from '@mui/material';
type Props = {
  sx?: {};
};
type Service = {
  icon: (props: Props) => JSX.Element;
  title: string;
  extra?: string;
};
const services: Service[] = [
  {
    icon: JobcardIcon,
    title: 'JOBCARDS',
  },
  {
    icon: InvoiceIcon,
    title: 'INVOICE',
    extra: 'INTEGRATION',
  },
  {
    icon: StockIcon,
    title: 'JOBCARDS',
  },
];

const Home: React.FC = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'visible',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <BlobBackground
        sx={{
          position: 'absolute',
          zIndex: '-20',
          width: '200%',
          left: '-50%',
        }}
      ></BlobBackground>

      <Container
        maxWidth="xl"
        sx={{ position: 'relative', overflow: 'visible' }}
      >
        <Head>
          <title key="title">Resource Zen</title>
        </Head>

        <Box
          sx={{
            marginBottom: isMatch ? '1vh' : '40vh',
            marginTop: '5vh',
            width: isMatch ? '100%' : '48%',
            margin: isMatch ? '0 auto' : '',
            display: isMatch ? 'grid' : '',
            placeContent: 'center',
          }}
        >
          <Typography variant="h2">
            Let <span style={{ color: '#49b295' }}>Resource</span>{' '}
            <span style={{ color: '#6295D2' }}>Zen</span> make life easier for
            you.
          </Typography>
          <Typography variant="subtitle1">
            We help you customise your business resources such as, job cards,
            invoices, stock list, and much more.{' '}
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              paddingLeft: '5%',
              paddingRight: '5%',
              marginTop: '3%',
              marginBottom: '3%',
            }}
          >
            <Typography variant="h3">GET STARTED</Typography>
          </Button>
          <Box
            sx={
              isMatch
                ? {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }
                : {}
            }
          >
            <IconButton>
              <FacebookSocial />
            </IconButton>
            <IconButton>
              <LinkedInSocial />
            </IconButton>
            <IconButton>
              <YoutubeSocial />
            </IconButton>
            <IconButton>
              <InstagramSocial />
            </IconButton>
          </Box>
        </Box>
        <LandingArt
          sx={{
            position: isMatch ? 'relative' : 'absolute',
            zIndex: '-10',
            right: '0%',
            top: '0%',
            fontSize: isMatch ? '50rem' : '80em',
            maxWidth: '100%',
          }}
        ></LandingArt>
        <Box
          sx={{
            marginTop: isMatch ? '1vh' : '60vh',
            display: 'grid',
            placeItems: 'center',
            width: '100%',
            border: 'none',
          }}
        >
          <Typography
            variant="h2"
            textAlign="center"
            sx={{ fontFamily: 'Poppins', color: 'white' }}
          >
            OUR FEATURES
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="center"
            sx={{ fontFamily: 'Poppins', color: 'white', fontWeight: '400' }}
          >
            Velit officia consequat duis enim velit mollit. Exercitation veniam
            consequat sunt nostrud amet.
          </Typography>

          <Grid
            container
            spacing={1}
            sx={{
              marginTop: '5vh',
              border: 'none',
            }}
          >
            {services.map((service, index) => {
              const iconStyling = {
                fontSize: 200,
              };
              return (
                <Grid
                  item
                  md={4}
                  xs={12}
                  key={service.title}
                  sx={{
                    border: 'none',
                    display: 'grid',
                    placeItems: 'center',
                  }}
                >
                  <Paper
                    sx={{
                      display: 'grid',
                      placeItems: 'center',
                      minHeight: 'fit-content',
                      height: '45vh',
                      width: '90%',
                    }}
                  >
                    {index === 0 ? (
                      <JobcardIcon sx={iconStyling} />
                    ) : index === 1 ? (
                      <InvoiceIcon sx={iconStyling} />
                    ) : (
                      <StockIcon sx={iconStyling} />
                    )}
                    <Typography variant="h4" sx={{ fontFamily: 'Poppins' }}>
                      {service.title}
                    </Typography>
                    {service.extra && (
                      <Typography variant="h4" sx={{ fontFamily: 'Poppins' }}>
                        {service.extra}
                      </Typography>
                    )}
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;

{
  /* <div className="homePage">
        <Head>
          <title key="title">Resource Zen</title>
        </Head>
        <div className="callToAction">
            <h1>
                Let <span id='spanGreen'>Resource</span> <span id='spanBlue'>Zen</span> make life easier for you.
            </h1>
            <p>We help you customise your business resources such as, job cards, invoices, stock list, and much more.  </p>
            <button>Get Started</button>
            <div className="socials">
                <FacebookSocial/>
                <LinkedInSocial/>
                <YoutubeSocial/>
                <InstagramSocial/>
            </div>
        </div>
        <div className="features">
            <h1>OUR FEATURES</h1>
            <p>Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <div className="cardGrid">
                <div className="card">
                    <JobcardIcon/>
                </div>
                <div className="card">
                    <InvoiceIcon/>
                </div>
                <div className="card">
                    <StockIcon/>
                </div>
            </div>
        </div>
    </div> */
}
