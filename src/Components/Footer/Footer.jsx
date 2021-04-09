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
      Made with <RiHeartFill color='#fff' /> by <RiGithubFill color='#fff' />
      hydenz
    </a>
  </footer>
);

export default Footer;
