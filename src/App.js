import React, { useState } from 'react';
import './App.css';

function TodoList(){
  const [notes,setNote] = useState([])
  const [addlist,setAddList]  = useState("")
  const handleSubmit =(event)=> {
    event.preventDefault();
    setNote([...notes,addlist]);
  }
  return(
  <>
    <div className="toTask">
      <h2>To Do List</h2>
      <input 
      type='text' 
      placeholder='Note Something.......'
      value={addlist}
      onChange={(event) => setAddList(event.target.value)}
      />
      <button onClick={handleSubmit} >Add</button>
    </div>
    <div className='checkList'>
        <ul>
          {notes.map((note) =>
            <li>
            <input  type='checkbox' name='checkbox'/>{note}
            </li>
          )}
        </ul>
    </div>
  </> 
  )
}
export default TodoList;



