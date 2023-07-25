import { Component } from 'react';

const INITIAL_STATE = {
  todos: [],
  filter: '',
};

export class LifeCycle extends Component {
  state = JSON.parse(localStorage.getItem('state')) || INITIAL_STATE;

  componentDidUpdate(prevState) {
    if (this.state) {
      if (this.state !== prevState) {
        localStorage.setItem('state', JSON.stringify(this.state));
      }
    }
  }

  enterNewTodoItem = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  addNewTodoItem = event => {
    event.preventDefault();

    const todoItemsKeys = this.state.todos.map(todoItem => todoItem.key);
    let currentKey = 0;
    while (todoItemsKeys.includes(currentKey)) {
      currentKey += 1;
    }

    this.setState(state => ({
      todos: [...state.todos, { key: currentKey, text: state.filter }],
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
        <form onSubmit={this.addNewTodoItem}>
          <input
            name="numbersInput"
            type="text"
            onChange={this.enterNewTodoItem}
          />
          <button type="submit">Enter</button>
        </form>
        <div>
          {this.state.todos.map(todoItem => (
            <div key={todoItem.key}>
              <p>{todoItem.text}</p>
              <button onClick={() => this.deleteTodoItem(todoItem.key)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
