import { Navbar } from './Navbar.tsx';
import { Sidebar } from './Sidebar.tsx';
import { TodoList } from './TodoList.tsx';
import { useEffect, useState } from 'react';

const LOCAL_STORAGE_KEY = 'TODOS';

export default function StateBasedTodo() {
  console.log('Render App');

  const [todos, setTodos] = useState(() => {
    const value = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (value == null) return [];
    return JSON.parse(value);
  });

  function addTodo(name) {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: crypto.randomUUID(), name: name, completed: false }];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="wrapper">
      <Navbar todos={todos} />
      <main>
        <h1>StateBasedTodo</h1>
        <TodoList todos={todos} addTodo={addTodo} toggleTodo={toggleTodo} />
      </main>
      <Sidebar />
    </div>
  );
}
