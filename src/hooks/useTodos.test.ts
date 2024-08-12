import { renderHook, act } from '@testing-library/react-hooks';
import useTodos from './useTodos';

test('should add a new todo', () => {
  const { result } = renderHook(() => useTodos());

  act(() => {
    result.current.addTodo('New Task');
  });

  expect(result.current.todos).toHaveLength(1);
  expect(result.current.todos[0].task).toBe('New Task');
});

test('should toggle todo completion', () => {
  const { result } = renderHook(() => useTodos());

  act(() => {
    result.current.addTodo('New Task');
    result.current.toggleTodo(result.current.todos[0].id);
  });

  expect(result.current.todos[0].completed).toBe(true);
});

test('should clear all todos', () => {
  const { result } = renderHook(() => useTodos());

  act(() => {
    result.current.addTodo('New Task 1');
    result.current.addTodo('New Task 2');
    result.current.clearTodos();
  });

  expect(result.current.todos).toHaveLength(0);
});

test('should get remaining todos count', () => {
  const { result } = renderHook(() => useTodos());

  act(() => {
    result.current.addTodo('New Task 1');
    result.current.addTodo('New Task 2');
    result.current.toggleTodo(result.current.todos[0].id);
  });

  expect(result.current.getRemainingTodosCount()).toBe(1);
});
