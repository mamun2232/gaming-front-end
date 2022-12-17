import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Authentication/Login';
import Reg from './Components/Authentication/Reg';

function App() {
  return (
    <div className="w-[100vw] h-[100vh]">

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Reg/>} />
      </Routes>
      

    </div>
  );
}

export default App;
