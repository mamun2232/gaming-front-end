import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Authentication/Login';
import Reg from './Components/Authentication/Reg';
import Win from './Components/WinGame/Win';
import MyProfile from './Components/Profile/MyProfile';
import Withdrow from './Components/Profile/Withdrow';
import Recharge from './Components/Profile/Recharge';
import Gift from './Components/Profile/Gift';
import ResetPassword from './Components/Profile/ResetPassword';

function App() {
  return (
    <div className="w-[100vw] h-[100vh]">

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Reg/>} />
        <Route path='/win' element={<Win/>} />
        <Route path='/myProfile' element={<MyProfile/>} />
        <Route path='/withdrow' element={<Withdrow/>} />
        <Route path='/recharge' element={<Recharge/>} />
        <Route path='/gift' element={<Gift/>} />
        <Route path='/restPassword' element={<ResetPassword/>} />
      </Routes>
      

    </div>
  );
}

export default App;
