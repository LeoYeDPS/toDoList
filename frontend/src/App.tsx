import { useState } from "react";
import "./App.css";
import FetchHelloWorld from "./components/FetchHelloWorld";
import TodoList from "./components/TodoList";

function App() {
  const [count, setCount] = useState(0);
  const sendCountToServer = async () => {
    try {
      const response = await fetch("http://localhost:3001/count", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ count }),
      });
      const data = await response.text();
      console.log(data); // Log response from the server
    } catch (error) {
      console.error("Failed to send count:", error);
    }
  };

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            setCount((count) => count + 1);
            sendCountToServer();
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="TextMessage">
        <FetchHelloWorld />
      </div>
      <div className="App">
        <TodoList />
      </div>
    </>
  );
}

export default App;
