import React from "react";

const Recharge = () => {
  return (
    <div className="bg-base-200 h-screen">
      <div className=" h-12  w-full bg-white flex justify-center items-center">
        <p className="text-lg font-medium">Recharge</p>
      </div>
      <div className="bg-white h-14  w-full  border-t  flex items-center  ">
        <p className="text-lg  text-gray-500 px-4">
          Balance: <span className="  font-medium text-gray-900">0</span>
        </p>
      </div>
    </div>
  );
};

export default Recharge;
