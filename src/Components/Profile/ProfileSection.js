import React, { useState } from "react";
import { AiOutlineGift } from "react-icons/ai";
import { BsWallet2 } from "react-icons/bs";
import {
  FaRegArrowAltCircleDown,
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleUp,
} from "react-icons/fa";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { GrAppsRounded, GrShieldSecurity } from "react-icons/gr";
import { TbListDetails } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
const ProfileSection = () => {
  const [wallet, setWallet] = useState(false);
  const [report, setRepot] = useState(false);
  const [security, setSecurity] = useState(false);
  const [about, setAbout] = useState(false);

  const navigate = useNavigate();
  return (
    <div className=" bg-base-200">
      <div className=" pt-4 px-4">
        <div className=" h-48 bg-white rounded-lg px-4 py-4">
          <div className="flex gap-3 mt-2">
            <div className="mt-4">
              <img
                className=" w-12 h-12 rounded-full "
                src="https://media.istockphoto.com/id/804128708/photo/beautiful-young-woman-taking-piture-with-smart-phone.jpg?s=170667a&w=is&k=20&c=gHuKgxurcZXILv2zIwyR1s8lVbVM1C1AbrTMsIq0dQ0="
                alt=""
              />
            </div>
            <div>
              <p className="text-gay-900 font-medium text-sm mt-1">
                User juboajislam22@gmail.com
              </p>
              <p className="text-gay-900 font-medium text-sm mt-1">
                Id 089393434
              </p>
              <p className="text-gay-900 font-medium text-sm mt-1">
                Email juboajislam22@gmail.com
              </p>
              <p className="text-gay-900 font-medium text-sm mt-1">
                Availabe Balance 0
              </p>
            </div>
          </div>

          <div className=" flex justify-around mt-3">
            <button className=" w-[100px] bg-[#c7984a] px-4 rounded-lg py-2 ">
              Rechage
            </button>
            <button className="  bg-base-200  border-[#c7984a]  border-2 px-4 rounded-lg py-2 ">
              Change Nick Name
            </button>
          </div>
        </div>

        <div className="  h-full bg-white rounded-lg px-4 py-4 mt-5">
          <div
            onClick={() => setWallet(!wallet)}
            className="h-12 border-b flex justify-between cursor-pointer"
          >
            <p className=" flex  items-center text-md font-med text-gray-900">
              <span className="pr-2 text-[#6739b6]">
                <BsWallet2 />
              </span>
              Wallet
            </p>
            <span className=" flex  items-center text-xl">
              {wallet ? <FaRegArrowAltCircleUp /> : <FaRegArrowAltCircleDown />}
            </span>
          </div>
          {wallet && (
            <>
              <div
                onClick={() => navigate("/recharge")}
                className="h-12 border-b flex justify-between px-8 cursor-pointer"
              >
                <p className=" flex  items-center ">Recharge</p>
                <span className=" flex  items-center text-xl">
                  <FaRegArrowAltCircleRight />
                </span>
              </div>
              <div
                onClick={() => navigate("/withdrow")}
                className="h-12 border-b flex justify-between px-8 cursor-pointer"
              >
                <p className=" flex  items-center ">Withdrawal</p>
                <span className=" flex  items-center text-xl">
                  <FaRegArrowAltCircleRight />
                </span>
              </div>
            </>
          )}
          <div
            onClick={() => setRepot(!report)}
            className="h-12 border-b flex justify-between"
          >
            <p className=" flex  items-center text-md font-med text-gray-900">
              <span className="pr-2 text-[#6739b6]">
                <MdOutlineReportGmailerrorred />
              </span>
              report
            </p>
            <span className=" flex  items-center text-xl">
              {report ? <FaRegArrowAltCircleUp /> : <FaRegArrowAltCircleDown />}
            </span>
          </div>
          {report && (
            <>
              <div className="h-12 border-b flex justify-between px-8">
                <p className=" flex  items-center ">Report </p>
                <span className=" flex  items-center text-xl">
                  <FaRegArrowAltCircleRight />
                </span>
              </div>
              <div className="h-12 border-b flex justify-between px-8">
                <p className=" flex  items-center ">Total Report</p>
                <span className=" flex  items-center text-xl">
                  <FaRegArrowAltCircleRight />
                </span>
              </div>
            </>
          )}
          <div onClick={() => navigate("/gift")} className="h-12 border-b flex justify-between cursor-pointer">
            <p className=" flex  items-center text-md font-med text-gray-900">
              <span className="pr-2 text-[#6739b6]">
                <AiOutlineGift />
              </span>
              Gift
            </p>
            <span className=" flex  items-center text-xl">
              <FaRegArrowAltCircleRight />
            </span>
          </div>
          <div
            onClick={() => setSecurity(!security)}
            className="h-12 border-b flex justify-between cursor-pointer"
          >
            <p className=" flex  items-center text-md font-med text-gray-900">
              <span className="pr-2 text-[#6739b6]">
                <GrShieldSecurity />
              </span>
              Account Security
            </p>
            <span className=" flex  items-center text-xl">
              {security ? (
                <FaRegArrowAltCircleUp />
              ) : (
                <FaRegArrowAltCircleDown />
              )}
            </span>
          </div>
          {security && (
            <>
              <div onClick={() => navigate("/restPassword")} className="h-12 border-b flex justify-between px-8 cursor-pointer">
                <p className=" flex  items-center ">Reset Password</p>
                <span className=" flex  items-center text-xl">
                  <FaRegArrowAltCircleRight />
                </span>
              </div>
            </>
          )}
          <div className="h-12 border-b flex justify-between">
            <p className=" flex  items-center text-md font-med text-gray-900">
              <span className="pr-2 text-[#6739b6]">
                <GrAppsRounded />
              </span>
              App Dowenlode
            </p>
            <span className=" flex  items-center text-xl">
              <FaRegArrowAltCircleRight />
            </span>
          </div>
          <div
            onClick={() => setAbout(!about)}
            className="h-12 border-b flex justify-between"
          >
            <p className=" flex  items-center text-md font-med text-gray-900">
              <span className="pr-2 text-[#6739b6]">
                <TbListDetails />
              </span>
              About
            </p>
            <span className=" flex  items-center text-xl">
              {about ? <FaRegArrowAltCircleUp /> : <FaRegArrowAltCircleDown />}
            </span>
          </div>
          {about && (
            <>
              <div className="h-12 border-b flex justify-between px-8">
                <p className=" flex  items-center ">Privacy Policy</p>
                <span className=" flex  items-center text-xl">
                  <FaRegArrowAltCircleRight />
                </span>
              </div>
              <div className="h-12 border-b flex justify-between px-8">
                <p className=" flex  items-center ">
                  Risk Disclourse Agreement
                </p>
                <span className=" flex  items-center text-xl">
                  <FaRegArrowAltCircleRight />
                </span>
              </div>
            </>
          )}
        </div>

        <div className=" py-5">
          <button className=" h-12 bg-white rounded-lg shadow-md w-full  uppercase">
            LogOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
