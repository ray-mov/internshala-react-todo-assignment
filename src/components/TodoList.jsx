import TodoItem from "./TodoItem";

function TodoList({ todo, setTodo }) {
  const handleDelete = (id) => {
    const newTodo = todo.filter((todoItem) => todoItem.id !== id);
    setTodo(newTodo);
  };

  const handleIsDone = (id) => {
    let currentTodo = todo.find((todo) => todo.id === id);

    //for toggling
    const isDone = currentTodo.isDone;

    const newTodo = todo.filter((todoItem) => todoItem.id !== id);
    setTodo([...newTodo, { ...currentTodo, isDone: !isDone }]);
  };

  const handleEditTodo = (id, title) => {
    let currentTodo = todo.find((todo) => todo.id === id);

    const newTodo = todo.filter((todoItem) => todoItem.id !== id);
    setTodo([...newTodo, { ...currentTodo, title }]);
  };

  return (
    <div className="max-w-[90%] mx-auto mt-10">
      <ul className="flex  gap-6 flex-wrap">
        {todo.map((todo) => {
          return (
            <li key={todo.id}>
              <TodoItem
                todo={todo}
                handleDelete={handleDelete}
                handleIsDone={handleIsDone}
                handleEditTodo={handleEditTodo}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
