import React, { useState } from "react";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";

import { RiLockPasswordLine } from "react-icons/ri";
import { BsFileEarmarkCode } from "react-icons/bs";
import { CgSmartphone } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../app/slice/authSlice";
const PhoneRegister = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const [agree , setAgree] = useState(false)
  

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues:{
      number:91
    }
  });
  const disPatch = useDispatch();

  const onSubmit = async ({
    name,
    number,
    password,
    whatsApp,
    invitedCode,
  }) => {
    const id = Math.floor(Math.random() * 1000000000);
    const body = {
      name,
      email: number,
      password,
      whatsApp,
      invitedCode,
      userId: id,
    };
    disPatch(registerUser(body));
  };
  if (user?.success) {
    navigate("/");
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" h-14 relative">
          <input
            {...register("name", {
              required: {
                value: true,
                message: "Name is Required",
              },
            })}
            className="  w-full outline-none h-12 text-lg px-16 shadow-sm rounded-lg"
            type="text"
            name="name"
            id=""
            placeholder="Enter Name"
          />
          <label className="">
            {errors.name?.type === "required" && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </label>
          <span className="text-2xl absolute top-2 left-4 text-gray-500">
            <AiOutlineMail />
          </span>
        </div>
        <div className=" h-14 relative mt-4">
          <input
            {...register("number", {
              required: {
                value: true,
                message: "number is Required",
              },
            })}
            className="  w-full outline-none h-12 text-lg px-16 shadow-sm rounded-lg"
            type="number"
            name="number"
            id=""
            placeholder="Mobile Number"
          />
          <label className="">
            {errors.number?.type === "required" && (
              <span className="text-red-500">{errors.number.message}</span>
            )}
          </label>
          <span className="text-2xl absolute top-2 left-4 text-gray-500">
            <CgSmartphone />
          </span>
        </div>

        <div className="mt-4 h-14 relative">
          <input
            {...register("password", {
              required: {
                value: true,
                message: "Password is Required",
              },
              minLength: {
                value: 6,
                message: "Must be 6 characters or longer",
              },
            })}
            className="  w-full outline-none h-12 text-lg px-16 shadow-sm rounded-lg"
            type="password"
            name="password"
            id=""
            placeholder="Password"
          />
          <label>
            {errors.password?.type === "required" && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </label>
          <span className="text-2xl absolute top-2 left-4 text-gray-500">
            <RiLockPasswordLine />
          </span>
        </div>

        <div className="mt-4 h-12 relative">
          <input
            {...register("whatsApp")}
            className="  w-full outline-none h-12 text-lg px-16 shadow-sm rounded-lg"
            type="text"
            name="whatsAp"
            id=""
            placeholder="whatsapp"
          />
          <span className="text-2xl absolute top-2 left-4 text-gray-500">
            <AiOutlineWhatsApp />
          </span>
        </div>
        <div className="mt-4 h-12 relative">
          <input
            {...register("invitedCode")}
            className="  w-full outline-none h-12 text-lg px-16 shadow-sm rounded-lg"
            type="number"
            name="invitedCode"
            id=""
            placeholder="Invite Code"
          />
          <span className="text-2xl absolute top-2 left-4 text-gray-500">
            <BsFileEarmarkCode />
          </span>
        </div>

        <input
         disabled={!agree}
          className={`${agree ==false ? " bg-[#fdba74]": "bg-[#c7984a]"} w-full outline-none h-12   font-medium   mt-5 text-lg px-16 shadow-sm rounded-lg`}
          type="submit"
          value="Register"
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
            <input onClick={()=>setAgree(!agree)} type="checkbox" name="" id="" />
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
