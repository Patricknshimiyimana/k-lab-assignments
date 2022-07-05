import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/landing/Home';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/index';
import Register from './components/auth/Register';

function App() {
  const [logoutUser, setLogoutUser] = useState(false);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>} setLogoutUser={setLogoutUser}/>

          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
