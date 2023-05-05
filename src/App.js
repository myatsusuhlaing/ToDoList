import React, { useState } from 'react';
import { AiFillDelete, AiOutlinePlus  } from "react-icons/ai";
import './App.css';
import './input.css';

function TodoList(){            
  const [notes, setNote] = useState([]);                              //for checkbox lists
  const [addlist, setAddList]  = useState("");                         //For input typing results
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [confirmCancel, setConfirmCancel] = useState(false);

  const handleSubmit =(event)=> {
    event.preventDefault();
    if (!addlist.trim())return;                                    //No click and tying in input, don't show list icon 
    // setNote([...notes,{label:addlist,completed:false}]);
    setNote([...notes,{label:addlist}]);                          //notes = show answers clcik at times , addList = show typing words at checkbox lists
    
    setAddList('');                                               //After add click btn,clear perivous words in input
  };

  const deleteList = (index) => {
    const newNotes = notes.filter((_,i) => i !== index);
    setNote(newNotes);
    if (setConfirmDelete(true));                                  //show confirm box for delete
  }

  const handleconfirmDelete = () =>{
    setConfirmDelete(false)                                        //click delete button in confrim box 
  }

  const handleconfirmCancel = () =>{
    setConfirmCancel(!confirmCancel)
  }

  // const toggleNew = (index) => {
  //   const newNotes = [...notes];
  //   newNotes[index].completed = !newNotes[index].completed;
  //   setNote(newNotes);                                      //for checkbox click show line-through
  // };

  // const deleteBtn =() =>{
  //   const newNotes = notes.filter((note) => !note.completed)
  //   setNote(newNotes);                                      //for delete all checkbox
  // };

return(
<>
<div  className='bg-slate-300 container w-10/12 mx-auto text-center mt-3 pb-10 h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,.35)]'>
      
    {/* ----------------------------- Add lists input -------------------------- */}
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
    
    {/* ------------------- confirm dialoge box -------------------- */}
    {confirmDelete &&(
    <div className='confirmBox md:mx-auto border md:w-3/12 py-4'>
        Are u sure delete?
        <div className='py-4' >
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 mx-2 rounded' 
            onClick={handleconfirmDelete}>delete</button>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 mx-2 rounded'
            onClick={handleconfirmCancel}>cancel</button>
        </div>
    </div>)}
     
   {!confirmCancel && (
    <div className='grid md:grid-cols-2  flex items-center justify-items-center'>

      {/* ----------------------------todolist box -----------------------------  */}
      <div className='checkList border border-slate-300  w-8/12 bg-blue-100 text-left p-2 rounded md:mx-auto mt-4 '>
          <ul>
            <h2 className='text-center bg-blue-200 p-4 font-mono text-2xl text-gray-600 my-1'>To-do</h2>
            {notes.map((note,index) =>
              <li key={index} 
              // style={{textDecoration: note.completed ? "line-through" : "none"}}
              className='text-sm font-semibold bg-blue-200 flex h-aut0 w-full items-center  bg-primary p-4 mb-1'
              >
              <input 
                type='checkbox' 
                checked ={note.completed}
                // onChange={()=>toggleNew(index)}
                className='mb-auto'
              />
              <p className='pl-2 overflow-hidden break-words leading-5 mb-auto'>
                {note.label}
              </p>
            {/* <button onClick={() => deleteList(index)}>delete</button>  */}
            <button onClick={() => deleteList(index)} className='deltebtn rounded inline-block mb-auto bg-slate-800 px-3 pb-3.5 pt-3 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800  focus:bg-neutral-800]' >
              <AiFillDelete size={15} className='group-hover:stroke-white'/>
            </button>
            </li>
            )}
          </ul>
      </div>

      {/* ------------------------------- complete list box --------------------------------- */}
      <div className='checkList border border-slate-200 w-8/12 bg-blue-100 text-left p-2 rounded md:mx-auto mt-4'>
          <ul >
            <h2 className='text-center bg-blue-200 p-4 font-mono text-2xl text-gray-600 my-1'>Complete</h2>
            {notes.map((note,index) =>
              <li
              className='text-sm font-semibold bg-blue-200 flex h-aut0 w-full items-center bg-primary p-4 mb-1'
              >
              <p className='pl-2 overflow-hidden break-words leading-5 mb-auto'>
                {note.label}
              </p>
            {/* <button onClick={() => deleteList(index)}>delete</button>  */}
            <button onClick={() => deleteList(index)} className='deltebtn rounded inline-block mb-auto bg-slate-800 px-3 pb-3.5 pt-3 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800  focus:bg-neutral-800]' >
              <AiFillDelete size={15} className='group-hover:stroke-white'/>
            </button>
            </li>
            )}
          </ul>
      </div> 
 
    </div>)}

</div>
</> 
)
}
export default TodoList;



