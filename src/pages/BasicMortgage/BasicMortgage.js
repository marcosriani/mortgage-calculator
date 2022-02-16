import React from 'react';

import classes from './BasicMortgage.module.css';
import Calculator from '../../components/Calculator/Calculator';

const Home = () => {
  return (
    <div className={classes.mortgage}>
      <header>
        <h1>Mortgage Calculator</h1>
      </header>
      <section>
        <h2>Calculate your monthly mortgage payment</h2>
        <p>
          This is a guide to how much you'd pay each month. The exact amount
          will depend on the type of mortgage and the lender.
        </p>
        <p>
          If you already have a mortgage, <a href="#">read more</a>
        </p>
      </section>
      <section>
        <h2>Plan ahead and estimate your monthly payment now.</h2>
        <p>Calculate your monthly mortgage payment</p>
        <p>
          This is a guide to how much you'd pay each month. You can adjust the
          length term to the number of years you have left to pay, and increase
          the interest rate. The exact amount will depend on the type of
          mortgage and the lender.
        </p>
        <Calculator />
      </section>
    </div>
  );
};

export default Home;
