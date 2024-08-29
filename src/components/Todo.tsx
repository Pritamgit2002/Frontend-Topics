import { useState } from "react";

interface Todo {
  id: number;
  text: string;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      const newTask: Todo = {
        id: Date.now(),
        text: newTodo.trim(),
      };
      setTodos([...todos, newTask]);
      setNewTodo(""); // Clear input field
    }
  };

  const handleDeleteTodo = (id: number) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 bg-white rounded shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="flex-grow px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a new task..."
        />
        <button
          onClick={handleAddTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center px-4 py-2 bg-gray-100 rounded"
          >
            <span>{todo.text}</span>
            <button
              onClick={() => handleDeleteTodo(todo.id)}
              className="px-2 py-1 text-sm text-red-600 hover:text-red-800 focus:outline-none"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
