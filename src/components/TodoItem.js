import React, { useState } from "react"
import styles from "../styles/TodoItem.module.css"

const TodoItem = ({itemProps, handleCheckboxChange, delTodo, setUpdate}) => {
const [editing, setEditing] = useState(false)

const completedStyle = {
  fontStyle: 'italic',
  color: '#595959',
  opacity: 0.4,
  textDecoration: 'line-through',
}

let viewMode = {};
let editMode = {};

if (editing) {
  viewMode.display = "none";
} else {
  editMode.display = "none";
}

const handleEditing = () => {
  setEditing(true)
}

const handleUpdatedDone = (e) => {
  if (e.key === 'Enter') {
    setEditing(false);
  }
}
    return (
        <li className={styles.item}>
          <div className={styles.content} style={viewMode}>
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
            style={editMode}
            onChange={(e) => setUpdate(e.target.value, itemProps.id)}
            onKeyDown={(e) => handleUpdatedDone(e)}
          />
        </li>
    )
}

export default TodoItem;
