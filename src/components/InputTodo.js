import React, { useState } from "react"

const InputTodo = ({addNewTodo}) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const handleChange = (e) => {
    // console.log(e.target.value);
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
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Todo" value={title} onChange={handleChange} />
              <button type="submit">Submit</button>
            </form>
            <span>{message}</span>
        </>
    )
}

export default InputTodo;
