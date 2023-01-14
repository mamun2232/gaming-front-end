import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CgSmartphone } from "react-icons/cg";

import { toast } from "react-toastify";

const Withdrow = () => {
  const [user, setUser] = useState({});
  const [errorMassage, setErrorMessage] = useState("");
  const [reFetch, setRefetch] = useState(false);
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("gamingUser"));

    fetch(`http://localhost:5000/api/v1/user/user/${userInfo?._id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUser(data.user);
        }
      });
  }, [user, reFetch]);

  const withdrowAmount = [
    500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 10000, 15000,
    20000, 25000, 30000, 35000, 40000, 45000, 50000,
  ];
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({});
  // let errorMassage;
  const onSubmit = async ({ password, PayId, email, withdrowAmoun }) => {
    const validAmount = withdrowAmount.includes(parseInt(withdrowAmoun));
    if (!validAmount) {
      return setErrorMessage("Amount no Longer withdrow Scrope");
    }

    if (user.balance < withdrowAmoun) {
      return toast.warn("Sorry your balance is very low", {
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
    setErrorMessage("");
    fetch("http://localhost:5000/api/v1/withdrow/withdrow", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        password,
        PayId,
        email,
        withdrowAmoun,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.success) {
          setRefetch(true);
          reset();
          toast.success(result.message, {
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
          setErrorMessage(result.message);
        }
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-base-200 h-screen">
        <div className=" h-12  w-full bg-white flex justify-center items-center">
          <p className="text-lg font-medium">Withdrow</p>
        </div>
        <div className="bg-white h-14  w-full  border-t  flex items-center  ">
          <p className="text-lg  text-gray-500 px-4">
            Balance:{" "}
            <span className="  font-medium text-gray-900">{user?.balance}</span>
          </p>
        </div>
        <div className="px-4">
          <div className="bg-white lg:h-20 h-44 w-full shadow-md  rounded-lg mt-10 flex items-center">
            <div className=" px-8">
              <div className=" lg:flex  gap-5">
                {withdrowAmount.map((item) => (
                  <span className="text-lg  font-medium text-gray-900 ">
                    {item},{" "}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-500  ">
                Amount no Longer withdrow Scrope
              </p>
            </div>
          </div>

          <div className=" mt-10">
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
                    {...register("withdrowAmoun", {
                      required: {
                        value: true,
                        message: "withdrowAmoun is Required",
                      },
                    })}
                    className="  w-full outline-none h-12 text-lg px-16 shadow-sm rounded-2xl"
                    type="number"
                    id="withdrowAmoun"
                    name="withdrowAmoun"
                    placeholder="Amount 500 , 1000, 1500 ....50000"
                  />
                  <label className="">
                    {errors.withdrowAmoun?.type === "required" && (
                      <span className="text-red-500">
                        {errors.withdrowAmoun.message}
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

            <div className=" mt-8">
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

              <input
                className="  w-full outline-none h-12   bg-[#c7984a] mt-5 text-lg px-16 shadow-sm rounded-lg"
                type="submit"
                value="Withdrow"
              />
              <p className=" text-red-500">{errorMassage}</p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Withdrow;
