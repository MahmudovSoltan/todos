import React from 'react'
import { MdOutlineCheckCircleOutline } from "react-icons/md";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
const TodoItem = ({todo,toggleTodo ,deletTodo}) => {
  return (
    <>
    <div className='flex items-center gap-1 mb-3' onClick={()=>toggleTodo(todo.id)} >
      {todo.isComplet?
        <MdOutlineCheckCircleOutline className='text-[green]'/>: <MdOutlineRadioButtonUnchecked className='text-[green]'/>}<span className={`flex-1 ${todo.isComplet? "line-through":""}`}>{todo.text}</span>
    <RiDeleteBin5Fill  className='text-[red]' onClick={()=>deletTodo(todo.id)}/>
    </div>
  
        </>
  )
}

export default TodoItem
