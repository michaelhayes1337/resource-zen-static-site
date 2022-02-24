import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
type Props = {
  children?: React.ReactNode;
};

const DrawerComponent = (props: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List>
          <Link href="/">
            <ListItemButton>
              <ListItemText primary="Home" />
            </ListItemButton>
          </Link>
          <Link href="/about">
            <ListItemButton>
              <ListItemText primary="About" />
            </ListItemButton>
          </Link>
          <Link href="/roadmap">
            <ListItemButton>
              <ListItemText primary="Roadmap" />
            </ListItemButton>
          </Link>
          <Link href="/pricing">
            <ListItemButton>
              <ListItemText primary="Pricing" />
            </ListItemButton>
          </Link>
          <Link href="/contact">
            <ListItemButton>
              <ListItemText primary="Contact Us" />
            </ListItemButton>
          </Link>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpen(true)}>
        <MenuIcon sx={{ marginLeft: 'auto' }}></MenuIcon>
      </IconButton>
    </>
  );
};

export default DrawerComponent;
