import React from "react";
import { useForm } from "react-hook-form";
import { AiOutlineMail } from "react-icons/ai";
import { toast } from "react-toastify";

const Contect = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async ({ name, email, phone, subject, message }) => {
    fetch("http://localhost:5000/api/v1/contect/contect", {
      method: "POST",
      body: JSON.stringify({ name, email, phone, subject, message }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
            reset()
        if (data.success) {
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
        }
      });
  };
  return (
    <div className="bg-base-200 h-screen">
      <div className=" h-12  w-full bg-white flex justify-center items-center">
        <p className="text-lg font-medium">contect Or Help</p>
      </div>

      {/* <div className=" mt-8 px-4">
              <div className=" h-12 relative mt-2">
                <input
                  className="  w-full outline-none h-12 text-lg px-16 shadow-sm rounded-2xl"
                  type="text"
                  name="Mobile Number"
                  id=""
                  placeholder="please input code"
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
            </div> */}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="px-4">
          <div className="bg-white lg:h-96 h-full pb-40 mt-10 rounded-lg ">
            <div className=" grid lg:grid-cols-2 mt-4 px-5 gap-5  grid-cols-1">
              <div className=" h-14 relative mt-2">
                <input
                  {...register("name", {
                    required: {
                      value: true,
                      message: "name is Required",
                    },
                  })}
                  className="  w-full outline-none h-12 text-lg px-16 bg-base-200 border-gray-800 shadow-sm rounded-lg"
                  type="text"
                  name="name"
                  id=""
                  placeholder="Name"
                />
                <label>
                  {errors.name?.type === "required" && (
                    <span className="text-red-500">{errors.name.message}</span>
                  )}
                </label>
                <span className="text-2xl absolute top-2 left-4  text-gray-500">
                  <AiOutlineMail />
                </span>
              </div>
              <div className=" h-14 relative mt-2">
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                  })}
                  className="  w-full outline-none h-12 text-lg px-16 bg-base-200 border-gray-800 shadow-sm rounded-lg"
                  type="email"
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
            </div>
            <div className=" grid lg:grid-cols-2 mt-4 px-5 gap-5  grid-cols-1">
              <div className=" h-14 relative mt-2">
                <input
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "phone is Required",
                    },
                  })}
                  className="  w-full outline-none h-12 text-lg px-16 bg-base-200 border-gray-800 shadow-sm rounded-lg"
                  type="phone"
                  name="phone"
                  id=""
                  placeholder="phone"
                />
                <label>
                  {errors.phone?.type === "required" && (
                    <span className="text-red-500">{errors.phone.message}</span>
                  )}
                </label>
                <span className="text-2xl absolute top-2 left-4  text-gray-500">
                  <AiOutlineMail />
                </span>
              </div>
              <div className=" h-14 relative mt-2">
                <input
                  {...register("subject", {
                    required: {
                      value: true,
                      message: "subject is Required",
                    },
                  })}
                  className="  w-full outline-none h-12 text-lg px-16 bg-base-200 border-gray-800 shadow-sm rounded-lg"
                  type="text"
                  name="subject"
                  id=""
                  placeholder="subject"
                />
                <label>
                  {errors.subject?.type === "required" && (
                    <span className="text-red-500">
                      {errors.subject.message}
                    </span>
                  )}
                </label>
                <span className="text-2xl absolute top-2 left-4  text-gray-500">
                  <AiOutlineMail />
                </span>
              </div>
            </div>

            <div className=" grid lg:grid-cols-2 mt-4 px-5 gap-5  grid-cols-1">
              <div className=" h-14 relative mt-2">
                <textarea
                  {...register("message", {
                    required: {
                      value: true,
                      message: "message is Required",
                    },
                  })}
                  className="  w-full outline-none h-28 text-lg px-16 bg-base-200 border-gray-800 shadow-sm rounded-lg pt-2"
                  type="text"
                  name="message"
                  id=""
                  placeholder="message"
                />
                <label>
                  {errors.message?.type === "required" && (
                    <span className="text-red-500">
                      {errors.message.message}
                    </span>
                  )}
                </label>
                <span className="text-2xl absolute top-2 left-4  text-gray-500">
                  <AiOutlineMail />
                </span>
              </div>
            </div>

            <div className="mt-20 px-4">
              <input
                className="  w-full outline-none h-12   bg-[#c7984a] mt-5 text-lg px-16 shadow-sm rounded-lg"
                type="submit"
                value="Send"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contect;
