import React, { useState, useRef, useEffect } from 'react'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="small-container">
             <form >
                <h1>Login</h1>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Login" />
                </div>
            </form>
        </div>
    );
}

export default Login;