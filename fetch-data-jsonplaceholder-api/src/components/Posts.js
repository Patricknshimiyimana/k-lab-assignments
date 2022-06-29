import { React, useEffect } from 'react'
import axios from 'axios';

const baseURL = "https://jsonplaceholder.typicode.com/posts";

const Posts = ({ setPosts, setBody, posts, setTitle }) => {
   // GET posts form api with axios
  // useEffect hook to get posts when page rendered
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
          await axios.put(`https://jsonplaceholder.typicode.com/posts/1`, {
            body: JSON.stringify({
              id: 1,
              title: post.title,
              body: post.body,
              userId: 1,
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
    return(
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
    )
}

export default Posts;