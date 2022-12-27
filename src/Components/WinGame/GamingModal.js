import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

const GamingModal = ({ openModal, isOpen, closeModal, number, color }) => {
  const contractMoney = [
    { money: 10 },
    { money: 100 },
    { money: 1000 },
    { money: 10000 },
  ];
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
                    <div className="h-60">
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
                              className="px-6 py-2 rounded-lg bg-[#f5f5f5] text-gray-500 mt-2"
                              key={money}
                            >
                              {money}
                            </button>
                          ))}
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
