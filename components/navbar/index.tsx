import Link from 'next/link';
import Image from 'next/image';
import styles from './navbar.module.scss';
import rzLogo from '../../assets/images/RZLogo.png';

/*
    MUI
*/
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const pages = ['Home', 'About', 'Roadmap', 'Pricing', 'Contact Us'];

/*
    Tabs
*/
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Button from '@mui/material/Button';

const Navbar: React.FC = () => {
  /*
  Tabs tings
*/
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            border: '1px solid green',
          }}
        >
          <Box
            sx={{
              border: '1px solid green',
              width: '25%',
            }}
          >
            <Typography>Resource Zen</Typography>
          </Box>
          <Box
            sx={{
              width: '100%',
              border: '1px solid green',
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              centered
            >
              {pages.map((page) => {
                return <Tab value={page} label={page} key={page} />;
              })}
            </Tabs>
          </Box>
          <Box
            sx={{
              border: '1px solid green',
              width: '15%',
            }}
          >
            <Button variant="text" sx={{ color: 'white' }}>
              Sign Up
            </Button>
            <Button variant="contained">Sign In</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
