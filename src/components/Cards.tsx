import React, { useEffect, useRef } from "react";
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

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form
      className="h-auto rounded-[15px] items-center flex justify-between border border-blue-200 bg-blue-100 p-2 m-1 w-72 lg:w-96"
      onSubmit={(e) => handleEdit(e, todo.id)}
    >
      {edit ? (
        <input
          ref={inputRef}
          className="w-52 lg:w-72 bg-inherit"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : todo.isDone ? (
        <p className="text-left" style={{ textDecorationLine: "line-through" }}>
          {todo.todo}
        </p>
      ) : (
        <p className="text-left">{todo.todo}</p>
      )}
      <div className="flex w-14 justify-between cursor-pointer ">
        <span
          className="transition ease-in-out delay-120 hover:scale-125 duration-300"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiOutlineEdit title="Edit" />
        </span>
        <span
          className="transition ease-in-out delay-120 hover:scale-125 duration-300"
          onClick={() => handleDelete(todo.id)}
        >
          <AiOutlineDelete title="Delete" />
        </span>
        <span
          className="transition ease-in-out delay-120 hover:scale-125 duration-300"
          onClick={() => handleDone(todo.id)}
        >
          <AiOutlineCheck title="Done" />
        </span>
      </div>
    </form>
  );
};

export default Cards;
