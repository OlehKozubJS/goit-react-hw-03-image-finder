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

  submitFunction = event => {
    this.setState(state => ({
      todos: [...state.todos, sta],
    }));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitFunction}>
          <input name="numbersInput" type="text" />
          <button type="submit">Enter</button>
        </form>
        <div>
          {this.state.todos.map(todo => (
            <p>{todo}</p>
          ))}
        </div>
      </div>
    );
  }
}
