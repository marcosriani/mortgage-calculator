import React, { useRef, useState } from 'react';
import MortgageCalculateFormula from '../MortgageCalculatFormula/MortgageCalculatFormula';
import classes from './Calculator.module.css';

const Calculator = () => {
  const [inactiveButton, setInactiveButton] = useState(true);
  const [calculateSubmitted, setCalculateSubmitted] = useState(false);

  const propertyPriceInp = useRef(null);
  const depositInp = useRef(null);
  const lengthTermYearInp = useRef(null);
  const interestRateYearInp = useRef(null);

  // Reset the form
  const formRef = useRef(null);

  const formHandler = (e) => {
    e.preventDefault();

    if (
      propertyPriceInp.current.value > 0 ||
      depositInp.current.value > 0 ||
      lengthTermYearInp.current.value > 0 ||
      interestRateYearInp.current.value > 0
    ) {
      setInactiveButton(false);
      setCalculateSubmitted(true);
    }

    if (calculateSubmitted) {
      // Reset the form
      formRef.current.reset();
      setCalculateSubmitted(false);
      setInactiveButton(true);
    }
  };

  const formChangeHandler = () => {
    if (
      propertyPriceInp.current.value > 0 &&
      depositInp.current.value > 0 &&
      lengthTermYearInp.current.value > 0 &&
      interestRateYearInp.current.value > 0
    ) {
      setInactiveButton(false);
    }
    if (
      propertyPriceInp.current.value <= 0 ||
      depositInp.current.value <= 0 ||
      lengthTermYearInp.current.value <= 0 ||
      interestRateYearInp.current.value <= 0
    ) {
      setInactiveButton(true);
    }
  };

  return (
    <div className={classes.calculator}>
      <form
        className={classes.calculator__form}
        onChange={formChangeHandler}
        ref={formRef}
      >
        <label htmlFor="price-of-property">Price of the property is </label>
        <input
          id="price-of-property"
          placeholder="0.00"
          aria-label="label_initial_price"
          autoFocus="autofocus"
          ref={propertyPriceInp}
        />
        <label htmlFor="deposit">Deposit available is </label>
        <input
          id="deposit"
          placeholder="0.00"
          aria-label="deposit"
          ref={depositInp}
        />
        <label htmlFor="length-of-term">Length of term is </label>
        <input
          id="length-of-term"
          placeholder="Years"
          aria-label="length-of-term"
          ref={lengthTermYearInp}
        />
        <label htmlFor="interest-rate">Interest rate is </label>
        <input
          id="interest-rate"
          placeholder="%"
          aria-label="interest-rate"
          ref={interestRateYearInp}
        />
        <button
          className={`${classes.calculator__button} ${
            !inactiveButton && classes['calculator__button--active']
          } `}
          onClick={formHandler}
          disabled={inactiveButton}
        >
          {!calculateSubmitted ? 'Calculate' : 'Clear All'}
        </button>
      </form>

      {!calculateSubmitted ? (
        <div className={classes.calculator__additional}>
          <h3>Three steps to lower your monthly payments:</h3>
          <p>
            Choose the right type of mortgage and consider getting an adviser.
          </p>
          <p>Increase your deposit</p>
          <p>Do you qualify for an affordable housing scheme?</p>
        </div>
      ) : (
        <MortgageCalculateFormula
          calculateSubmitted={calculateSubmitted}
          propertyPrice={propertyPriceInp.current.value}
          deposit={depositInp.current.value}
          lengthTerm={lengthTermYearInp.current.value}
          interestRateYear={interestRateYearInp.current.value}
        />
      )}
    </div>
  );
};

export default Calculator;
