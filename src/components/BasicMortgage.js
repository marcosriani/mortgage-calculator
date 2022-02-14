import React from 'react';

import classes from './BasicMortgage.module.css';

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
        <form>
          <label htmlFor="price-of-property">Price of the property is </label>
          <input
            id="price-of-property"
            placeholder="0.00"
            aria-label="label_initial_price"
            autoFocus="autofocus"
          />
        </form>
      </section>
    </div>
  );
};

export default Home;
