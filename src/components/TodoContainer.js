import React from 'react';
import TodoList from './TodoList';
import Header from './Header';

export default class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: 2,
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: 3,
          title: 'Deploy to live server',
          completed: false,
        },
      ],
    };
  }

    handleChange = (id) => {
      this.setState({
        todos: this.state.todos.map((todo) => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      });
    };

    render() {
      return (
        <>
          <Header />
          <TodoList todos={this.state.todos} handleChangeProps={this.handleChange} />
        </>
      );
    }
}