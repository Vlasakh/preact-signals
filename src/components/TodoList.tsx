import { useState } from 'react';

export function TodoList({ todos, addTodo, toggleTodo }) {
  console.log('Render TodoList');
  const [newTodoName, setNewTodoName] = useState('');

  function handleAddTodo(e) {
    e.preventDefault();
    addTodo(newTodoName);
    setNewTodoName('');
  }

  return (
    <>
      <form onSubmit={handleAddTodo} className="form">
        <label>New Task</label>
        <input value={newTodoName} onChange={(e) => setNewTodoName(e.target.value)} type="text" />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.completed} onChange={(e) => toggleTodo(todo.id, e.target.checked)} />
              {todo.name}{' '}
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}
