import React from 'react';
import { Link } from 'react-router-dom';

import classes from '../styles/Nav.module.css';

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div>
        <Link to="/">
          <img src={require('../assets/logo.png')} alt="logo" />
        </Link>
      </div>
      <ul className={classes.nav__links}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Money Saving</Link>
        </li>
        <li>
          <Link to="/">Travel</Link>
        </li>
        <li>
          <Link to="/">Family and Care</Link>
        </li>
        <li>
          <Link to="/">Basic Mortgage</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
