import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { TodoList } from './components/TodoList';
import { useEffect, useState } from 'react';

const LOCAL_STORAGE_KEY = 'TODOS';

export default function AppDeprecated() {
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
        <TodoList todos={todos} addTodo={addTodo} toggleTodo={toggleTodo} />
      </main>
      <Sidebar />
    </div>
  );
}
