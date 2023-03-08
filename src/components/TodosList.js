import React from "react"
import TodoItem from "./TodoItem";

const TodosList = ({todosProps}) => {
    return (
        <>
            <ul>
                {todosProps.map((todo) => {
                  return <TodoItem key={todo.id} itemProps={todo} />
                })}
            </ul>
        </>
    )
}

export default TodosList;
