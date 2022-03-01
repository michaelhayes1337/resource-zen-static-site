import React from 'react';
import Navbar from '../navbar';
import Footer from '../footer';
import { NavbarContextProvider } from 'utility/navbarContext';
const Layout: React.FC = ({ children }) => {
  return (
    <NavbarContextProvider>
      <div className="wrapper" style={{ overflow: 'hidden' }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </NavbarContextProvider>
  );
};

export default Layout;
