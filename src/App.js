import React, { useState } from 'react';
import './App.css';
import Test from './test';

function TodoList(){
  const [notes,setNote] = useState([])
  const [addlist,setAddList]  = useState("")

  const handleSubmit =(event)=> {
    event.preventDefault();
    if (!addlist.trim())return;
    setNote([...notes,{label:addlist,completed:false}]);
    setAddList('');
  };

  const toggleNew = (index) => {
    const newNotes = [...notes];
    newNotes[index].completed = !newNotes[index].completed;
    setNote(newNotes);
  };

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
          {notes.map((note,index) =>
            <li key={index} 
            style={{textDecoration: note.completed ? "line-through" : "none"}}>
            <input 
              type='checkbox' 
              checked ={note.completed}
              onChange={()=>toggleNew(index)}
            />{note.label}
            </li>
          )}
        </ul>
    </div>
    {/* <Test/> */}
  </> 
  )
}
export default TodoList;



