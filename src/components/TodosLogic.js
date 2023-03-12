import React, { useState } from "react";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";
import { v4 as uuidv4 } from "uuid";

const TodosLogic = () => {
    const [todos, setTodos] = useState([
        {
            id: uuidv4(),
            title: 'Cleaning',
            completed: true,
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

    const addNewTodo = (title) => {
        setTodos([
            ...todos,
            {
                id: uuidv4(),
                title,
                completed: false,
            }
        ])
    }

    const setUpdate = (updatedTitle, id) => {
      setTodos(
        todos.map((todo) => {
          if (todo.id === id) {
            todo.title = updatedTitle
          }
          return todo;
        })
      )
    }
    
    return (
        <>
            <InputTodo addNewTodo={addNewTodo} />
            <TodosList 
            todosProps={todos} 
            handleCheckboxChange={handleCheckboxChange} 
            delTodo={delTodo} 
            setUpdate={setUpdate} />
        </>
    )
}

export default TodosLogic;
