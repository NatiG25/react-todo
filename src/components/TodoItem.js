import React from "react"

const TodoItem = (todos) => {
    console.log(todos.todos.todos)
    return (
        <>
          <ul>
            {todos.todos.todos.map((item) => {
                  return (
                  <li key={item.id}>
                    <input type='checkbox' id="name"/>
                    <label for="name">{item.title}</label>
                  </li>
                  )
              })}
          </ul>
        </>
    )
}

export default TodoItem;
