import React from "react"
import TodoItem from "./TodoItem";

const TodosList = ({todosProps, handleCheckboxChange, delTodo}) => {
    return (
        <>
            <ul>
                {todosProps.map((todo) => {
                  return <TodoItem key={todo.id} itemProps={todo} handleCheckboxChange={handleCheckboxChange} delTodo={delTodo} />
                })}
            </ul>
        </>
    )
}

export default TodosList;
