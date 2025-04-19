import React from 'react'
import RenderTracker from './Rendertracker'

const TodoInput = React.memo(({input, setInput, addTask}) => {

  return (
    <div>
        <div className='bg-gray-300 flex  rounded-full  w-[400px] h-[50px]'>
        <input value={input} onChange={(e) => setInput(e.target.value)}
          type="text" placeholder='Add Text'
          className='ml-4 flex-1 outline-none focus:outline-none focus:ring-0 text-sm'
        />
        <button onClick={addTask}
          className='bg-orange-400 cursor-pointer text-white w-[100px] h-full rounded-full '>
          ADD+
        </button>
      </div>
      <RenderTracker/>
    </div>
  )
})

export default TodoInput
