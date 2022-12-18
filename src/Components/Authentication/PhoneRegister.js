import React from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";

import { RiLockPasswordLine } from "react-icons/ri";
import { BsFileEarmarkCode } from "react-icons/bs";
import { CgSmartphone} from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const PhoneRegister = () => {
  const navigate = useNavigate();
  return (
    <div>
      <form>
        <div className=" h-12 relative mt-2">
          <input
            className="  w-full outline-none h-12 text-lg px-16 shadow-sm rounded-lg"
            type="number"
            name="Mobile Number"
            id=""
            placeholder="Mobile Number"
          />
          <span className="text-2xl absolute top-2 left-4 text-gray-500">
            <CgSmartphone />
          </span>
        </div>

        <div className="mt-4 h-12 relative">
          <input
            className="  w-full outline-none h-12 text-lg px-16 shadow-sm rounded-lg"
            type="password"
            name=""
            id=""
            placeholder="Login Password"
          />
          <span className="text-2xl absolute top-2 left-4 text-gray-500">
            <RiLockPasswordLine />
          </span>
        </div>

        <div className="mt-4 h-12 relative">
          <input
            className="  w-full outline-none h-12 text-lg px-16 shadow-sm rounded-lg"
            type="password"
            name=""
            id=""
            placeholder="Withdraw Password"
          />
          <span className="text-2xl absolute top-2 left-4 text-gray-500">
            <RiLockPasswordLine />
          </span>
        </div>
        <div className="mt-4 h-12 relative">
          <input
            className="  w-full outline-none h-12 text-lg px-16 shadow-sm rounded-lg"
            type="text"
            name=""
            id=""
            placeholder="whatsapp"
          />
          <span className="text-2xl absolute top-2 left-4 text-gray-500">
            <AiOutlineWhatsApp />
          </span>
        </div>
        <div className="mt-4 h-12 relative">
          <input
            className="  w-full outline-none h-12 text-lg px-16 shadow-sm rounded-lg"
            type="number"
            name=""
            id=""
            placeholder="Invite Code"
          />
          <span className="text-2xl absolute top-2 left-4 text-gray-500">
            <BsFileEarmarkCode />
          </span>
        </div>

        <input
           onClick={()=>navigate("/")}
          className="  w-full outline-none h-12   font-medium  bg-[#c7984a] mt-5 text-lg px-16 shadow-sm rounded-lg"
          type="submit"
          value="Login"
        />
      </form>

      <div className=" flex justify-center mt-4 px-4">
        <div>
          <p>
            Allready have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-[#c7984a] cursor-pointer"
            >
              Login
            </span>
          </p>

          <div className=" mt-2">
            <input type="checkbox" name="" id="" />
            <span className="px-3 ">
              I agree{" "}
              <span className="text-[#c7984a] cursor-pointer uppercase">
                Privacy Policy
              </span>{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneRegister;
