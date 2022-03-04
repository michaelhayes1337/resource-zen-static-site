import React from 'react';
import Head from 'next/head';
import AboutArt from '../assets/art/aboutArt';
import {
  Container,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  Grid,
} from '@mui/material';
type Props = {};

const About = (props: Props) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('lg'));
  const contentBlock = (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <Typography variant="h2" textAlign="right" sx={{ marginBottom: '1vh' }}>
        What is <span style={{ color: '#49b295' }}>Resource</span>{' '}
        <span style={{ color: '#6295D2' }}>Zen</span>?
      </Typography>
      <Typography
        variant="subtitle1"
        textAlign="right"
        sx={{ fontWeight: '700', lineHeight: '2rem' }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi unde,
        nostrum consectetur adipisci fugiat, vitae quidem nam accusantium totam
        quae voluptatem! Iusto obcaecati repellendus cumque quo explicabo
        tenetur beatae reprehenderit.
      </Typography>
    </Box>
  );
  const artBlock = (
    <AboutArt
      sx={{
        fontSize: isMatch ? '25em' : '50em',
      }}
    />
  );
  return (
    <Container maxWidth="xl" sx={{ position: 'relative', overflow: 'visible' }}>
      <Head>
        <title key="title">About</title>
      </Head>
      <Grid container>
        {isMatch && (
          <>
            <Grid item xs={12} md={6}>
              {contentBlock}
            </Grid>
            <Grid item xs={12} md={6}>
              {artBlock}
            </Grid>
          </>
        )}
        {!isMatch && (
          <>
            <Grid item xs={12} md={6}>
              {artBlock}
            </Grid>
            <Grid item xs={12} md={6}>
              {contentBlock}
            </Grid>
          </>
        )}
      </Grid>
    </Container>
  );
};

export default About;

{
  /* <Container maxWidth="xl" sx={{ position: 'relative', overflow: 'visible' }}>
      <Head>
        <title key="title">About</title>
      </Head>
      <BlobBackground
        sx={
          isMatch
            ? {
                position: 'absolute',
                zIndex: '-20',
                width: '200%',
                left: '-50%',
                top: '10%',
              }
            : {
                position: 'absolute',
                zIndex: '-20',
                width: '200%',
                left: '-40%',
              }
        }
      ></BlobBackground>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'end',
          width: '100%',
          border: '1px solid green',
          flexDirection: 'column',
          position: 'relative',
          height: '80vh',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'column',
            border: '1px solid red',
            width: '45%',
            height: '80vh',
            flex: '2',
          }}
        >
          <Typography
            variant="h2"
            textAlign="right"
            sx={{ marginBottom: '1vh' }}
          >
            What is <span style={{ color: '#49b295' }}>Resource</span>{' '}
            <span style={{ color: '#6295D2' }}>Zen</span>?
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="center"
            sx={{ fontWeight: '700', lineHeight: '2rem' }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi unde,
            nostrum consectetur adipisci fugiat, vitae quidem nam accusantium
            totam quae voluptatem! Iusto obcaecati repellendus cumque quo
            explicabo tenetur beatae reprehenderit.
          </Typography>
        </Box>
        <AboutArt
          sx={{
            fontSize: isMatch ? '25em' : '50em',
            position: isMatch ? 'relative' : 'absolute',
            left: '0',
          }}
        />
      </Box>
    </Container> */
}
