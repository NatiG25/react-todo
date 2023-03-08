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
            id: 1,
            title: 'Fixing',
            completed: false,
        },
        {
            id: 1,
            title: 'Washing',
            completed: false,
        },
    ])
    // console.log(todos);
    return (
        <>
            <InputTodo />
            <TodosList todos={todos} />
        </>
    )
}

export default TodosLogic;
