import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Authentication/Login";
import Reg from "./Components/Authentication/Reg";
import Win from "./Components/WinGame/Win";
import MyProfile from "./Components/Profile/MyProfile";
import Withdrow from "./Components/Profile/Withdrow";
import Recharge from "./Components/Profile/Recharge";
import Gift from "./Components/Profile/Gift";
import ResetPassword from "./Components/Profile/ResetPassword";
import { ToastContainer } from "react-toastify";
import RequreAuth from "./Components/Authentication/RequreAuth";
import Dashboard from "./Components/Dashboard/Dashboard";
import Game from "./Components/Dashboard/Game";
import GamerDetails from "./Components/Dashboard/GamerDetails";
import AdminWithdrow from "./Components/Dashboard/Withdrow/Withdrow";
import Recode from "./Components/Home/Recode";
import { QueryClient, QueryClientProvider } from "react-query";
import Reachrge from "./Components/Dashboard/Recharge/Reachrge";
import Result from "./Components/Dashboard/Result/Result";
import User from "./Components/Dashboard/User/User";
import RequreAdmin from "./Components/Authentication/RequreAdmin";
import Contect from "./Components/Profile/Contect";
import ContectD from "./Components/Dashboard/Contect/Contect";
import ReferSingUp from "./Components/ReferAuthenTicate/ReferSingUp";
const queryClient = new QueryClient();
function App() {
  return (
    <div className="w-[100vw] h-[100vh]">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recorde" element={<Recode />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Reg />} />
          <Route
            path="/win"
            element={
              <RequreAuth>
                <Win />
              </RequreAuth>
            }
          />
          <Route
            path="/myProfile"
            element={
              <RequreAuth>
                <MyProfile />
              </RequreAuth>
            }
          />
          <Route
            path="/dashboard"
            element={
              <RequreAuth>
                {" "}
                <RequreAdmin>
                  <Dashboard></Dashboard>
                </RequreAdmin>
              </RequreAuth>
            }
          >
            <Route
              index
              element={
                <RequreAuth>
                  <RequreAdmin>
                    <Game />
                  </RequreAdmin>
                </RequreAuth>
              }
            ></Route>
            <Route
              path="/dashboard/gamerDetails/:id"
              element={
                <RequreAuth>
                  <RequreAdmin>
                    <GamerDetails />
                  </RequreAdmin>
                </RequreAuth>
              }
            ></Route>
            <Route
              path="/dashboard/withdrow"
              element={
                <RequreAuth>
                  <RequreAdmin>
                    <AdminWithdrow />
                  </RequreAdmin>
                </RequreAuth>
              }
            ></Route>
            <Route
              path="/dashboard/reachrge"
              element={
                <RequreAuth>
                  <RequreAdmin>
                    <Reachrge />
                  </RequreAdmin>
                </RequreAuth>
              }
            ></Route>
            <Route
              path="/dashboard/allResult"
              element={
                <RequreAuth>
                  <RequreAdmin>
                    <Result />
                  </RequreAdmin>
                </RequreAuth>
              }
            ></Route>
            <Route
              path="/dashboard/user"
              element={
                <RequreAuth>
                  <RequreAdmin>
                    <User />
                  </RequreAdmin>
                </RequreAuth>
              }
            ></Route>
            <Route
              path="/dashboard/contect"
              element={
                <RequreAuth>
                  <RequreAdmin>
                    <ContectD />
                  </RequreAdmin>
                </RequreAuth>
              }
            ></Route>
          </Route>
          <Route path="/withdrow" element={<Withdrow />} />
          <Route path="/contect&help" element={<Contect />} />
          <Route path="/recharge" element={<Recharge />} />
          <Route path="/gift" element={<Gift />} />
          <Route path="/restPassword" element={<ResetPassword />} />
          <Route path="/referGame/123/:referId" element={<ReferSingUp />} />
        </Routes>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          limit={1}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
      </QueryClientProvider>
    </div>
  );
}

export default App;
