import React, { PropTypes } from 'react';
import { Slider, Cell, Grid } from 'react-mdl';
import './style.css';

export default class RangeInput extends React.Component {
  static propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    value: PropTypes.number,
    calculate: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  selectOptions() {
    const { min, max, step } = this.props;
    const list = [];

    for (let i = min; i <= max; i += step) {
      list.push(
        <option key={`${i}-${min}-${max}`} value={i}>{i}</option>
      );
    }

    return list;
  }

  render() {
    const { min, max, step, calculate, value } = this.props;
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
          <Cell col={2}>{min}</Cell>
          <Cell col={8}>
            <Slider
              type="range"
              value={value}
              min={min}
              max={max}
              step={step}
              onChange={calculate}
            />
          </Cell>
          <Cell col={2}>{max}</Cell>
        </Grid>
      </Cell>
    );
  }
}
