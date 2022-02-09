import React from 'react';
import Image from 'next/image'
import styles from './navbar.module.scss'
import rzLogo from '../../assets/images/RZLogo.png';

const Navbar : React.FC = ()=>{
  return( 
  <div className={styles.navbarWrapper}>
    <h1>Resource Zen</h1>
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
  </div>
  );
}

export default Navbar;
