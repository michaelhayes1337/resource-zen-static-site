import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { AppBar } from '@mui/material';
import styles from './navbar.module.scss'
import rzLogo from '../../assets/images/RZLogo.png';
import Button from '@mui/material/Button';
const Navbar : React.FC = ()=>{
  return( 
    <>
    {/* <div className={styles.navbarWrapper}>
    <h1>Resource Zen</h1>
    <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/roadmap">Roadmap</Link></li>
      <li><Link href="/pricing">Pricing</Link></li>
      <li><Link href="/contact">Contact Us</Link></li>
    </ul>
    <div className="logSign">
    <Button variant="contained">up</Button>;
    <Button variant="contained">in</Button>;
    </div>
    <svg width="39" height="30" viewBox="0 0 39 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 30H39V25H0V30ZM0 17.5H39V12.5H0V17.5ZM0 0V5H39V0H0Z" fill="#162542"/>
    </svg>
    <div className={styles.logo}>
    <Image
        src={rzLogo}
        alt="leaf and gear logo"
        width={100}
        height={100}
      />
    </div>
  </div> */}
  <AppBar></AppBar>
    </>
  
  );
}

export default Navbar;
