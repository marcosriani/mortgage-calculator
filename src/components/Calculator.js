import React from 'react';

import classes from '../styles/Calculator.module.css';

const Calculator = () => {
  return (
    <div className={classes.calculator}>
      <form className={classes.calculator__form}>
        <label htmlFor="price-of-property">Price of the property is </label>
        <input
          id="price-of-property"
          placeholder="0.00"
          aria-label="label_initial_price"
          autoFocus="autofocus"
        />
        <label htmlFor="deposit">Deposit available is </label>
        <input id="deposit" placeholder="0.00" aria-label="deposit" />
        <label htmlFor="length-of-term">Length of term is </label>
        <input
          id="length-of-term"
          placeholder="Years"
          aria-label="length-of-term"
        />
        <label htmlFor="interest-rate">Interest rate is </label>
        <input id="interest-rate" placeholder="%" aria-label="interest-rate" />
        <button>Calculate</button>
      </form>
      <div className={classes.calculator__additional}>
        <h3>Three steps to lower your monthly payments:</h3>
        <p>
          Choose the right type of mortgage and consider getting an adviser.
        </p>
        <p>Increase your deposit</p>
        <p>Do you qualify for an affordable housing scheme?</p>
      </div>
    </div>
  );
};

export default Calculator;
