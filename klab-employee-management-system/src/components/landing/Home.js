import React, { useState, useRef, useEffect } from 'react'
import Nav from './Nav';

function Home() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='image-background'>
         <Nav />
         <div className="small-container">
             <h1>Welcome!..</h1>
             <h1>Klab employee Management system</h1>
             <h2>Please Login first.</h2>
         </div>
        </div>
    );
}

export default Home;