import React from 'react';
import { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => {
  return (
    <li className={todo.completed ? 'completed' : ''}>
      <div
        className={`todo-checkbox ${todo.completed ? 'completed' : ''}`}
        onClick={() => toggleTodo(todo.id)}
      ></div>
      <span>{todo.task}</span>
    </li>
  );
};

export default TodoItem;