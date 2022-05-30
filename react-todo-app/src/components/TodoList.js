import React from "react";
import TodoItem from "./TodoItem";


export default class TodoList extends React.Component {
    render() {
        return (
            <React.Fragment>
        <ul>
            {this.props.todos.map(todo => {
                return <TodoItem key={todo.id} todo={todo} />
            })}
        </ul>
      </React.Fragment>
        )
    }
}