import React from 'react';
import Navbar from '../navbar';
import Footer from '../footer';
import { NavbarContextProvider } from 'utility/navbarContext';
const Layout: React.FC = ({ children }) => {
  return (
    <NavbarContextProvider>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </NavbarContextProvider>
  );
};

export default Layout;
