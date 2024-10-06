import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddTodo({ setTodo }) {
  const [title, setTitle] = useState("");
  const MAX_LENGTH = 25;

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (title.trim() === "") {
      alert("Title is required!");
      return;
    }
    setTodo((prev) => [...prev, { title, id: uuidv4(), isDone: false }]);
    setTitle("");
  };

  return (
    <div className="flex flex-wrap gap-6 w-full  text-black bg-amber-50 rounded-3xl p-2">
      <input
        type="text"
        value={title}
        maxLength={MAX_LENGTH}
        className="rounded-3xl py-1 flex-1 px-4 outline-none text-xl bg-transparent"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter TODOs "
        required={true}
      />
      <div className="text-right text-gray-600 my-auto font-semibold text-lg right-0">
        {title.length}/{MAX_LENGTH}
      </div>

      <button
        className="text-black bg-orange-300 rounded-3xl px-4 text-lg font-bold hover:bg-orange-400 hover:scale-105"
        onClick={handleAddTodo}
      >
        Add Todo +
      </button>
    </div>
  );
}

export default AddTodo;
