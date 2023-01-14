import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const DashboardItem = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content px-8 mt-5">
        {/* <!-- Page content here --> */}
        <Outlet />
      </div>
      <div className="drawer-side  bg-base-200 border h-[80vh]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-64 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "bg-[#ff4019] text-white" : ""
              }
            >
              Game Win
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/withdrow"
              className={({ isActive }) =>
                isActive ? "bg-[#ff4019] text-white" : ""
              }
            >
              Withdrow
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/reachrge"
              className={({ isActive }) =>
                isActive ? "bg-[#ff4019] text-white" : ""
              }
            >
              Reachrge
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/allResult"
              className={({ isActive }) =>
                isActive ? "bg-[#ff4019] text-white" : ""
              }
            >
              Game Results
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/user"
              className={({ isActive }) =>
                isActive ? "bg-[#ff4019] text-white" : ""
              }
            >
              User List
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardItem;
