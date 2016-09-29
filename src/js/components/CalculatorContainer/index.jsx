import { connect } from 'react-redux';
import React from 'react';
import { Grid } from 'react-mdl';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { calculate, setAmount, setTerm } from '../../actions/calculator';
import RangeInput from '../RangeInput/index';
import ResultTable from './../ResultTable/index';
import { numberify } from '../../helpers/format';

class ListContainer extends React.Component {
  handleAmount = (e) => {
    const amount = numberify(e.target.value);
    const { setAmountValue, term } = this.props;

    setAmountValue(amount);
    this.calculate(amount, term);
  };

  handleTerm = (e) => {
    const term = numberify(e.target.value);
    const { setTermValue, amount } = this.props;

    setTermValue(term);
    this.calculate(amount, term);
  };

  calculate = (amount, term) => {
    const { history, calculateValues } = this.props;

    calculateValues({
      amount,
      term,
    }, history);
  };

  render() {
    const { termInterval, amountInterval, amount, term, history } = this.props;
    const historyItem = history.get(`${amount}-${term}`);

    return (
      <Grid>
        <RangeInput
          data={amountInterval}
          value={amount}
          calculate={this.handleAmount}
        />

        <RangeInput
          data={termInterval}
          value={term}
          calculate={this.handleTerm}
        />
        <ResultTable dataSet={historyItem} />
      </Grid>
    );
  }
}

ListContainer.propTypes = {
  calculateValues: React.PropTypes.func.isRequired,
  setAmountValue: React.PropTypes.func.isRequired,
  setTermValue: React.PropTypes.func.isRequired,
  termInterval: ImmutablePropTypes.map,
  amountInterval: ImmutablePropTypes.map,
  history: ImmutablePropTypes.map,
  amount: React.PropTypes.number.isRequired,
  term: React.PropTypes.number.isRequired,
};

const state = calcData => ({
  amountInterval: calcData.getIn(['intervals', 'amountInterval']),
  termInterval: calcData.getIn(['intervals', 'termInterval']),
  amount: calcData.getIn(['values', 'amount']),
  term: calcData.getIn(['values', 'term']),
  history: calcData.get('history'),
  calcData,
});

const dispatchCalculator = dispatch => ({
  setAmountValue: param => dispatch(setAmount(param)),
  setTermValue: param => dispatch(setTerm(param)),
  calculateValues: (params, history) => calculate(dispatch, params, history),
});

export default connect(state, dispatchCalculator)(ListContainer);
