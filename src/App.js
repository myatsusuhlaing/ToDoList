import React, { useState } from 'react';
import './App.css';
import Testagain from './testagain';

function TodoList(){            
  const [notes,setNote] = useState([])                     //for checkbox lists
  const [addlist,setAddList]  = useState("")              //For input typing results

  const handleSubmit =(event)=> {
    // event.preventDefault();
    if (!addlist.trim())return;                          //No tying in input,also click don't show list icon
    setNote([...notes,{label:addlist,completed:false}]); //notes = show answers clcik at times , addList = show typing words at checkbox lists
    setAddList('');                                     //After add click btn,clear perivous words in input
  };

  const toggleNew = (index) => {
    const newNotes = [...notes];
    newNotes[index].completed = !newNotes[index].completed;
    setNote(newNotes);                                      //for checkbox click show line-through
  };
  const deleteBtn =() =>{
    const newNotes = notes.filter((note) => !note.completed)
    setNote(newNotes);                                      //for delete all checkbox
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
          <button onClick={deleteBtn}>Delete All</button>
        </ul>
    </div>
    <Testagain/>
  </> 
  )
}
export default TodoList;



