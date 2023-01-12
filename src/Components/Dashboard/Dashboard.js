import React from "react";
import BottomNavigation from "../Home/BottomNavigation";
import DashboardItem from "./DashboardItem";
import DNavber from "./DNavber";

const Dashboard = () => {
  return (
    <div>
      <DNavber />
       <DashboardItem/>
      <BottomNavigation />
    </div>
  );
};

export default Dashboard;
