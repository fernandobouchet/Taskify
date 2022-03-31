import React from "react";
import { Todo } from "./Todo";
import { AiOutlineEdit, AiOutlineDelete, AiOutlineCheck } from "react-icons/ai";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Cards: React.FC<Props> = ({ todo, todos, setTodos }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "100px",
      }}
    >
      <h2>{todo.todo}</h2>
      <div style={{ display: "flex", cursor: "pointer" }}>
        <span>
          <AiOutlineEdit />
        </span>
        <span>
          <AiOutlineDelete />
        </span>
        <span>
          <AiOutlineCheck />
        </span>
      </div>
    </div>
  );
};

export default Cards;
