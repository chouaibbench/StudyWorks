import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./components/todoList";

function App() {
  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary mb-4">📝 Ma TodoList</h2>
      <TodoList />
    </div>
  );
}

export default App;