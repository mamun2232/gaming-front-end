import React from "react";
import { CgSmartphone } from "react-icons/cg";

const Gift = () => {
  return (
    <div className="bg-base-200 h-screen">
      <div className=" h-12  w-full bg-white flex justify-center items-center">
        <p className="text-lg font-medium">Gift</p>
      </div>

      <div className=" mt-8 px-4">
        <div className=" h-12 relative mt-2">
          <input
            className="  w-full outline-none h-12 text-lg px-16 shadow-sm rounded-2xl"
            type="text"
            name="Mobile Number"
            id=""
            placeholder="please input code"
          />
          <span className="text-2xl absolute top-2 left-4 text-gray-500">
            <CgSmartphone />
          </span>
        </div>

        <input
          className="  w-full outline-none h-12   bg-[#c7984a] mt-5 text-lg px-16 shadow-sm rounded-lg"
          type="submit"
          value="Submit"
        />
      </div>
    </div>
  );
};

export default Gift;
