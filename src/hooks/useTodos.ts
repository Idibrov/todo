import { useState } from 'react';
import { Todo } from '../types';

const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (task: string) => {
    setTodos([...todos, { id: Date.now(), task, completed: false }]);
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const clearTodos = () => {
    setTodos([]);
  };

  const getRemainingTodosCount = () => {
    return todos.filter(todo => !todo.completed).length;
  };

  return {
    todos,
    addTodo,
    toggleTodo,
    clearTodos,
    getRemainingTodosCount
  };
};

export default useTodos;