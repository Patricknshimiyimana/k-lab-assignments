import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteToDo, editTodo } from "../../features/Reducers/todoSlider";
import AddTodo from "./AddTodo";

const TodoList = ({ isEditing, setEditing }) => {
  const { todoList } = useSelector((state) => state.toDo);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    id: "",
    content: "",
    contentError: null,
  });

  const onEditToggle = (id, content) => {
    setEditing(true);
    setState({ ...state, id, content });
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      [`${e.target.name}Error`]: null,
    });
  };
  const { content, contentError, id } = state;
  const edit = () => {
    if (content === "") {
      setState({ ...state, contentError: "You must write something!" });
      return;
    }
    dispatch(editTodo({ content, id }));
    setEditing(false);
  };

  return (
    <div className="contain-table">
      {isEditing ? (
        <div className="form">
          <h2>Update your todos</h2>
          <input
            type="text"
            value={content}
            name="content"
            onChange={handleChange}
          ></input>
          <button type="button" className="button" onClick={edit}>
            Update
          </button>
          {contentError ? <div className="error">{contentError}</div> : null}
        </div>
      ) : (
        <div>
        <AddTodo />
        <table className="striped-table">
          <thead>
            <tr>
              <th>ID.</th>
              <th>Task.</th>
              <th colSpan={2} className="text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {todoList.length > 0 ? (
              todoList.map((todo, i) => (
                <tr key={todo.id}>
                  <td>{i + 1}</td>
                  <td>{todo.content}</td>
                  {/* <td className="text-right"></td> */}
                  <td className="text-left">
                    <button
                      onClick={() => onEditToggle(todo.id, todo.content)}
                      className="button muted-button"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => dispatch(deleteToDo({ id: todo.id }))}
                      className="button muted-button"
                    >
                      Delete
                    </button>
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
      )}
    </div>
  );
};

export default TodoList;
