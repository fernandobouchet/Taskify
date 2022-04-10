import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todo } from "./components/Types";
import { LoadTodos, SaveTodos } from "./components/Functions";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");

  const [todos, setTodos] = useState<Todo[]>(LoadTodos());

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  useEffect(() => {
    SaveTodos(todos);
  }, [todos]);

  return (
    <div className="App">
      <Header />
      <InputField
        todo={todo}
        setTodo={setTodo}
        handleAdd={(e) => handleAdd(e)}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
