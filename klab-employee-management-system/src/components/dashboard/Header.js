import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header({ setIsAdding }) {

    let Navigate = useNavigate();
    
    const logoutHandler = () => {
        localStorage.removeItem("userData");
        Navigate("/")
    }
    return (
        <header>
            <div style={{"display": "flex", "justifyContent": "space-between"}}>
                <h1>Employee Management Software</h1>
                <Link to={'/'}><button className='round-button' onClick={logoutHandler}>Logout</button></Link>
            </div>
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                <button onClick={() => setIsAdding(true)} className='round-button'>Add Employee</button>
            </div>
        </header>
    )
}

export default Header