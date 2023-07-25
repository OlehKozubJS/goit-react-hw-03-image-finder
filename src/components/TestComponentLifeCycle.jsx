import { Component } from 'react';

export class LifeCycle extends Component {
  state = {
    todos: [],
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

  enterNewTodoItem = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  addNewTodoItem = event => {
    event.preventDefault();

    let keyData = 0;
    while (this.state.todos.map(todoItem => todoItem.key).includes(keyData)) {
      keyData += 1;
    }

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
