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

  deleteTodoItem = todoIndex => {
    console.log(todoIndex);
    this.setState(state => ({
      todos: todoIndex === 0 ? [] : state.todos.splice(todoIndex, 1),
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
              <button onClick={() => this.deleteTodoItem(todoIndex)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
