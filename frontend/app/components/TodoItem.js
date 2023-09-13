import "../globals.css";
import React, { useState } from "react";
import Link from "next/link";
import TodoService from "../services/todo_service";

function TodoItem({ todo, updateTodos }) {
  const [status, setStatus] = useState(todo.status);
  const handleCheck = () => {
    TodoService.updateTodo(todo.id, { status: "done" });
    setStatus("done");
    updateTodos();
  };

  return (
    <div className="todo-item-container">
      <Link className={status === "done" ? "todo-item-link-done": "todo-item-link"} href={`/todos/${todo.id}`}>
        <span>{todo.title}</span>
      </Link>
      <input
        className="todo-item-checkbox"
        type="checkbox"
        checked={status === "done"}
        onChange={handleCheck}
      />
    </div>
  );
}

export default TodoItem;
