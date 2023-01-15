import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineMail } from "react-icons/ai";
import { toast } from "react-toastify";

const ChangeNameModal = ({ isOpen, closeModal, userId, setChangeName }) => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async ({ name }) => {
    fetch(`http://localhost:5000/api/v1/user/update/${userId}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setChangeName(true);
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
          closeModal();
        }
      });
  };
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="mt-2">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <p className="text-sm text-gray-500">
                      <div className=" h-14 relative mt-2">
                        <input
                          {...register("name", {
                            required: {
                              value: true,
                              message: "Name is Required",
                            },
                          })}
                          className="  w-full outline-none h-12 text-lg px-16 bg-base-200 shadow-sm rounded-lg"
                          type="text"
                          name="name"
                          id=""
                          placeholder="Enter Name"
                        />
                        <label className="">
                          {errors.name?.type === "required" && (
                            <span className="text-red-500">
                              {errors.name.message}
                            </span>
                          )}
                        </label>
                        <span className="text-2xl absolute top-2 left-4 text-gray-500">
                          <AiOutlineMail />
                        </span>
                      </div>
                    </p>

                    <div className="mt-3">
                      <input
                        type="submit"
                        value="Change Name"
                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        // onClick={closeModal}
                      />
                    </div>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ChangeNameModal;
