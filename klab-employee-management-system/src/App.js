import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/landing/Home';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/index';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
