import 'whatwg-fetch';
import constants from '../constants/appConstants';
import config from '../../config/config.json';

export function getDefaultData(dispatch) {
  const url = `${config.host}/constraints`;

  window.fetch(url).then(response => response.json())
    .then(data => dispatch({
      data,
      type: constants.SET_DEFAULT,
    }));
}

export function calculate(dispatch, params, history) {
  const { amount, term } = params;
  const url = `${config.host}/real-first-loan-offer?amount=${amount}&term=${term}`;
  const historyLiteral = `${amount}-${term}`;
  const findedInHistory = history.get(historyLiteral);

  if (!findedInHistory) {
    window.fetch(url).then(response => response.json())
      .then(data => dispatch({
        historyLiteral,
        data,
        type: constants.SET_RESULT,
      }));
  }
}

export function setAmount(amount) {
  return {
    amount,
    type: constants.SET_AMOUNT,
  };
}

export function setTerm(term) {
  return {
    term,
    type: constants.SET_TERM,
  };
}
