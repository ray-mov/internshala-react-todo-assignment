function TodoDone({ todoDone, todoTotal }) {
  return (
    <div className="flex  items-center justify-around glass-bg py-2 px-2 gap-4 w-full">
      <div>
        <h1 className="font-semibold text-3xl">Todo Done</h1>
        <p className="text-xl opacity-80">Keep it up</p>
      </div>
      <div className="h-24 w-24 bg-lime-200 rounded-full text-black flex items-center justify-center">
        <h1 className="text-black text-4xl font-bold">{`${todoDone}/${todoTotal}`}</h1>
      </div>
    </div>
  );
}

export default TodoDone;
