import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <form onSubmit={handleAdd} className="flex justify-center">
      <div className="flex justify-between w-72 border border-blue-200 rounded-full lg:w-96">
        <input
          className="w-52 focus:outline-none mx-3"
          type="input"
          placeholder="Enter a new task"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          className="px-4 py-1 text-ms text-white font-semibold rounded-full bg-blue-600
        hover:bg-blue-800"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default InputField;
