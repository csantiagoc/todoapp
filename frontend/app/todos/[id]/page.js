"use client";

import "../styles.css";
import React, { useState, useEffect } from "react";
import TodoService from "../../services/todo_service";
import Link from "next/link";

function TodoDetailPage({ params }) {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    TodoService.getTodo(params.id).then(setTodo);
  }, [params.id]);

  if (!todo) {
    return (
      <div>
        <h1>The Todo you are trying to access doesn't exist</h1>
      </div>
    );
  }

  return (
    <div className="todos-container-card">
      <h1 className="todos-app-tittles">{todo.title}</h1>
      <p>Description: {todo.description}</p>
      <p>Status: {todo.status}</p>
      <Link className="todos-important-button" href={`/todos`}>
        Go Back
      </Link>
    </div>
  );
}

export default TodoDetailPage;
