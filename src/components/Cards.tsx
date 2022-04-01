import React from "react";
import { useState } from "react";
import { Todo } from "./Types";
import { AiOutlineEdit, AiOutlineDelete, AiOutlineCheck } from "react-icons/ai";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Cards: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<Boolean>(false);

  const [editTodo, setEditTodo] = useState<string>(todo.todo);

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

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  return (
    <form
      onSubmit={(e) => handleEdit(e, todo.id)}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "100px",
      }}
    >
      {edit ? (
        <input value={editTodo} onChange={(e) => setEditTodo(e.target.value)} />
      ) : todo.isDone ? (
        <h2 style={{ textDecorationLine: "line-through" }}>{todo.todo}</h2>
      ) : (
        <h2>{todo.todo}</h2>
      )}
      <div style={{ display: "flex", cursor: "pointer" }}>
        <span
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiOutlineEdit />
        </span>
        <span onClick={() => handleDelete(todo.id)}>
          <AiOutlineDelete />
        </span>
        <span onClick={() => handleDone(todo.id)}>
          <AiOutlineCheck />
        </span>
      </div>
    </form>
  );
};

export default Cards;
