import React, { useState } from "react"
import styles from "../styles/TodoItem.module.css"

const TodoItem = ({itemProps, handleCheckboxChange, delTodo}) => {
const [editing, setEditing] = useState(false)

const completedStyle = {
  fontStyle: 'italic',
  color: '#595959',
  opacity: 0.4,
  textDecoration: 'line-through',
}

const handleEditing = () => {
  setEditing(true)
}
    return (
        <li className={styles.item}>
          <div className={styles.content}>
            <input 
              type="checkbox"
              checked={itemProps.completed}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
              onChange={() => handleCheckboxChange(itemProps.id)}
            />
            <span style={itemProps.completed ? completedStyle : null}>
              {itemProps.title}
            </span>
            <button onClick={handleEditing}>Edit</button>
            <button onClick={() => delTodo(itemProps.id)}>Delete</button>
          </div>
          <input
            type="text"
            value={itemProps.title}
            className={styles.textInput}
          />
        </li>
    )
}

export default TodoItem;
