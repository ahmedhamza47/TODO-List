import "./App.css";
import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import Todolist from "./components/Todolist";
function App() {
  const initalState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initalState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div>
            <div className="header">
              <h1>TODO-LIST</h1>
            </div>
          </div>
          <div>
            <Form
              input={input}
              setInput={setInput}
              todos={todos}
              setTodos={setTodos}
              editTodo={editTodo}
              setEditTodo={setEditTodo}
            />
          </div>
          <div>
            <Todolist
              todos={todos}
              setTodos={setTodos}
              setEditTodo={setEditTodo}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
