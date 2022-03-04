import React from 'react';
// Socials
import FacebookSocial from '../../../assets/icons/facebookSocial';
import LinkedInSocial from '../../../assets/icons/linkedinSocial';
import YoutubeSocial from '../../../assets/icons/youtubeSocial';
import InstagramSocial from '../../../assets/icons/instagramSocial';
import {
  Box,
  Typography,
  Button,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
type Props = {};

const HomePageCallToAction = (props: Props) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  return (
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
        <span style={{ color: '#6295D2' }}>Zen</span> make life easier for you.
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
  );
};

export default HomePageCallToAction;
