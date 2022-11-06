import DelayedToggle from "./pages/DelayedToggle";
import TodoApp from "./pages/TodoApp";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <div className="App">
      <DelayedToggle />
      <UserProfile id={1} />
      <h1>안녕 세상!</h1>
      <TodoApp />
    </div>
  );
}

export default App;
