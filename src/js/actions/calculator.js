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

export function calculate(dispatch, params) {
  const url = `${config.host}/first-loan-offer?amount=${params.amount}&term=${params.term}`;

  window.fetch(url).then(response => response.json())
    .then(data => dispatch({
      data,
      type: constants.SET_RESULT,
    }));
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
