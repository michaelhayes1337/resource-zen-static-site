import DrawerComponent from '../drawer';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const pages = ['Home', 'About', 'Roadmap', 'Pricing', 'Contact Us'];

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import { useMediaQuery, useTheme } from '@mui/material';

const Navbar: React.FC = () => {
  const theme = useTheme();
  const router = useRouter();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(newValue);
    switch (newValue) {
      case 0:
        router.push('/');
        break;
      case 1:
        router.push('/about');
        break;
      case 2:
        router.push('/roadmap');
        break;
      case 3:
        router.push('/pricing');
        break;
      case 4:
        router.push('/contact');
        break;
    }
    setValue(newValue);
  };

  return (
    <AppBar position="static" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            border: 'none',
          }}
        >
          <Box
            sx={{
              border: 'none',
              width: '25%',
            }}
          >
            <Typography variant="h3">Resource Zen</Typography>
          </Box>
          {!isMatch && (
            <>
              <Box
                sx={{
                  width: '100%',
                  border: 'none',
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  textColor="secondary"
                  indicatorColor="secondary"
                  centered
                  TabIndicatorProps={{
                    style: { visibility: 'hidden' },
                  }}
                  sx={{ '.Mui-selected': {} }}
                >
                  {pages.map((page, index) => {
                    return (
                      <Tab
                        value={index}
                        label={page}
                        key={page}
                        sx={{ fontFamily: 'Poppins' }}
                      />
                    );
                  })}
                </Tabs>
              </Box>
              <Box
                sx={{
                  border: 'none',
                  width: '15%',
                }}
              >
                <Button variant="text" sx={{ color: 'black' }}>
                  Sign Up
                </Button>
                <Button variant="contained">Sign In</Button>
              </Box>
            </>
          )}
          {isMatch && <DrawerComponent></DrawerComponent>}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
