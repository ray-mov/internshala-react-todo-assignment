import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

function TodoItem({ todo, handleDelete, handleIsDone, handleEditTodo }) {
  const [editTodo, setEditTodo] = useState(todo.title);
  const [isEditEnable, setEditEnable] = useState(false);

  const maxLength = 25;

  const handleEdit = (e) => {
    e.preventDefault();
    if (editTodo.trim() === "") {
      alert("Title is required!");
      return;
    }
    handleEditTodo(todo.id, editTodo);
    setEditEnable((prev) => !prev);
  };

  return (
    <>
      <div className="flex  flex-col gap-6 py-2 px-4 text-black bg-amber-200 rounded-xl w-60 font-mono">
        <div>
          <div className="flex justify-between">
            <p className="text-gray-600 font-semibold">Todo</p>
            {todo.isDone ? (
              <p className="bg-lime-500 text-gray-100 rounded-3xl px-2 shadow-xl shadow-lime-300">
                Done
              </p>
            ) : (
              <p className="bg-orange-400 text-gray-100  rounded-3xl px-2 shadow-xl shadow-orange-300">
                Pending
              </p>
            )}
          </div>
          <h1 className={`${isEditEnable ? "hidden" : " block"}  break-words`}>
            {todo.title}
          </h1>
          {isEditEnable ? (
            <form
              className="bg-amber-50 p-2 flex flex-col gap-6 mt-4"
              onSubmit={handleEdit}
            >
              <textarea
                value={editTodo}
                className="bg-transparent outline-none break-words hide-scroll"
                maxLength={maxLength}
                onChange={(e) => setEditTodo(e.target.value)}
                required
              />
              <div className="text-right text-gray-500">
                {editTodo.length}/{maxLength}
              </div>
              <button
                type="submit"
                className="bg-orange-500 px-2 rounded-xl border shadow-sm shadow-orange-600 text-gray-200 hover:scale-105  w-14 self-end 
            "
              >
                Done
              </button>
            </form>
          ) : null}
        </div>

        <div className="flex justify-between">
          <FaRegEdit
            size={24}
            className="cursor-pointer"
            onClick={() => setEditEnable((prev) => !prev)}
          />
          <MdDeleteOutline
            size={24}
            onClick={() => {
              handleDelete(todo.id);
            }}
            className="cursor-pointer"
          />
          <div
            className="border-2  border-black w-6 h-6 text-center cursor-pointer"
            onClick={() => handleIsDone(todo.id)}
          >
            {todo.isDone && <span className="font-bold">✓</span>}
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
