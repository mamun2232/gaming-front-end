import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const DNavber = () => {
  return (
    <div className=" bg-[#051725] ">
      <div className="   ">
        <div className="px-8 flex justify-between items-center h-16 border-b-4 border-[#bf9626]">
          <div className=" flex items-center">
            <a className="text-yellow-500">Admin DashBaord</a>
          </div>
          <div className=" flex items-center gap-3">
            <button className=" bg-yellow-500 text-white px-3 py-1 rounded-lg">
              Mamun Islam
            </button>

            <label
              htmlFor="my-drawer-2"
              className="text-white drawer-button lg:hidden"
            >
              <GiHamburgerMenu />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DNavber;
