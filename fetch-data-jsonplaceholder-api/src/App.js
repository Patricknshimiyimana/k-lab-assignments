import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewPost from "./components/NewPost";
import Posts from "./components/Posts";
import Nav from "./components/Nav";

function App() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [body, setBody] = useState("");

  return (
    <div className="app">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route
            path="new-post"
            element={
              <NewPost
                title={title}
                body={body}
                setPosts={setPosts}
                setTitle={setTitle}
                setBody={setBody}
                posts={posts}
              />
            }
          />

          <Route
            path="/"
            index
            element={
              <Posts
                posts={posts}
                setPosts={setPosts}
                setTitle={setTitle}
                setBody={setBody}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
