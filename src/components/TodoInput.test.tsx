import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoInput from './TodoInput';

test('adds a new task', () => {
  const addTodo = jest.fn();
  const { getByPlaceholderText, getByText } = render(<TodoInput addTodo={addTodo} />);
  const input = getByPlaceholderText('Enter new task');
  const button = getByText('Add Task');

  fireEvent.change(input, { target: { value: 'New Task' } });
  fireEvent.click(button);

  expect(addTodo).toHaveBeenCalledWith('New Task');
});
