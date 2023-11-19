import { todos } from './todos.signal.ts';

export function useTodoModel() {
  function addTodo(name) {
    todos.value = [...todos.value, { id: crypto.randomUUID(), name, completed: false }];
  }

  function toggleTodo(id, completed) {
    todos.value = todos.value.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed };
      }
      return todo;
    });
  }

  return { todos, addTodo, toggleTodo };
}
