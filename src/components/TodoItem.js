import React from "react"

const TodoItem = ({itemProps}) => {
    console.log(itemProps)
    return (
        <>
          <li>
            <input type='checkbox' id="name"/>
            <label for="name">{itemProps.title}</label>
          </li>
        </>
    )
}

export default TodoItem;
