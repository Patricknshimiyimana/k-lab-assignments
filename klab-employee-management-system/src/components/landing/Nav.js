import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <Link to={'/login'}><button>login</button></Link>
            <Link to={'/dashboard'}>Dashboard</Link>
        </div>
    )
}

export default Nav;