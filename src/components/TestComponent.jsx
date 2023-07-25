import { Component } from 'react';
import propTypes from 'prop-types';

export class TestComponent extends Component {
  state = {
    sum: 0,
    currentSum: 0,
  };

  reckonSum = event => {
    event.preventDefault();

    this.setState({
      sum: event.currenTarget.elements.numbersInput.value
        .split(' ')
        .reduce(
          (accumulator, number) => accumulator + Number(number),
          this.state.currentSum
        ),
    });

    this.setState({ currentSum: 0 });

    event.currenTarget.reset();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.reckonSum}>
          <input name="numbersInput" type="text" />
          <button type="submit">Enter</button>
        </form>
        <div>{this.state.sum}</div>
      </div>
    );
  }
}
