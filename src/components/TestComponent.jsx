import { Component } from 'react';
import propTypes from 'prop-types';

export class TestComponent extends Component {
  state = {
    sum: 0,
  };

  reckonSum = event => {
    return event.currenTarget.elements.numbersInput.value
      .split(' ')
      .reduce(
        (accumulator, number) => accumulator + Number(number),
        this.state.sum
      );
  };

  render() {
    return (
      <div>
        <form onClick={this.reckonSum}>
          <input name="numbersInput" type="text" />
          <button type="submit">Enter</button>
        </form>
        <div>{this.state.sum}</div>
      </div>
    );
  }
}
