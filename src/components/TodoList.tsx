import React from "react";
import Cards from "./Cards";
import { Todo } from "./Types";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="flex flex-col items-center mt-4">
      {todos.map((todo) => (
        <Cards todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default TodoList;
