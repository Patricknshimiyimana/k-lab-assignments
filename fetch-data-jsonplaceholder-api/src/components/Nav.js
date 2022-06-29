import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
        <ul>
          <h1>BLOG</h1>
          <li>
            <Link to="/">Posts</Link>
          </li>
          <li>
            <Link to="/new-post">New Posts</Link>
          </li>
        </ul>
      </nav>
    )
}

export default Nav;