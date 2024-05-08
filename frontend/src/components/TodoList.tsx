import React, { useState, useEffect } from "react";
import axios from "axios";

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

// Define the structure for the API response that includes the todos array

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Function to fetch todos
    const fetchTodos = async () => {
      try {
        const response = await axios.get<Todo[]>(
          "http://localhost:3001/api/todos"
        );
        // console.log("Complete response:", response);
        // console.log("Complete response:", response.data);
        setTodos(response.data); // Set the todos in state
        setLoading(false); // Set loading to false once the data is loaded
      } catch (err) {
        // console.error(err);
        setError("Failed to fetch todos");
        setLoading(false);
      }
    };

    fetchTodos();
  }, []); // Dependency array left empty to run only once on mount

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!todos) return <div>No Todos Found.</div>;

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.todo} - {todo.completed ? "Done" : "Pending"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
