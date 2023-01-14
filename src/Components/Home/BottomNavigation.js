import React, { useEffect, useState } from "react";
import { TfiGame } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";
import { RxDashboard } from "react-icons/rx";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useAdmin from "../Authentication/useAdmin";
const BottomNavigation = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const [chackUser, setCheckUser] = useState({});

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("gamingUser"));

    fetch(`http://localhost:5000/api/v1/user/user/${userInfo?._id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCheckUser(data.user);
        }
      });
  }, []);

  const [admin] = useAdmin(chackUser);

  return (
    <div className="btm-nav bg-white border shadow-lg  h-18">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-[#ff4019] " : "")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        <span className="btm-nav-label">Home</span>
      </NavLink>
      {/* <button className="activ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="btm-nav-label">Warnings</span>
      </button> */}
      {user !== null && (
        <NavLink
          to="/win"
          className={({ isActive }) => (isActive ? "text-[#ff4019] " : "")}
        >
          <span className="text-xl">
            <TfiGame />
          </span>
          <span className="btm-nav-label">Win</span>
        </NavLink>
      )}
      <NavLink
        to="/myProfile"
        className={({ isActive }) => (isActive ? "text-[#ff4019] " : "")}
      >
        <span className="text-xl">
          <CgProfile />
        </span>
        <span className="btm-nav-label">My profile</span>
      </NavLink>
      {admin && (
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "text-[#ff4019] " : "")}
        >
          <span className="text-xl">
            <RxDashboard />
          </span>
          <span className="btm-nav-label">Dashboard</span>
        </NavLink>
      )}
    </div>
  );
};

export default BottomNavigation;
