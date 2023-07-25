import { Component } from 'react';

export class LifeCycle extends Component {
  state = {
    todos: [],
    key: 0,
    filter: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.todos) {
      console.log('App component did update');

      if (this.state.todos !== prevState.todos) {
        console.log('Todos field has been updated!');
      }

      console.log(prevState);

      console.log(this.state);
    }
  }

  changeFunction = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  submitFunction = event => {
    event.preventDefault();

    this.setState(state => ({ key: state.key + 1 }));

    this.setState(state => ({
      todos: [
        ...state.todos,
        { key: `todo-item-${state.key}`, text: state.filter },
      ],
    }));

    event.currentTarget.reset();
  };

  deleteTodoItem = key => {
    this.setState(state => ({
      todos: state.todos.filter(todoItem => todoItem.key !== key),
    }));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitFunction}>
          <input
            name="numbersInput"
            type="text"
            onChange={this.changeFunction}
          />
          <button type="submit">Enter</button>
        </form>
        <div>
          {this.state.todos.map(todoItem => (
            <div key={todoItem.key}>
              <p>{todoItem.text}</p>
              <button
                id={todoItem.key}
                onClick={event => this.deleteTodoItem(event.currentTarget.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
