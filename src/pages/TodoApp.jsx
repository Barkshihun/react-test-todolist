import { useRef, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const nextId = useRef(1);

  const onSubmit = (text) => {
    setTodos((todos) =>
      todos.concat({
        id: nextId.current,
        text,
        done: false,
      })
    );
    nextId.current++;
  };

  const onToggle = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
  };

  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <TodoForm onSubmit={onSubmit} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </>
  );
};

export default TodoApp;
