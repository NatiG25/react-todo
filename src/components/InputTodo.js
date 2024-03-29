import React, { useState } from "react"
import { FaPlusCircle } from "react-icons/fa"

const InputTodo = ({addNewTodo}) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const handleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === '') {
      return  setMessage('Please add an item.');
    } else {
        addNewTodo(title);
        setTitle('');
        setMessage('');
    } 

  }

    return (
        <>
            <form onSubmit={handleSubmit} className="form-container" >
              <input type="text" placeholder="Add Todo..." value={title} onChange={handleChange} className="input-text" />
              <button type="submit" className="input-submit">
                <FaPlusCircle
                  style = {{
                    color: '#5e5e5e',
                    fontSize: '20px',
                    marginTop: '2px',
                  }}
                />
              </button>
            </form>
            <span className="submit-warning">{message}</span>
        </>
    )
}

export default InputTodo;
