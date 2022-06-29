import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts";


const NewPost = ({ title, body, setTitle, setBody, posts, setPosts }) => {

  const updateBtn = () => {
    let btnAction;
    let update = localStorage.getItem("postId");
    update ? (btnAction = "Update post") : (btnAction = "Add post");

    return btnAction;
  };

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addPosts(title, body);
  };

  // POST with Axios
  const addPosts = async (title, body) => {
    try {
      let response = await axios.post(baseURL, {
        title: title,
        body: body,
      });
      setPosts([response.data, ...posts]);
      setTitle("");
      setBody("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="add-post-container">
        <h2>Create new posts</h2>
      <form onSubmit={handleSubmit}>
        <label for="title">title</label>
        <input
          name="title"
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label for="body">body</label>
        <textarea
          name="body"
          className="form-control"
          id=""
          cols="10"
          rows="8"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button type="submit">{updateBtn()}</button>
      </form>
    </div>
  );
};

export default NewPost;
