import React, { useState } from 'react';
import { AiFillDelete, AiOutlinePlus  } from "react-icons/ai";
import './App.css';
import './input.css';
// import Testagain from './testagain';

function TodoList(){            
  const [notes,setNote] = useState([])                     //for checkbox lists
  const [addlist,setAddList]  = useState("")              //For input typing results

  const handleSubmit =(event)=> {
    // event.preventDefault();
    if (!addlist.trim())return;                          //No click and tying in input, don't show list icon 
    setNote([...notes,{label:addlist,completed:false}]); //notes = show answers clcik at times , addList = show typing words at checkbox lists
    setAddList('');                                     //After add click btn,clear perivous words in input
  };

  const toggleNew = (index) => {
    const newNotes = [...notes];
    newNotes[index].completed = !newNotes[index].completed;
    setNote(newNotes);                                      //for checkbox click show line-through
  };

  // const deleteList = (index) => {
  //   const newNotes = notes.filter((_,i) => i !== index);
  //   setNote(newNotes);
  // }

  const deleteBtn =() =>{
    const newNotes = notes.filter((note) => !note.completed)
    setNote(newNotes);                                      //for delete all checkbox
  };
  return(
  <>
  <div  className='bg-slate-300 md:container md:mx-auto text-center m-5 mb-10 pb-10 h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,.35)]'>
    
    <div className="py-4 md:py-8 md:m-auto">
      <h2 className='p-4 font-mono text-2xl italic md:not-italic'>To-Do List</h2>
      <input 
      className='p-2 w-8/12 placeholder:italic placeholder:text-slate-400'
      type='text' 
      placeholder='Note Something.......'
      value={addlist}
      onChange={(event) => setAddList(event.target.value)}
      />
      <button 
      className="rounded bg-neutral-800 px-3 pb-3.5 pt-3 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800  focus:bg-neutral-800  ]" 
      onClick={handleSubmit} >
        <AiOutlinePlus size={15} />
      </button>
    </div>
    
  <div className='grid md:grid-cols-2 flex items-center justify-items-center'>
    <div className='checkList border border-slate-300 md:w-11/12  text-left p-5 mx-auto '>
        <ul >
          {notes.map((note,index) =>
            <li key={index} 
            // style={{textDecoration: note.completed ? "line-through" : "none"}}
            className='text-sm font-semibold bg-blue-300 flex h-aut0 w-full items-center rounded-md bg-primary p-4 mb-1'
            >
            <input 
              type='checkbox' 
              checked ={note.completed}
              onChange={()=>toggleNew(index)}
              className='mb-auto'
            />
            <p className='pl-2 overflow-hidden break-words leading-5 mb-auto'>
              {note.label}
            </p>
          {/* <button onClick={() => deleteList(index)}>delete</button>  */}
          <button onClick={deleteBtn} className='deltebtn rounded inline-block mb-auto bg-slate-800 px-3 pb-3.5 pt-3 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800  focus:bg-neutral-800]' >
            <AiFillDelete size={15} className='group-hover:stroke-white'/>
          </button>
          </li>
          )}
        </ul>
    </div>
    <div className='checkList border border-slate-300 md:w-11/12  text-left p-7 mx-auto '>
        <ul >
          {notes.map((note,index) =>
            <li
            className='text-sm font-semibold bg-blue-300 flex h-aut0 w-full items-center rounded-md bg-primary p-4 mb-1'
            >
            <p className='pl-2 overflow-hidden break-words leading-5 mb-auto'>
              {note.label}
            </p>
          {/* <button onClick={() => deleteList(index)}>delete</button>  */}
          <button onClick={deleteBtn} className='deltebtn rounded inline-block mb-auto bg-slate-800 px-3 pb-3.5 pt-3 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800  focus:bg-neutral-800]' >
            <AiFillDelete size={15} className='group-hover:stroke-white'/>
          </button>
          </li>
          )}
        </ul>
    </div>
  </div>
  </div>
    {/* <Testagain/> */}
  </> 
  )
}
export default TodoList;



