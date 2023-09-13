import "../globals.css";
import React, { useState } from "react";
import TodoService from "../services/todo_service";

function NewTodo({ closeModal }) {
  const [newTodo, setNewTodo] = useState({
    title: "",
    description: "",
    status: "active",
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTodo({ ...newTodo, [name]: value });
  };

  const handleAddTodo = () => {
    if (!newTodo.title) {
      setError("Title is required.");
      return;
    }

    TodoService.createTodo(newTodo);
    setNewTodo({ title: "", description: "" });
    closeModal();
    setError("");
  };

  return (
    <div>
      <h2 className="todos-app-tittles">Create New Todo</h2>
      <form>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            className="todo-item-container"
            type="text"
            id="title"
            name="title"
            value={newTodo.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            className="todo-item-container"
            id="description"
            name="description"
            value={newTodo.description}
            onChange={handleInputChange}
          />
        </div>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button className="todo-button" onClick={handleAddTodo}>
        Add Todo
      </button>
      <button className="todo-button" onClick={closeModal}>
        Cancel
      </button>
    </div>
  );
}

export default NewTodo;
