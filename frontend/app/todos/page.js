"use client";

import "./styles.css";
import React, { useState, useEffect, useReducer } from "react";
import Modal from "react-modal";
import TodoItem from "../components/TodoItem";
import NewTodo from "../components/NewTodo";
import TodoService from "../services/todo_service";

Modal.setAppElement("body");

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    TodoService.getTodos().then(setTodos);
  }, []);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleUpdateTodos = () => {
    forceUpdate();
  };

  return (
    <div className="todos-container-card">
      <h1 className="todos-app-tittles">Todo List</h1>

      <button className="todos-important-button" onClick={openModal}>
        Add
      </button>

      <Modal
        className="todos-new-modal"
        overlayClassName="todos-new-modal-overlay"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="New Todo Modal"
      >
        <NewTodo closeModal={closeModal} />
      </Modal>
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
