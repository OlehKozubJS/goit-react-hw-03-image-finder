import { Component } from 'react';
import propTypes from 'prop-types';

export class TestComponent extends Component {
  state = {
    sum: 0,
  };

  reckonSum = event => {
    return event.currenTarget.value
      .split(' ')
      .reduce(
        (accumulator, number) => accumulator + Number(number),
        this.state.sum
      );
  };

  render() {
    return (
      <div>
        <input type="text" />
        <button onClick={this.reckonSum}>Enter</button>
        <div>{this.state.sum}</div>
      </div>
    );
  }
}
