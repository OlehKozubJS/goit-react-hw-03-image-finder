import { Component } from 'react';

export class LifeCycle extends Component {
  state = {
    todos: [],
    filter: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.todos) {
    }
  }

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
