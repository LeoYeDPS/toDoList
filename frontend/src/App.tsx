import { useState } from "react";
import "./App.css";
import FetchHelloWorld from "./components/FetchHelloWorld";
import TodoList from "./components/TodoList";
import Header from "./components/Header";

import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';


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
      <div>
        <h1>Testing App</h1>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
