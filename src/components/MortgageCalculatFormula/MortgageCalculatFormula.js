import React from 'react';

const MortgageCalculateFormula = (props) => {
  let propertyPrice = props.propertyPrice;
  let deposit = props.deposit;
  let lengthTerm = props.lengthTerm;
  let interestRateYear = props.interestRateYear / 100;

  let loanPrincipal = propertyPrice - deposit;
  let mortgageTermInMonth = lengthTerm * 12;
  let interestTermInMonth = interestRateYear / 12;

  const calculate = (
    loanPrincipal,
    mortgageTermInMonth,
    interestTermInMonth
  ) => {
    return (
      (loanPrincipal *
        interestTermInMonth *
        Math.pow(1 + interestTermInMonth, mortgageTermInMonth)) /
      (Math.pow(1 + interestTermInMonth, mortgageTermInMonth) - 1)
    );
  };

  return (
    <div>
      <h3>Repayment</h3>
      <p>
        {`Monthly Payment: £
        ${parseFloat(
          calculate(loanPrincipal, mortgageTermInMonth, interestTermInMonth)
        ).toFixed(4)}
        a month`}
      </p>
    </div>
  );
};

export default MortgageCalculateFormula;
