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

    const handleCheckboxChange = (id) => {
        setTodos((prevState) =>
        prevState.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        })
      );
      }

    const delTodo = (id) => {
        setTodos([
          ...todos.filter((todo) => {
            return todo.id !== id
          })
        ])
      }
    
    return (
        <>
            <InputTodo />
            <TodosList todosProps={todos} handleCheckboxChange={handleCheckboxChange} delTodo={delTodo} />
        </>
    )
}

export default TodosLogic;
