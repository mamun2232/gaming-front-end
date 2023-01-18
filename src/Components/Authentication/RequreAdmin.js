import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Navigate, useLocation } from "react-router-dom";
import { logOut } from "../../app/slice/authSlice";
import Loading from "../Utilites/Loading";
import useAdmin from "./useAdmin";

const RequreAdmin = ({ children }) => {
  const [user, setUser] = useState({});
  const [admin, adminLoading] = useAdmin(user);
  const users = useSelector((state) => state.user.user);
  const location = useLocation();
  const disPatch = useDispatch();
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("gamingUser"));

    fetch(`https://gaming-backend.vercel.app/api/v1/user/user/${userInfo?._id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUser(data.user);
        }
      });
  }, [user]);

  if (adminLoading) {
    return <Loading></Loading>;
  }

  if (user == null || !admin) {
    //     disPatch(logOut());
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequreAdmin;
