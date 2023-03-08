import React from "react"
import TodoItem from "./TodoItem";

const TodosList = (todos) => {
    return (
        <>
            <TodoItem todos={todos} />
        </>
    )
}

export default TodosList;
