import React from "react";
import Image from 'next/image'
import styles from "./footer.module.scss";
import rzLogo from '../../assets/images/RZLogo.png';

const Footer: React.FC = ()=>{
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        
        <div className={styles.logo}>
          <Image
            src={rzLogo}
            alt="leaf and gear logo"
            width={120}
            height={120}
          />
        </div>
        <h2>Resource Zen</h2>
        <h3>Copywrite text here</h3>
      </div>
      <div className={styles.links}>
        <h2>Links</h2>
        <div className={styles.linksGrid}>
          <h3>Home</h3>
          <h3>Pricing</h3>
          <h3>About</h3>
          <h3>Contact Us</h3>
          <h3>Roadmap</h3>
        </div>
      </div>
      <div className={styles.getInTouch}>
        <h2>Get in Touch</h2>
        <h3>022 405 5543</h3>
        <h3>resourcezen@gmail.com</h3>
      </div>
    </div>
  );
}

export default Footer;
