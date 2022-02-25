import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
  Divider,
} from '@mui/material';
import { useContext } from 'react';
import ctx from '../../utility/navbarContext';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
type Props = {
  children?: React.ReactNode;
};

const DrawerComponent = (props: Props) => {
  const [open, setOpen] = useState(false);
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
      case 'Sign In':
        route = '/signin';
        break;
      case 'Sign Up':
        route = '/signup';
        break;
    }
    return route;
  };
  return (
    <>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        onClick={() => setOpen(false)}
        anchor="right"
      >
        <List sx={{ width: '200px' }}>
          {['Home', 'About', 'Roadmap', 'Pricing', 'Contact Us'].map(
            (name, index) => {
              const isNavigated = index === navbarCTX?.selected;
              return (
                <Link href={mapNameToRoute(name)} key={name}>
                  <ListItemButton>
                    <ListItemText
                      primary={name}
                      sx={{
                        textAlign: 'right',
                        color: isNavigated ? '#506C94' : 'black',
                      }}
                    />
                  </ListItemButton>
                </Link>
              );
            }
          )}
        </List>
        <Divider />
        <List sx={{ width: '200px' }}>
          {['Sign Up', 'Sign In'].map((name, index) => {
            const isNavigated = index === navbarCTX!.selected! - 5;
            return (
              <Link href={mapNameToRoute(name)} key={name}>
                <ListItemButton>
                  <ListItemText
                    primary={name}
                    sx={{
                      textAlign: 'right',
                      color: isNavigated ? '#506C94' : 'black',
                    }}
                  />
                </ListItemButton>
              </Link>
            );
          })}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpen(true)} sx={{ marginLeft: 'auto' }}>
        <MenuIcon sx={{ marginLeft: 'auto' }}></MenuIcon>
      </IconButton>
    </>
  );
};

export default DrawerComponent;
