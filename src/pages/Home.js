import React from 'react';
import { Link } from 'react-router-dom';

import classes from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={classes.home}>
      <header>
        <h1 className={classes.home__title}>Mortgage calculator</h1>
        <p className={classes.home__quote}>
          Mortgages are some of the biggest commitments you’ll make in your
          financial life. And with all the options, it can be hard to work out
          what they’ll cost you. Our mortgage calculator can help.
        </p>
        <p>
          It’ll give you a simple, ballpark figure to show you the monthly
          payments you’d pay on:
        </p>
      </header>
      <section className={classes.main}>
        <h2 className={classes.main__title}>Basic mortgage calculator</h2>
        <p>
          Shows the cost per month and the total cost over the life of the
          mortgage, including fees and interest.
        </p>
        <div className={classes.main__more}>
          <div>
            <h2>New Mortgages</h2>
            <p>
              Make your new home a reality; compare mortgage options across the
              UK
            </p>
          </div>
          <div>
            <h2>Interest only Mortgages</h2>
            <p>
              Your monthly payment pays only the interest charges on your loan
            </p>
          </div>
        </div>
        <h3>What is a mortgage calculator?</h3>
        <p>
          It’s a tool that gives you an estimate of how much you could borrow
          from us or what your monthly repayments and other costs might be, for
          a mortgage in the UK.
        </p>
        <h3>Who is a mortgage calculator for?</h3>
        <p>
          It’s for you if you’re a first time buyer, you’re looking to
          remortgage, move or buy an additional home, or you’re a buy-to-let
          landlord.
        </p>
        <p>
          You can also adjust the mortgage term, interest rate and deposit to
          get an idea of how those affect your monthly payments.
        </p>
        <p>
          To get started all you need is the price of your property, or the
          amount left on your mortgage.
        </p>
        <Link to="/basic-mortgage">
          <button className={classes.main__button}>
            Start mortgage calculator
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
