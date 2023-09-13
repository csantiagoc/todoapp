import "../globals.css";
import React, { useState } from "react";
import Link from "next/link";

function TodoItem({ todo }) {
  const [status, setStatus] = useState(todo.status);
  

  return (
    <div className="todo-item-container">
      <Link className={status === "done" ? "todo-item-link-done": "todo-item-link"} href={`/todos/${todo.id}`}>
        <span>{todo.title}</span>
      </Link>
      <input
        className="todo-item-checkbox"
        type="checkbox"
        checked={status === "done"}
      />
    </div>
  );
}

export default TodoItem;
