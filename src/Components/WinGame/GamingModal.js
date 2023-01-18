import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { toast } from "react-toastify";

const GamingModal = ({
  openModal,
  isOpen,
  closeModal,
  number,
  color,
  balance,
  userId,
  peroid,
  userIdNumber,
}) => {
  const [selectedMoney, setSelectedMoney] = useState(20);
  // const [totalMoney , setTotalMoney] = useState(10)
  const [quantity, setQuantity] = useState(1);
  const [agree, setAgree] = useState(false);
  const contractMoney = [
    { money: 20 },
    { money: 100 },
    { money: 1000 },
    { money: 10000 },
  ];

  const increaseQuantityHandeler = () => {
    setQuantity(quantity + 1);
    //  setTotalMoney(quantity * selectedMoney)
  };

  const dcreaseQuantityHandler = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      // setTotalMoney(quantity * selectedMoney)
    }
  };
  // console.log(  quantity , selectedMoney);

  // send to database
  const confrimGameStartHandler = () => {
    const userBalanceAvailable = parseInt(balance) >= quantity * selectedMoney;
    if (!userBalanceAvailable) {
      closeModal();
      return toast.warn("Balance insufficient", {
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
    if (
      number == 1 ||
      number == 3 ||
      number == 5 ||
      number == 7 ||
      number == 9 ||
      number == "facebook"
    ) {
      fetch("https://gaming-backend.vercel.app/api/v1/game/win", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          userId,
          money: quantity * selectedMoney,
          PeroidNo: peroid,
          gameName: "facebook",
          userIdNumber,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
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
            closeModal();
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
            closeModal();
          }
        });
    } else {
      fetch("https://gaming-backend.vercel.app/api/v1/game/win", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          userId,
          money: quantity * selectedMoney,
          PeroidNo: peroid,
          gameName: "Tiktok",
          userIdNumber,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
         
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
            closeModal();
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
            closeModal();
          }
        });
    }
  };

  
  return (
    <>
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
                <Dialog.Panel className="w-full lg:w-2/4 max-w-m transform overflow-hidden rounded-2xl bg-white   text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="leading-6 ">
                    <div className="h-90">
                      <div
                        className={`${
                          color === "sky" ? "bg-[#2374e1]" : "bg-[#ff4019]"
                        } h-14 w-full flex  items-center justify-center`}
                      >
                        <p className="text-2xl font-medium text-white">
                          Selected {number}
                        </p>
                      </div>

                      <div className="px-6 py-3">
                        <p className="text-lg text-gray-600">Contract Money</p>
                        <div className=" flex gap-3">
                          {contractMoney.map(({ money }) => (
                            <button
                              onClick={() => setSelectedMoney(money)}
                              className={`${
                                parseInt(money) === parseInt(selectedMoney)
                                  ? color === "sky"
                                    ? "bg-[#2374e1] text-white"
                                    : "bg-[#ff4019] text-white"
                                  : "bg-[#f5f5f5]"
                              } lg:px-6 px-4 py-2 rounded-lg text-gray-500 mt-2`}
                              key={money}
                            >
                              {money}
                            </button>
                          ))}
                        </div>

                        <div className="mt-5 flex gap-5">
                          <div className=" flex items-center">
                            <p className="text-lg text-gray-600">Number</p>
                          </div>
                          <div className="flex items-center border rounded-lg">
                            <button
                              disabled={quantity == 1}
                              onClick={() => dcreaseQuantityHandler()}
                              className="w-[55px] h-[40px]  flex  justify-center items-center text-2xl bg-[#f5f5f5] "
                            >
                              -
                            </button>
                            <div className="w-[55px] h-[40px]  flex  justify-center items-center text-lg  border-l">
                              {quantity}
                            </div>
                            <button
                              onClick={() => increaseQuantityHandeler()}
                              className="w-[55px] h-[40px]  flex  justify-center   text-2xl border-l bg-[#f5f5f5]"
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="text-lg text-gray-600">
                            Total Contract Money is{" "}
                            <span
                              className={`${
                                color === "sky"
                                  ? "text-[#2374e1]"
                                  : "text-[#ff4019]"
                              }`}
                            >
                              {selectedMoney * quantity}
                            </span>
                          </p>
                          <div className=" mt-2">
                            <input
                              onClick={() => setAgree(!agree)}
                              className=""
                              type="checkbox"
                              name=""
                              id=""
                            />
                            <span className="px-3 ">
                              I agree{" "}
                              <span
                                className={`${
                                  color === "sky"
                                    ? "text-[#2374e1]"
                                    : "text-[#ff4019]"
                                } cursor-pointer uppercase`}
                              >
                                Presale Role
                              </span>{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="  flex justify-center  border-t w-full h-16 ">
                        <div className="w-full flex justify-center uppercase  items-center border-r">
                          <button onClick={() => closeModal()}>CLOSE</button>
                        </div>
                        <div className="w-full flex justify-center uppercase  items-center">
                          <button
                          disabled={!agree}
                            onClick={() => confrimGameStartHandler()}
                            className={`${
                              agree == false ? color === "sky"
                              ? "text-blue-200"
                              : "text-red-200" :
                              color === "sky"
                                ? "text-[#2374e1]"
                                : "text-[#ff4019]"
                            } cursor-pointer uppercase`}
                          >
                            CONFROM
                          </button>
                        </div>
                      </div>
                    </div>
                  </Dialog.Title>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default GamingModal;
