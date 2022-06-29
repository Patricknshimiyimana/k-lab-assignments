import { React, useEffect, useState } from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // GET posts form api with axios
  // useEffect hook to get posts when page rendered
  useEffect(() => {
    const fetchPosts = async () => {
      let response = await axios.get(`${baseURL}?_limit=5`);
      setPosts(response.data);
    };

    fetchPosts();
  }, []);

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

  //DELETE post with axios
  const deletePost = async (postId) => {
    try {
      // send delete request to the api
      await axios.delete(`${baseURL}/${postId}`);

      //update the ui by filtering and returning
      // posts without post with that is
      setPosts(
            posts.filter((post) => {
              return post.id !== postId;
            })
          );
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="app">
      <nav>
        <h1>BLOG</h1>
      </nav>
      <div className="add-post-container">
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
          <button type="submit">Add Post</button>
        </form>
      </div>
      <div className="posts-container">
        <h2>posts</h2>

        {posts.map((post) => {
          return (
            <div className="post-card" key={post.id}>
              <h2 className="post-title">{post.title}</h2>
              <p className="post-body">{post.body}</p>

              <div className="buttons">
                <div
                  className="button delete-btn"
                  onClick={() => deletePost(post.id)}
                >
                  Delete
                </div>

                <div className="button update-btn">Update</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
