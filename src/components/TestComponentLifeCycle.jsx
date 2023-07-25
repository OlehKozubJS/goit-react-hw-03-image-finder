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

  changeFunction = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  submitFunction = event => {
    event.preventDefault();

    this.setState(state => ({
      todos: [...state.todos, state.filter],
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
          {this.state.todos.map((todoItem, todoIndex) => (
            <div key={`todo-item-${todoIndex}`}>
              <p>{todoItem}</p>
              <button
                onClick={event =>
                  this.deleteTodoItem(event.currentTarget.parentNode.key)
                }
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
