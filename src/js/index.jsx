import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CalculatorContainer from './components/CalculatorContainer/index';
import store from './stores';
import './index.css';
import { getDefaultData } from './actions/calculator';

const App = () => (
  <div className="main">
    <h1>Calculator</h1>
    <CalculatorContainer />
  </div>
);
const getInitData = dispatch => getDefaultData(dispatch);

getInitData(store.dispatch);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  window.document.getElementById('root')
);
