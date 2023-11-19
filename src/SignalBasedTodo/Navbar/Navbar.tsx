import { NavbarMenu } from './NavbarMenu.tsx';
import { computed } from '@preact/signals-react';
import { todos } from '../TodoModule/todos.signal.ts';

export function Navbar() {
  const completedTodosCount = 0; // todos.value.filter((todo) => todo.completed).length; if uncommented, this will cause a rerender on every todo change

  const computedTodosCount = computed(() => todos.value.filter((todo) => todo.completed).length);

  console.log('Render Navbar');
  return (
    <nav className="nav">
      <div>
        Completed: {computedTodosCount} | {completedTodosCount}
      </div>
      <NavbarMenu />
    </nav>
  );
}
