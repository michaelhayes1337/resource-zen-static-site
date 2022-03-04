import React from 'react';
import Navbar from '../navbar';
import Footer from '../footer';
import BlobBackground from '../../assets/backgrounds/blobBackground';
import { NavbarContextProvider } from 'utility/navbarContext';
import { Box, useTheme, useMediaQuery } from '@mui/material';
const Layout: React.FC = ({ children }) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <NavbarContextProvider>
      <Box
        style={{
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <BlobBackground
          sx={
            isMatch
              ? {
                  position: 'absolute',
                  zIndex: '-20',
                  width: '200%',
                  left: '-50%',
                  top: '0%',
                }
              : {
                  position: 'absolute',
                  zIndex: '-20',
                  width: '200%',
                  left: '-45%',
                  top: '9%',
                }
          }
        ></BlobBackground>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </Box>
    </NavbarContextProvider>
  );
};

export default Layout;
