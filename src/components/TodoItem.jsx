import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";

const TodoItem = ({task, checkTask, deleteTask}) => {
  return (
    <div className='flex items-center py-2 border-b border-gray-200 px-4 justify-between w-full '>
      <div className='flex-1 flex items-center gap-2'>
        {task.isCompleted ? <FaCheckCircle className='text-orange-600' onClick={()=>checkTask(task.id)}/> : <FaRegCircle onClick={()=>checkTask(task.id)}/>}
        <p className={`${task.isCompleted === true && 'line-through text-gray-600 '}`}>{task.todo}</p>
      </div>
      <FaRegTrashAlt onClick={() => deleteTask(task.id)}
       className='cursor-pointer hover:scale-105'/>
    </div>
  )
}

export default TodoItem
