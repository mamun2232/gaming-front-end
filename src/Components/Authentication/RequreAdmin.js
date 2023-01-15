import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Navigate, useLocation } from "react-router-dom";
import { logOut } from "../../app/slice/authSlice";
// import Loading from "../Utilitis/Loading";
import useAdmin from "./useAdmin";

const RequreAdmin = ({ children }) => {
  const [user, setUser] = useState({});
  // const [admin, adminLoading] = useAdmin(user.email);
  const users = useSelector((state) => state.user.user);
  const location = useLocation();
  const disPatch = useDispatch();
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("gamingUser"));

    fetch(`http://localhost:5000/api/v1/user/user/${userInfo?._id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUser(data.user);
        }
      });
  }, [user]);

  // if(lodaing || adminLoading){
  //       return <Loading></Loading>
  // }

  if (!user.role == "Admin" || users == null) {
    //     disPatch(logOut());
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequreAdmin;
