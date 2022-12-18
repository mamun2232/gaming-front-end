import React from "react";
import { CgSmartphone } from "react-icons/cg";
import { FcCellPhone } from "react-icons/fc";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
const PhoneLogin = () => {
  const navigate = useNavigate()
  return (
    <div>
      <form>
        <div className=" h-12 relative mt-2">
          <input
            className="  w-full outline-none h-12 text-lg px-16 shadow-sm rounded-sm"
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
            className="  w-full outline-none h-12 text-lg px-16 shadow-sm rounded-sm"
            type="password"
            name=""
            id=""
            placeholder="Enter password"
          />
          <span className="text-2xl absolute top-2 left-4 text-gray-500">
          <RiLockPasswordLine />
        </span>
        </div>
        

        <div>
          <div className="form-control mt-4">
            <p className=" flex items-center gap-5">
              <input type="checkbox" className="checkbox checkbox-white" />
              <span className="text-sm text-gray-800">Remember me</span>
            </p>
          </div>
        </div>

        <input
          onClick={()=>navigate("/")}
          className="  w-full outline-none h-12   bg-[#c7984a] mt-5 text-lg px-16 shadow-sm rounded-lg"
          type="submit"
          value="Login"
        />
      </form>

      <div className=" flex justify-between mt-4">
        <button onClick={()=>navigate("/register")} className=" bg-white px-6 border-[#c7984a] rounded-lg border py-2">
          Register
        </button>
        <button className=" bg-white px-6 border-[#c7984a] rounded-lg border py-2">
          Forget Password?
        </button>
      </div>
    </div>
  );
};

export default PhoneLogin;
