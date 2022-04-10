import { Todo } from "./Types";

const SaveTodos = (todos: Todo[]) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const LoadTodos = () => {
  let parsedList = localStorage.getItem("todos");
  if (parsedList !== null) {
    let result = JSON.parse(parsedList);
    return result;
  } else return [];
};

export { SaveTodos, LoadTodos };
