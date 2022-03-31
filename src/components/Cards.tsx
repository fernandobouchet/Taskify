import React from "react";
import { Todo } from "./Todo";
import { AiOutlineEdit, AiOutlineDelete, AiOutlineCheck } from "react-icons/ai";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Cards: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "100px",
      }}
    >
      {todo.isDone ? (
        <h2 style={{ textDecorationLine: "line-through" }}>{todo.todo}</h2>
      ) : (
        <h2>{todo.todo}</h2>
      )}
      <div style={{ display: "flex", cursor: "pointer" }}>
        <span>
          <AiOutlineEdit />
        </span>
        <span onClick={() => handleDelete(todo.id)}>
          <AiOutlineDelete />
        </span>
        <span onClick={() => handleDone(todo.id)}>
          <AiOutlineCheck />
        </span>
      </div>
    </div>
  );
};

export default Cards;
