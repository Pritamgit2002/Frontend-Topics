import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";

// Define TypeScript types for API data
interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export const ApiTodo: React.FC = () => {
  const [todoData, setTodoData] = useState<Todo[]>([]);
  const [com, setCom] = useState<number[]>([]);
  const [search, setSearch] = useState("");
  const [filteredTodoData, setFilteredTodoData] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/todos");
        const data = await res.json();
        setTodoData(data.todos);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleClick = (id: number) => {
    if (!com.includes(id)) {
      setCom((prev) => [...prev, id]);
    }
  };

  const handleChange = (value: string) => {
    setSearch(value);
    setTimeout(() => {
      setFilteredTodoData(
        todoData.filter((item, i) =>
          item.todo.toLowerCase().includes(value.toLowerCase())
        )
      );
    }, 200);
  };

  return (
    <div className=" w-max mx-auto p-2 bg-white shadow-lg rounded-md ">
      <h1 className="text-3xl font-bold text-center text-blue-600">
        Todo List
      </h1>

      <div className="flex items-start justify-normal gap-6 w-10/12 mx-auto">
        {/* Todo List Section */}
        <div className="w-96 mx-auto  mt-6 h-[500px] overflow-auto flex flex-col items-center justify-start gap-4 bg-white shadow-lg rounded-lg p-4">
          <Input
            type="text"
            placeholder="Search..."
            className=" w-64 h-8 rounded-md border-gray-300 p-2 text-center text-xl font-semibold"
            onChange={(e) => handleChange(e.target.value)}
          />
          {filteredTodoData.length > 0 ? (
            filteredTodoData.map(
              (item) =>
                !com.includes(item.id) && (
                  <div
                    key={item.id}
                    className="flex justify-between items-center p-3 bg-gray-50 border rounded-md"
                  >
                    <li
                      className={`text-gray-800 ${
                        search && search.includes(item.todo)
                          ? "text-yellow-300"
                          : ""
                      }`}
                    >
                      {item.todo}
                    </li>
                    <button
                      onClick={() => handleClick(item.id)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                    >
                      Complete
                    </button>
                  </div>
                )
            )
          ) : (
            <p className="text-gray-500">No tasks found...</p>
          )}
        </div>
        <div className=" bg-lime-600 mx-auto w-96 mt-6 h-[500px] overflow-auto shadow-lg rounded-lg p-4 ">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            All Tasks
          </h2>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Tasks</h2>
          <ul className="space-y-2">
            {todoData.length > 0 ? (
              todoData.map(
                (item) =>
                  !com.includes(item.id) && (
                    <div
                      key={item.id}
                      className="flex justify-between items-center p-3 bg-gray-50 border rounded-md"
                    >
                      <li className="text-gray-800">{item.todo}</li>
                      <button
                        onClick={() => handleClick(item.id)}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                      >
                        Complete
                      </button>
                    </div>
                  )
              )
            ) : (
              <p className="text-gray-500">Loading...</p>
            )}
          </ul>
        </div>

        {/* Completed Tasks Section */}
        <div className="max-w-2xl mx-auto w-80 mt-8 h-[500px] overflow-auto bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Completed Tasks
          </h2>
          <ul className="space-y-2">
            {com.length > 0 ? (
              com.map((id) => {
                const completedItem = todoData.find((item) => item.id === id);
                return completedItem ? (
                  <div key={id} className="p-3 bg-green-50 border rounded-md">
                    <li className="text-green-700">{completedItem.todo}</li>
                  </div>
                ) : null;
              })
            ) : (
              <p className="text-gray-500">No completed tasks...</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
