import { React, useEffect, useState } from "react";
import axios from 'axios';

const baseURL = "https://jsonplaceholder.typicode.com/posts";

const App = () => {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [body, setBody] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      let response = await axios.get(`${baseURL}?_limit=5`);
      setPosts(response.data);
    };

    fetchPosts();
  }, []);

    const deletePost = async (postId) => {
        try {
          await axios.delete(`${baseURL}/${postId}`);
    
          setPosts(
            posts.filter((post) => {
              return post.id !== postId;
            })
          );
        } catch (error) {
          console.log(error);
        }
      };
    
      const updatePost = async (post) => {
        try {
          localStorage.setItem("postId", post.id);
          setTitle(post.title);
          setBody(post.body);
          await axios.put(`${baseURL}/${post.id}`, {
            body: JSON.stringify({
              id: post.id,
              title: post.title,
              body: post.body,
              userId: post.userId,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          });
          setTimeout(() => localStorage.removeItem("postId"), 8000);
        } catch (error) {
          console.log(error);
        }
      };

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
    <div className="app">
      <nav>
        <h2>BLOG</h2>
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
          <button type="submit">{updateBtn()}</button>
        </form>
      </div>

      <div className="posts-container">
        <h2>Blog posts</h2>

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

                <div
                  className="button update-btn"
                  onClick={() => {
                    updatePost(post);
                  }}
                >
                  Update
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
