import StateBasedTodo from './StateBasedTodo/App';
import SignalBasedTodo from './SignalBasedTodo/App';

export default function App() {
  return (
    <div className="apps">
      <StateBasedTodo />
      <SignalBasedTodo />
    </div>
  );
}
