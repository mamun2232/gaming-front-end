import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineMail } from "react-icons/ai";
import { CgSmartphone } from "react-icons/cg";
import { json } from "react-router-dom";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    fetch("https://gaming-backend.vercel.app/api/v1/user/forgate", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          reset()
          toast.success(data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          toast.warn(data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-base-200 h-screen">
        <div className=" h-12  w-full bg-white flex justify-center items-center">
          <p className="text-lg font-medium">Reset Password</p>
        </div>

        <div className=" mt-8 px-4">
          <div className=" h-12 relative mt-2">
            <input
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is Required",
                },
              })}
              className="  w-full outline-none h-12 text-lg px-16 shadow-sm rounded-2xl"
              type="text"
              name="email"
              id=""
              placeholder="Email"
            />
            <label>
              {errors.email?.type === "required" && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </label>
            <span className="text-2xl absolute top-2 left-4  text-gray-500">
              <AiOutlineMail />
            </span>
          </div>

          <div className=" h-12 relative mt-5">
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
              className="  w-full outline-none h-12 text-lg px-16 shadow-sm rounded-2xl"
              type="password"
              name="password"
              id=""
              placeholder="Enter You New Password"
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
              <CgSmartphone />
            </span>
          </div>

          <input
            className="  w-full outline-none h-12   bg-[#c7984a] mt-5 text-lg px-16 shadow-sm rounded-lg"
            type="submit"
            value="Change Password"
          />
        </div>
      </div>
    </form>
  );
};

export default ResetPassword;
