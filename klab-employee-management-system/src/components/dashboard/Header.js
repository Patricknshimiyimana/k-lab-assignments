import React from 'react';
import { Link } from 'react-router-dom';

function Header({ setIsAdding }) {
    return (
        <header>
            <h1>Employee Management Software</h1>
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                <button onClick={() => setIsAdding(true)} className='round-button'>Add New Employee</button>
                <Link to={'/'}><button className='round-button'>Logout</button></Link>
            </div>
        </header>
    )
}

export default Header