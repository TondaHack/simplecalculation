import Immutable, { Map } from 'immutable';
import constants from '../constants/appConstants';
import defaultTree from './defaultTree';

export default (state = new Map(Immutable.fromJS(defaultTree)), action) => {
  switch (action.type) {
    case constants.SET_RESULT: {
      const { historyLiteral, data } = action;

      return state
        .setIn(['history', historyLiteral], Immutable.fromJS(data))
        .set('result', Immutable.fromJS(data));
    }
    case constants.SET_AMOUNT:
      return state.setIn(['values', 'amount'], action.amount);
    case constants.SET_TERM:
      return state.setIn(['values', 'term'], action.term);
    case constants.SET_DEFAULT: {
      const { data } = action;
      const initData = Object.assign(defaultTree, {
        intervals: data,
        values: {
          amount: data.amountInterval.defaultValue,
          term: data.termInterval.defaultValue,
        },
      });

      return new Map(Immutable.fromJS(initData));
    }
    default:
      return state;
  }
};
