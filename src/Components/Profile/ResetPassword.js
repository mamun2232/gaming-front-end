import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { CgSmartphone } from 'react-icons/cg';

const ResetPassword = () => {
      return (
            <div className="bg-base-200 h-screen">
      <div className=" h-12  w-full bg-white flex justify-center items-center">
        <p className="text-lg font-medium">Reset Password</p>
      </div>

      <div className=" mt-8 px-4">
      <div className=" h-12 relative mt-2">
                <input
                  className="  w-full outline-none h-12 text-lg px-16 shadow-sm rounded-2xl"
                  type="email"
                  name="Mobile Number"
                  id=""
                  placeholder="Email"
                />
                <span className="text-2xl absolute top-2 left-4  text-gray-500">
                <AiOutlineMail />
              </span>
              </div>

            <div className=" h-12 relative mt-5">
              <input
                className="  w-full outline-none h-12 text-lg px-16 shadow-sm rounded-2xl"
                type="password"
                name="Mobile Number"
                id=""
                placeholder="Enter You New Password"
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

export default ResetPassword;