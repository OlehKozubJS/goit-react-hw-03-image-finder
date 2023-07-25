import { Component } from 'react';

export class LifeCycle extends Component {
  state = {
    todos: [],
    key: 0,
    filter: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.todos) {
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
        { id: `todo-item-${state.key}`, text: state.filter },
      ],
    }));

    event.currentTarget.reset();
  };

  deleteTodoItem = key => {
    console.log(key);
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
            <div key={`todo-item-${todoItem.key}`}>
              <p>{todoItem.text}</p>
              <button
                id={`todo-item-${todoItem.key}`}
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
