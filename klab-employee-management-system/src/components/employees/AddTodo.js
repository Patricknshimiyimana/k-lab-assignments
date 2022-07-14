import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../../features/Reducers/todoSlider";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    content: "",
    contentError: null,
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      [`${e.target.name}Error`]: null,
    });
  };
  const add = (e) => {
    e.preventDefault();
    if (content === "") {
      setState({ ...state, contentError: "You must write something!" });
      return;
    }
    dispatch(addToDo({ newContent: content }));
    setState({ ...state, content: "" });
  };
  const { content, contentError } = state;

  return (
    <form onSubmit={add}>
      <h1>Add Todo</h1>
      <label htmlFor="firstName">Title</label>
      <input
        id="firstName"
        type="text"
        name="content"
        value={content}
        onChange={handleChange}
      />
      <div style={{ marginTop: "30px" }}>
        <input type="submit" value="Add" />
      </div>
      {contentError ? <div className="error">{contentError}</div> : null}
    </form>
  );
};

export default AddTodo;
