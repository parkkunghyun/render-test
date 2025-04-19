// test/taskFunctions.test.js
import { describe, it, expect } from 'vitest'
import { addTask, checkTask, deleteTask } from "./taskFunctions"

describe('Task Function Performance Test', () => {
  const sampleTasks = Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    isCompleted: false,
    todo: `task ${i + 1}`
  }));

  it('addTask performance', () => {
    const start = performance.now();
    const result = addTask(sampleTasks, "new task");
    const end = performance.now();

    console.log(`addTask 실행 시간: ${(end - start).toFixed(2)}ms`);
    expect(result).toHaveLength(1001);
  });

  it('checkTask performance', () => {
    const start = performance.now();
    const result = checkTask(sampleTasks, 500);
    const end = performance.now();

    console.log(`checkTask 실행 시간: ${(end - start).toFixed(2)}ms`);
    expect(result[499].isCompleted).toBe(true);
  });

  it('deleteTask performance', () => {
    const start = performance.now();
    const result = deleteTask(sampleTasks, 500);
    const end = performance.now();

    console.log(`deleteTask 실행 시간: ${(end - start).toFixed(2)}ms`);
    expect(result).toHaveLength(999);
  });
});
