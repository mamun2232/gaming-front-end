import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { CgSmartphone } from "react-icons/cg";
import { TiDelete } from "react-icons/ti";
import { MdAddPhotoAlternate } from "react-icons/md";
const Recharge = () => {
  const [user, setUser] = useState({});
  const [screenshot, setScreenshot] = useState(undefined);
  const [screenshotErrorMessage, setSMessge] = useState("");
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("gamingUser"));

    fetch(`http://localhost:5000/api/v1/user/user/${userInfo?._id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUser(data.user);
        }
      });
  }, []);

  const ProductPictureHendeler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setScreenshot(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  // let errorMassage;
  const onSubmit = async ({ password, PayId, email, RechargeAmoun }) => {
    if (screenshot == undefined) {
      return setSMessge("Screenshot is Required");
    }
    setSMessge("");
  };
  console.log(screenshot);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-base-200 ">
        <div className=" h-12  w-full bg-white flex justify-center items-center">
          <p className="text-lg font-medium">Recharge</p>
        </div>
        <div className="bg-white h-14  w-full  border-t  flex items-center  ">
          <p className="text-lg  text-gray-500 px-4">
            Balance:{" "}
            <span className="  font-medium text-gray-900">{user?.balance}</span>
          </p>
        </div>
        <div className="px-4">
          <div className="bg-white lg:h-28 h-44 w-full shadow-md  rounded-lg mt-10 flex items-center">
            <div className=" px-8">
              <div className="">
                <p className="text-lg  font-medium text-gray-900 ">
                  $5-1000 Usd
                </p>
                <p className="text-lg  font-medium text-gray-900 ">
                  500-1,00000 Point
                </p>
              </div>
              <p className="text-sm text-gray-500  mt-1">
                (1 usd equale 500 point)
              </p>
            </div>
          </div>

          <div className=" mt-5">
            <div className=" flex gap-5">
              <div className=" flex items-center w-32">
                <p className=" font-medium">Pay Id:</p>
              </div>
              <div>
                <div className=" h-12 relative mt-2">
                  <input
                    {...register("PayId", {
                      required: {
                        value: true,
                        message: "PayId is Required",
                      },
                    })}
                    className="  w-full outline-none h-12 text-lg px-16 shadow-sm rounded-2xl"
                    type="number"
                    name="PayId"
                    id="PayId"
                    placeholder="Pay Id"
                  />
                  <label className="">
                    {errors.PayId?.type === "required" && (
                      <span className="text-red-500">
                        {errors.PayId.message}
                      </span>
                    )}
                  </label>
                  <span className="text-2xl absolute top-2 left-4 text-gray-500">
                    <CgSmartphone />
                  </span>
                </div>
              </div>
            </div>
            <div className=" flex gap-5 mt-3">
              <div className=" flex items-center w-32">
                <p className=" font-medium">Select Amount:</p>
              </div>
              <div>
                <div className=" h-12 relative mt-2">
                  <input
                    {...register("RechargeAmoun", {
                      required: {
                        value: true,
                        message: "RechargeAmoun is Required",
                      },
                    })}
                    className="  w-full outline-none h-12 text-lg px-16 shadow-sm rounded-2xl"
                    type="number"
                    id="RechargeAmoun"
                    name="RechargeAmoun"
                    placeholder="Amount 500 , 1000, 1500 ....50000"
                  />
                  <label className="">
                    {errors.RechargeAmoun?.type === "required" && (
                      <span className="text-red-500">
                        {errors.RechargeAmoun.message}
                      </span>
                    )}
                  </label>
                  <span className="text-2xl absolute top-2 left-4 text-gray-500">
                    <CgSmartphone />
                  </span>
                </div>
              </div>
            </div>
            <div className=" flex gap-5 mt-3">
              <div className=" flex items-center w-32">
                <p className=" font-medium">Email</p>
              </div>
              <div>
                <div className=" h-12 relative mt-2">
                  <input
                    {...register("email", {
                      required: {
                        value: true,
                        message: "email is Required",
                      },
                    })}
                    className="  w-full outline-none h-12 text-lg px-16 shadow-sm rounded-2xl"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email"
                  />
                  <label className="">
                    {errors.email?.type === "required" && (
                      <span className="text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                  <span className="text-2xl absolute top-2 left-4 text-gray-500">
                    <CgSmartphone />
                  </span>
                </div>
              </div>
            </div>
            <div className=" flex gap-5 mt-3">
              <div className=" flex items-center w-32">
                <p className=" font-medium">Transaction ScreenShot</p>
              </div>
              <div>
                <input
                  {...register("images", {
                    required: {
                      value: true,
                      message: "images is Required",
                    },
                  })}
                  onChange={(e) => ProductPictureHendeler(e)}
                  type="file"
                  name="image-uplode"
                  id="product-img"
                  hidden
                  placeholder="Enter seller name"
                  //   class="block w-full px-4 py-2 mt-2 pl-12  bg-white border rounded-md   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <label htmlFor={!screenshot && "product-img"} className=" ">
                  <div>
                    {!screenshot && (
                      <div className="h-44 lg:w-72 w-52 border border-white bg-white rounded-md flex justify-center  items-center">
                        <div className=" ">
                          <span className="text-6xl text-[#EC255A]">
                            <MdAddPhotoAlternate />
                          </span>
                        </div>
                      </div>
                    )}
                    {screenshot && (
                      <div className="h-44 w-72 border border-white bg-white rounded-md flex justify-center  items-center">
                        <div className="h-44 w-72 relative">
                          <img
                            className="h-44 w-72 p-1 rounded-lg"
                            src={screenshot}
                            alt="productPicure"
                          />
                          <span
                            onClick={() => setScreenshot("")}
                            className=" absolute text-2xl top-[5px] text-red-500 right-[5px] cursor-pointer"
                          >
                            <TiDelete />
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </label>

                <label class="label">
                  <span className="text-red-500">{screenshotErrorMessage}</span>
                </label>
              </div>
            </div>
            <p className=" font-medium">Enter Your Login Password</p>

            <div className=" h-12 relative mt-2">
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "password is Required",
                  },
                })}
                className="  w-full outline-none h-12 text-lg px-16 shadow-lg rounded-2xl"
                type="password"
                name="password"
                id="password"
                placeholder="Enter Login Password"
              />
              <label className="">
                {errors.password?.type === "required" && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
              <span className="text-2xl absolute top-2 left-4 text-gray-500">
                <CgSmartphone />
              </span>
            </div>

            <div className="pb-20">
              <input
                className="  w-full outline-none h-12   bg-[#c7984a] mt-5 text-lg px-16 shadow-sm rounded-lg"
                type="submit"
                value="Withdrow"
              />
              {/* <p className=" text-red-500">{errorMassage}</p> */}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Recharge;
