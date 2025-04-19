import React from 'react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import RenderTracker from './Rendertracker'

const TodoList = React.memo(({tasks, checkTask, deleteTask}) => {
  return (
    <div className='flex w-full mt-8 flex-col items-center gap-4'>
      <RenderTracker/>
      {tasks.map((task, index) => (
        <TodoItem key={index} task={task} checkTask={checkTask} deleteTask={deleteTask}  />
      ))}
    </div>
  )
})

export default TodoList
