import { useState } from 'react';
import { useTodoModel } from './useTodoModel.ts';

export function TodoList() {
  console.log('Render TodoList');
  const [newTodoName, setNewTodoName] = useState('');

  const { todos, addTodo, toggleTodo } = useTodoModel();

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
        {todos.value.map((todo) => (
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
