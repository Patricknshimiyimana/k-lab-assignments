import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

function EmployeePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodos(title, description);
  };

  const addTodos = async (title, description) => {
    try {
      let response = await axios.post(baseURL, {
        title: title,
        body: description,
      });
      setTodos([response.data, ...todos]);
      setTitle("");
      setDescription("");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (todoId) => {
    try {
      await axios.delete(`${baseURL}/${todoId}`);
      setTodos(
        todos.filter((todo) => {
          return todo.id !== todoId;
        })
      );
      console.log(todos);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="small-container">
      <form onSubmit={handleSubmit}>
        <h1>Add Todo</h1>
        <label htmlFor="firstName">Title</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="lastName">Description</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Add" />
        </div>
      </form>

      <div className="contain-table">
        <table className="striped-table">
          <thead>
            <tr>
              <th>ID.</th>
              <th>Task.</th>
              <th>Description</th>
              {/* <th>Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {todos.length > 0 ? (
              todos.map((todo, i) => (
                <tr key={todo.id}>
                  <td>{i + 1}</td>
                  <td>{todo.title}</td>
                  <td>{todo.body}</td>
                  <td className="text-right"></td>
                  <td className="text-left">
                    {/* <button
                      onClick={(e) => {
                        e.preventDefault();
                        console.log(todo.id)
                        deleteTodo(todo.id);
                      }}
                      className="button muted-button"
                    >
                      Delete
                    </button> */}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7}>No Todos</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeePage;
