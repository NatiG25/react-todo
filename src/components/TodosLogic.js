import React, { useState } from "react";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";

const TodosLogic = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: 'Cleaning',
            completed: true,
        },
        {
            id: 2,
            title: 'Fixing',
            completed: false,
        },
        {
            id: 3,
            title: 'Washing',
            completed: false,
        },
    ])
    // console.log(todos);
    return (
        <>
            <InputTodo />
            <TodosList todosProps={todos} />
        </>
    )
}

export default TodosLogic;
