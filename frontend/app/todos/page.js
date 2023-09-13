"use client";

import "./styles.css";
import React, { useState, useEffect, useReducer } from "react";
import TodoItem from "../components/TodoItem";
import TodoService from "../services/todo_service";

Modal.setAppElement("body");

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    TodoService.getTodos().then(setTodos);
  }, []);



  const handleUpdateTodos = () => {
    forceUpdate();
  };

  return (
    <div className="todos-container-card">
      <h1 className="todos-app-tittles">Todo List</h1>
      
      <div className="todos-list-container">
        {todos
          .filter((todo) => todo.status === "active")
          .sort((a, b) => b.id - a.id)
          .map((todo) => (
            <TodoItem
              todo={todo}
              updateTodos={handleUpdateTodos}
              key={todo.id}
            />
          ))}

        {todos
          .filter((todo) => todo.status === "done")
          .sort((a, b) => b.id - a.id)
          .map((todo) => (
            <TodoItem
              todo={todo}
              updateTodos={handleUpdateTodos}
              key={todo.id}
            />
          ))}
      </div>
    </div>
  );
}

export default TodoList;
