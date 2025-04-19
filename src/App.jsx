import React, { useState, useCallback } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [input, setInput] = useState("");

  const addTask = useCallback(() => {
    if (input.trim() !== "") {
      const newTask = { id: tasks.length + 1, isCompleted: false, todo: input };
      const newTasks = [...tasks, newTask];
      setTasks(newTasks);
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      setInput("");
    }
  }, [tasks, input]);

  const checkTask = useCallback((id) => {
    const updateTasks = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updateTasks);
    localStorage.setItem("tasks", JSON.stringify(updateTasks));
  }, [tasks]);

  const deleteTask = useCallback((id) => {
    const filterTasks = tasks.filter(task => task.id !== id);
    setTasks(filterTasks);
    localStorage.setItem("tasks", JSON.stringify(filterTasks));
  }, [tasks]);

  return (
    <div className="flex items-center justify-center bg-black h-screen">
      <div className="bg-white w-[450px] h-[500px] rounded-2xl py-4 px-4 flex flex-col items-center">
        <h1 className="mt-4 w-full text-start mb-10 font-bold text-3xl">To-Do List</h1>
        <TodoInput
          input={input}
          setInput={setInput}
          addTask={addTask}
        />
        <TodoList
          tasks={tasks}
          checkTask={checkTask}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
};

export default App;
