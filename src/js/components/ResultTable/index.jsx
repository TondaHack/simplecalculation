import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Map } from 'immutable';
import './style.css';
import { roundToDecimal } from '../../helpers/format';

const ResultTable = (props) => {
  const { dataSet } = props;

  return (
    <div className="result-table">
      <div className="row">
        <div className="cell">Total Principal</div>
        <div className="cell cell-right">{dataSet.get('totalPrincipal')}</div>
      </div>
      <div className="row">
        <div className="cell">Term</div>
        <div className="cell cell-right">{dataSet.get('term')}</div>
      </div>
      <div className="row">
        <div className="cell">Total Cost of Credit</div>
        <div className="cell cell-right">{dataSet.get('totalCostOfCredit')}</div>
      </div>
      <div className="row">
        <div className="cell">Total Repayable Amount</div>
        <div className="cell cell-right">{roundToDecimal(dataSet.get('totalRepayableAmount'))}</div>
      </div>
      <div className="row">
        <div className="cell">Monthly Payment</div>
        <div className="cell cell-right">{roundToDecimal(dataSet.get('monthlyPayment'))}</div>
      </div>
    </div>
  );
};

ResultTable.propTypes = {
  dataSet: ImmutablePropTypes.map,
};

ResultTable.defaultProps = {
  dataSet: new Map({}),
};

export default ResultTable;

