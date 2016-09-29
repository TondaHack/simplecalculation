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
    const { setAmountValue, calcData } = this.props;

    setAmountValue(amount);
    this.calculate(amount, calcData.getIn(['values', 'term']));
  };

  handleTerm = (e) => {
    const term = numberify(e.target.value);
    const { setTermValue, calcData } = this.props;

    setTermValue(term);
    this.calculate(calcData.getIn(['values', 'amount']), term);
  };

  calculate = (amount, term) => {
    this.props.calculate({
      amount,
      term,
    });
  };

  render() {
    const { calcData } = this.props;
    const amountInterval = calcData.getIn(['intervals', 'amountInterval']);
    const amount = calcData.getIn(['values', 'amount']);
    const term = calcData.getIn(['values', 'term']);
    const termInterval = calcData.getIn(['intervals', 'termInterval']);

    return (
      <Grid>
        <RangeInput
          min={amountInterval.get('min')}
          max={amountInterval.get('max')}
          value={amount}
          step={amountInterval.get('step')}
          calculate={this.handleAmount}
        />

        <RangeInput
          min={termInterval.get('min')}
          max={termInterval.get('max')}
          value={term}
          step={termInterval.get('step')}
          calculate={this.handleTerm}
        />
        <ResultTable dataSet={calcData.get('result')} />
      </Grid>
    );
  }
}

ListContainer.propTypes = {
  calculate: React.PropTypes.func.isRequired,
  setAmountValue: React.PropTypes.func.isRequired,
  setTermValue: React.PropTypes.func.isRequired,
  calcData: ImmutablePropTypes.map,
};

const state = calcData => ({
  calcData,
});

const dispatchCalculator = dispatch => ({
  setAmountValue: param => dispatch(setAmount(param)),
  setTermValue: param => dispatch(setTerm(param)),
  calculate: params => calculate(dispatch, params),
});

export default connect(state, dispatchCalculator)(ListContainer);
