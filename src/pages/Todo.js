import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const Form = ({ setInputText, inputText, todos, setTodos }) => {
    const inputTextHandler = (e) => {
      setInputText(e.target.value);
    };
  
    const submitTodoHandler = (e) => {
      e.preventDefault();
      setTodos([
        ...todos,
        { text: inputText, completed: false, id: Math.random() * 1000 },
      ]);
      setInputText("")
    };
    return (
      <form>
        <input type="text" className="todo-input" onChange={inputTextHandler} value={inputText}/>
        <button className="todo-button" type="submit" onClick={submitTodoHandler}>
          <i className="uil uil-plus"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );
  };

  const TodoList = ({ todos, setTodos }) => {
    return (
      <div className="todo-container">
        <ul className="todo-list">
          {todos.map((todo) => (
            <Todo
              setTodos={setTodos}
              todo={todo}
              todos={todos}
              key={todo.id}
              text={todo.text}
            />
          ))}
        </ul>
      </div>
    );
  };

  const Todo = ({ text, todos, todo, setTodos }) => {
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item
        }))
    }
    return(
        
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button className="complete-btn" onClick={completeHandler}>
                <i className="fas fa-check"></i>
            </button>

            <button className="trash-btn" onClick={deleteHandler}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

  return (
    <div className="App">
      <header>
        <h1>TODO List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
      />
      <TodoList setTodos={setTodos} inputText={inputText} todos={todos} />
    </div>
  );
}

export default App;