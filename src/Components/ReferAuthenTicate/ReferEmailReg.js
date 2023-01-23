import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { BsFileEarmarkCode } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut, registerUser } from "../../app/slice/authSlice";

const ReferEmailReg = ({ referId }) => {
  const user = useSelector((state) => state.user.user);
  const [agree, setAgree] = useState(false);
  console.log(user);
  const navigate = useNavigate();
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const disPatch = useDispatch();

  const onSubmit = async ({ name, email, password, whatsApp, invitedCode }) => {
    disPatch(logOut())
    const id = Math.floor(Math.random() * 1000000000);
    const body = { name, email, password, whatsApp, invitedCode, userId: id , referId };
    console.log(body)
    disPatch(registerUser(body));
  };
  if (user?.success) {
    navigate("/");
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" h-14 relative mt-2">
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

        <div className="mt-4 h-14 relative">
          <input
            {...register("email", {
              required: {
                value: true,
                message: "Email is Required",
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "Provide a valid Email",
              },
            })}
            className="  w-full outline-none h-12 text-lg px-16 shadow-sm rounded-lg"
            type="email"
            name="email"
            id=""
            placeholder="Enter Email"
          />
          <label>
            {errors.email?.type === "required" && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </label>
          <span className="text-2xl absolute top-2 left-4 text-gray-500">
            <RiLockPasswordLine />
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
            placeholder="Login Password"
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
            name="whatsApp"
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
          // onClick={() => navigate("/")}
          disabled={!agree}
          className={`${
            agree == false ? " bg-[#fdba74]" : "bg-[#c7984a]"
          } w-full outline-none h-12   font-medium   mt-5 text-lg px-16 shadow-sm rounded-lg`}
          type="submit"
          value="Register"
        />
        <p className="">{user?.message}</p>
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
            <input
              onClick={() => setAgree(!agree)}
              type="checkbox"
              name=""
              id=""
            />
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

export default ReferEmailReg;
