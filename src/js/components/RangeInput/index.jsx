import React, { PropTypes } from 'react';
import { Slider, Cell, Grid } from 'react-mdl';
import ImmutablePropTypes from 'react-immutable-proptypes';
import './style.css';

export default class RangeInput extends React.Component {
  static propTypes = {
    data: ImmutablePropTypes.map,
    value: PropTypes.number,
    calculate: PropTypes.func,
  };

  selectOptions() {
    const { data } = this.props;
    const min = data.get('min');
    const max = data.get('max');
    const step = data.get('step');
    const list = [];

    for (let i = min; i <= max; i += step) {
      list.push(
        <option key={`${i}-${min}-${max}`} value={i}>{i}</option>
      );
    }

    return list;
  }

  render() {
    const { calculate, value, data } = this.props;
    const options = this.selectOptions();

    return (
      <Cell col={12} className="range-input">
        <header className="value">
          <div className="mdl-selectfield">
            <select value={value} onChange={calculate}>
              {options}
            </select>
          </div>
        </header>
        <Grid>
          <Cell col={2}>{data.get('min')}</Cell>
          <Cell col={8}>
            <Slider
              min={data.get('min')}
              max={data.get('max')}
              step={data.get('step')}
              type="range"
              value={value}
              onChange={calculate}
            />
          </Cell>
          <Cell col={2}>{data.get('max')}</Cell>
        </Grid>
      </Cell>
    );
  }
}
