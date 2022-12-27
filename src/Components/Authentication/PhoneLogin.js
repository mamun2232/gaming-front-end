import React from "react";
import { useForm } from "react-hook-form";
import { CgSmartphone } from "react-icons/cg";
import { FcCellPhone } from "react-icons/fc";
import { RiLockPasswordLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../../app/slice/authSlice";
const PhoneLogin = () => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const disPatch = useDispatch();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async ({ number, password }) => {
    const body = { email: number, password };
    console.log(number);
    disPatch(loginUser(body));
  };

  if (user?.success) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" h-14 relative mt-2">
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

        <div className="mt-4 h-12 relative">
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
            className="  w-full outline-none h-12 text-lg px-16 shadow-sm rounded-sm"
            type="password"
            name="password"
            id=""
            placeholder="Enter password"
          />
          <label>
            {errors.password?.type === "required" && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </label>
          <span className="text-2xl absolute top-2 left-4 text-gray-400">
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
          className="  w-full outline-none h-12   bg-[#c7984a] mt-5 text-lg px-16 shadow-sm rounded-lg"
          type="submit"
          value="Login"
        />
        <p className="">{user?.message}</p>
      </form>

      <div className=" flex justify-between mt-4">
        <button
          onClick={() => navigate("/register")}
          className=" bg-white px-6 border-[#c7984a] rounded-lg border py-2"
        >
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
