// src/utils/taskFunctions.js
export function addTask(tasks, input) {
    const newTask = { id: tasks.length + 1, isCompleted: false, todo: input };
    return [...tasks, newTask];
  }
  
  export function checkTask(tasks, id) {
    return tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
  }
  
  export function deleteTask(tasks, id) {
    return tasks.filter((task) => task.id !== id);
  }
  