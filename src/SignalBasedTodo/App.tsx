import { Navbar } from './Navbar/Navbar.tsx';
import { Sidebar } from './Sidebar.tsx';
import { TodoList } from './TodoModule/TodoList.tsx';

export default function SignalBasedTodo() {
  console.log('Render App');

  return (
    <div className="wrapper">
      <Navbar />
      <main>
        <h1>SignalBasedTodo</h1>
        <TodoList />
      </main>
      <Sidebar />
    </div>
  );
}
