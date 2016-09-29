/* eslint-disable */
import expect from 'expect';
import { numberify, roundToDecimal } from './format';
const numberifyName = 'Numerify';
const roundToDecimalName = 'Round to Decimal';

describe('Format tests', () => {

  it(`${numberifyName} undefined`, function () {
    expect(numberify(undefined)).toEqual(0);
  });

  it(`${numberifyName} int`, function () {
    expect(numberify(455.322)).toEqual(455.322);
  });

  it(`${numberifyName} string`, function () {
    expect(numberify(`22ossfd`)).toEqual(22);
  });

  it(`${roundToDecimalName} undefined`, function () {
    expect(roundToDecimal(undefined, undefined)).toEqual(0);
  });

  it(`${roundToDecimalName} bigger int`, function () {
    expect(roundToDecimal(455.3999999999999)).toEqual(455.40);
  });

  it(`${roundToDecimalName} string`, function () {
    expect(numberify(`22.99ossfd`)).toEqual(22.99);
  });

});
