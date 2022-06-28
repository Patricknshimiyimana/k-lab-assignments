import { React, useEffect, useState } from 'react';
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts"

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
       let response = await axios.get(`${baseURL}?_limit=5`);
       setPosts(response.data);
    };
    fetchPosts();
 }, []);

  return (
    <div className="app">
    <nav>
      <h1>BLOG</h1>
    </nav>
    <div className="posts-container">
      <h2>posts</h2>

      {posts.map((post) => {
       return (
          <div className="post-card" key={post.id}>
             <h2 className="post-title">{post.title}</h2>
             <p className="post-body">{post.body}</p>
          </div>
       );
    })}

    </div>
  </div>
  );
}

export default App;
