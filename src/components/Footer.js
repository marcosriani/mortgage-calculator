import React from 'react';

import classes from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <a href="#"> Terms & conditions </a>
      <a href="#">Privacy notice </a>
      <a href="#">Accessibility </a>
      <a href="#">Sitemap </a>
      <a href="#">Cookies </a>
      <a href="#">Cookie preferences</a>
    </div>
  );
};

export default Footer;
