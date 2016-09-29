import { createStore } from 'redux';
import calcData from '../reducer/calculator';

export default createStore(calcData,
    window.devToolsExtension && window.devToolsExtension()
);
