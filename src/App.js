import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="w-[100vw] h-[100vh]">

      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      

    </div>
  );
}

export default App;
