import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import useTodos from './hooks/useTodos';
import './App.css';

const App: React.FC = () => {
  const { todos, addTodo, toggleTodo, clearTodos, getRemainingTodosCount } = useTodos();
  const [filter, setFilter] = useState('All');

  const getFilteredTodos = () => {
    if (filter === 'Active') {
      return todos.filter(todo => !todo.completed);
    } else if (filter === 'Completed') {
      return todos.filter(todo => todo.completed);
    }
    return todos;
  };

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  return (
    <div className="container">
      <h1>todos</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={getFilteredTodos()} toggleTodo={toggleTodo} />
      <div className="todo-actions">
        <span>{getRemainingTodosCount()} tasks left</span>
        <div className="filters">
          <button 
            className={filter === 'All' ? 'active' : ''}
            onClick={() => handleFilterChange('All')}
          >
            All
          </button>
          <button 
            className={filter === 'Active' ? 'active' : ''}
            onClick={() => handleFilterChange('Active')}
          >
            Active
          </button>
          <button 
            className={filter === 'Completed' ? 'active' : ''}
            onClick={() => handleFilterChange('Completed')}
          >
            Completed
          </button>
        </div>
        <button onClick={clearTodos}>Clear All</button>
      </div>
    </div>
  );
};

export default App;