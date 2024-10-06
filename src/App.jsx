import { useState } from "react";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TodoDone from "./components/TodoDone";
import TodoList from "./components/TodoList";

const initialState = [
  {
    id: 1,
    title: "demo",
    isDone: true,
  },
];

function App() {
  const [todo, setTodo] = useState(initialState);

  const todoDone = todo.filter((todo) => todo.isDone === true).length;

  return (
    <>
      <Header />
      <main className="md:max-w-[50%] lg:max-w-[40%] mx-auto flex flex-col items-center gap-6">
        <TodoDone todoDone={todoDone} todoTotal={todo.length} />
        <AddTodo setTodo={setTodo} />
      </main>
      <TodoList todo={todo} setTodo={setTodo} />
    </>
  );
}

export default App;
