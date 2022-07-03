import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

function Home() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='image-background'>
         <Nav />
         <div className="small-container home-page">
             <h1>Welcome!..</h1>
             <h1>Klab employee Management system</h1>
             <h2>Please Login first.</h2>
             <Link to={'/login'}><button>login</button></Link>

         </div>
        </div>
    );
}

export default Home;