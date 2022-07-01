import { useState } from "react";
import { fruits } from "./fruits";
import "./app.css";

function App() {
  const [query, setQuery] = useState("");
  return (
    <div className="app">
      {/* <label for="search" >Search</label> */}
      <input
        name="search"
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value) }
      />
      <ul className="list">
        {fruits.filter((fruit) => {
          return fruit.name.toLowerCase().includes(query)
        }).map((fruit) => {
          return (
            <li className="listItem" key={fruit.id}>
              {fruit.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
