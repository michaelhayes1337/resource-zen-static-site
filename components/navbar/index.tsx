import DrawerComponent from '../drawer';
import LogoIcon from '../../assets/icons/logoIcon';
import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
const pages = ['Home', 'About', 'Roadmap', 'Pricing', 'Contact Us'];
import { useContext } from 'react';
import ctx from '../../utility/navbarContext';
// import colorList from '../../styles/colorList';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import { useMediaQuery, useTheme } from '@mui/material';

const Navbar: React.FC = () => {
  const theme = useTheme();
  const router = useRouter();
  const isMatch = useMediaQuery(theme.breakpoints.down('lg'));
  // const [value, setValue] = React.useState(0);

  const navbarCTX = useContext(ctx);
  // console.log(colorList);

  // useEffect(() => {
  //   switch (router.asPath) {
  //     case '/':
  //       setValue(0);
  //       break;
  //     case '/about':
  //       setValue(1);
  //       break;
  //     case '/roadmap':
  //       setValue(2);
  //       break;
  //     case '/pricing':
  //       setValue(3);
  //       break;
  //     case '/contact':
  //       setValue(4);
  //       break;
  //     default:
  //       // not a page on the navigation bar
  //       setValue(-1);
  //       break;
  //   }
  // }, [router.asPath]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
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
    // setValue(newValue);
    // navbarCTX?.setSelected(newValue);
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
              width: '15%',
            }}
          >
            <LogoIcon></LogoIcon>
          </Box>
          {!isMatch && (
            <>
              <Box
                sx={{
                  width: 'auto',
                  border: 'none',
                  marginTop: '1%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <Tabs
                  value={navbarCTX?.selected}
                  onChange={handleChange}
                  textColor="secondary"
                  indicatorColor="secondary"
                  centered
                  TabIndicatorProps={{
                    style: { visibility: 'hidden' },
                  }}
                  sx={{
                    '.Mui-selected': { color: '#506C94' },
                  }}
                >
                  {pages.map((page, index) => {
                    return (
                      <Tab
                        value={index}
                        label={page}
                        key={page}
                        sx={{
                          fontFamily: 'Poppins',
                          color: 'black',
                          fontWeight: '700',
                          textTransform: 'none',
                        }}
                      />
                    );
                  })}
                </Tabs>
              </Box>
              <Box
                sx={{
                  border: 'none',
                  width: '15%',
                  marginTop: '1%',
                }}
              >
                <Button
                  variant="text"
                  onClick={() => {
                    router.push('/signup');
                  }}
                  sx={{
                    fontFamily: 'Poppins',
                    color: 'black',
                    fontWeight: '400',
                    textTransform: 'none',
                  }}
                >
                  Sign Up
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{
                    fontFamily: 'Poppins',
                    fontWeight: '400',
                    textTransform: 'none',
                  }}
                  onClick={() => {
                    router.push('/signup');
                  }}
                >
                  Sign In
                </Button>
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
