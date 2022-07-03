// import { Link } from "react-router-dom";
import Logo from "../../images/klab-logo.png";

const Nav = () => {
    return (
        <div className="nav-bar">
            <img src={Logo} alt="Klab logo" width="100" height="40" />
            {/* <Link to={'/login'}><button>login</button></Link> */}
        </div>
    )
}

export default Nav;