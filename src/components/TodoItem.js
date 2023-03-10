import React from "react"

const TodoItem = ({itemProps, handleCheckboxChange, delTodo}) => {
    // if (itemProps.id != undefined) console.log(itemProps.id);

    return (
        <li>
          <input 
          type="checkbox"
          checked={itemProps.completed}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
          onChange={() => handleCheckboxChange(itemProps.id)}
          />
          {itemProps.title}
          <button onClick={() => delTodo(itemProps.id)}>Delete</button>
        </li>
    )
}

export default TodoItem;
