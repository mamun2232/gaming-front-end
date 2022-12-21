import React from "react";
import { CgSmartphone } from "react-icons/cg";

const Withdrow = () => {
  return (
    <div className="bg-base-200 h-screen">
      <div className=" h-12  w-full bg-white flex justify-center items-center">
        <p className="text-lg font-medium">Withdrow</p>
      </div>
      <div className="bg-white h-14  w-full  border-t  flex items-center  ">
        <p className="text-lg  text-gray-500 px-4">
          Balance: <span className="  font-medium text-gray-900">0</span>
        </p>
      </div>
      <div className="px-4">
        <div className="bg-white h-20  w-full shadow-md  rounded-lg mt-10 flex items-center">
          <div className=" px-8">
            <p className="text-lg  font-medium text-gray-900">300</p>
            <p className="text-sm text-gray-500  ">
              Amount no Longer withdrow Scrope
            </p>
          </div>
        </div>

        <div className=" mt-10">
          <div className=" flex gap-5">
            <div className=" flex items-center">
              <p className=" font-medium">Choose to Pay:</p>
            </div>
            <div>
              <div className=" h-12 relative mt-2">
                <input
                  className="  w-full outline-none h-12 text-lg px-16 shadow-sm rounded-2xl"
                  type="number"
                  name="Mobile Number"
                  id=""
                  placeholder="Pay"
                />
                <span className="text-2xl absolute top-2 left-4 text-gray-500">
                  <CgSmartphone />
                </span>
              </div>
            </div>
          </div>
          <div className=" flex gap-5 mt-3">
            <div className=" flex items-center">
              <p className=" font-medium">Select Amount:</p>
            </div>
            <div>
              <div className=" h-12 relative mt-2">
                <input
                  className="  w-full outline-none h-12 text-lg px-16 shadow-sm rounded-2xl"
                  type="number"
                  name="Mobile Number"
                  id=""
                  placeholder="Select Amount Example, 300"
                />
                <span className="text-2xl absolute top-2 left-4 text-gray-500">
                  <CgSmartphone />
                </span>
              </div>
            </div>
          </div>

          <div className=" mt-8">
            <p className=" font-medium">Enter Your Login Password</p>

            <div className=" h-12 relative mt-2">
              <input
                className="  w-full outline-none h-12 text-lg px-16 shadow-lg rounded-2xl"
                type="password"
                name="Mobile Number"
                id=""
                placeholder="Enter Login Password"
              />
              <span className="text-2xl absolute top-2 left-4 text-gray-500">
                <CgSmartphone />
              </span>
            </div>

            <input
              className="  w-full outline-none h-12   bg-[#c7984a] mt-5 text-lg px-16 shadow-sm rounded-lg"
              type="submit"
              value="Withdrow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdrow;
