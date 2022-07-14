import React, { useState, useRef, useEffect } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";


function EmployeePage() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEditing, setEditing] = useState(false);

  return (
    <div className="small-container">
      <TodoList
        todos={todos}
        setTodos={setTodos}
        isEditing={isEditing}
        setEditing={setEditing}
      />
    </div>
  );
}

export default EmployeePage;
