import React from "react"
import styles from "../styles/TodoItem.module.css"

const TodoItem = ({itemProps, handleCheckboxChange, delTodo}) => {
const completedStyle = {
  fontStyle: 'italic',
  color: '#595959',
  opacity: 0.4,
  textDecoration: 'line-through',
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
            <button onClick={() => delTodo(itemProps.id)}>Delete</button>
          </div>
        </li>
    )
}

export default TodoItem;
