import React, { useEffect, useRef, useState } from 'react'
import { IoAddOutline } from "react-icons/io5";
import TodoItem from './TodoItem';
const ToDo = () => {
    const [toDos,setToDos] = useState(
      localStorage.getItem("toDos")?JSON.parse(localStorage.getItem("toDos")):[]
    )
    const input = useRef()
    const addTodos = () =>{
        const inputText = input.current.value.trim()
        if (inputText === "") {
            return null
        }

        const newToDos = {
            id: toDos.length + 1,
            text: inputText,
            isComplet:false,

        }
        setToDos((prev)=>[...prev,newToDos])
        input.current.value = "";
    }


    const toggleTodo =(id)=>{
       setToDos((prewToDos) =>{
        return prewToDos.map((todo)=>{
          if(todo.id === id){
            return {...todo, isComplet: !todo.isComplet}
          }
          return todo;
        })
      })

    }

    const deletTodo = (id) =>{
      setToDos((prewious)=>{
        return prewious.filter((todo)=> todo.id !== id)
      })
    }
    useEffect(()=>{
localStorage.setItem("toDos",JSON.stringify(toDos))
    },[toDos])
   
  return (


    <div className='place-self-center w-[500px] bg-white  text-[20px] p-3 cursor-pointer rounded-md'>
             <h1 className='place-self-center items-center text-[36px] mb-3'>ToDo App</h1>

             <div className='flex items-center  bg-slate-500 mb-3  rounded-full' >
     <input ref={input} className='outline-none flex-1 bg-transparent p-3' type="text" placeholder='Write your toDo' />
<IoAddOutline className='bg-green-600 h-[54px] w-[40px] roun rounded-e-full'onClick={addTodos}/>

             </div>
           {
            toDos.map((todo)=>(
                <TodoItem key={todo.id}  todo = {todo} toggleTodo={toggleTodo} deletTodo={deletTodo} />
            ))
           }
              
    </div>
  )
}

export default ToDo
