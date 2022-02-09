import React from 'react';
import Navbar from '../navbar';
import Footer from '../footer';
const Layout: React.FC =({children})=> {
  return (
      <>
        <Navbar/>
            <main>
                {children}
            </main>
        <Footer/>
      </>
  );
}

export default Layout;
