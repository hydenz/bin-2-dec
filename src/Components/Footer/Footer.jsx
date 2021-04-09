import React from 'react';
import { RiHeartFill, RiGithubFill } from 'react-icons/ri';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <a
      className={styles.ghlink}
      target='_blank'
      rel='noreferrer'
      href='https://github.com/hydenz'
    >
      Made with <RiHeartFill className={styles.icon} /> by
      <RiGithubFill className={styles.icon} />
      hydenz
    </a>
  </footer>
);

export default Footer;
