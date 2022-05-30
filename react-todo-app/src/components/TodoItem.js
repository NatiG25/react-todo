import React from "react";

class TodoItem extends React.Component {
  render() {
    return (
    <li>
    <input type="checkbox" defaultChecked={this.props.todo.completed} /> {this.props.todo.title}
    </li>
    )
  }
}

export default TodoItem;