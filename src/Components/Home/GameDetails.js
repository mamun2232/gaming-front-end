import React from "react";
import { useNavigate } from "react-router-dom";

const GameDetails = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="w-full h-[500px] relative">
        <img
          className=" w-full h-[500px] "
          src="/picture/homepic.jpeg"
          alt=""
        />
        <div className=" absolute top-6  right-32 lg:right-[47vw]">
        <h1 className=" text-3xl text-yellow-500 font-medium">123.in</h1>
      </div>
      <div className=" absolute top-16 lg:right-[40vw] px-4">
        <p className=" text-2xl sm:text-xl text-yellow-500 font-medium text-center">
          The Best Solt Mechine game <br /> Desinged for real player
        </p>
      </div>

      <div className="absolute top-100    top-96 lg:right-[45vw] right-24">
        {/* <button className=" text-white font-medium bg-yellow-500 rounded-md w-32 py-1">
          Start
        </button> */}
        <img
          onClick={() => navigate("/login")}
          className="w-[180px]"
          src="/picture/btn_start.png"
          alt=""
        />
      </div>

      </div>

      

      

      <div className=" bg-[#020913] w-full pb-20 pt-10 px-3">
        <div className="card w-full bg-[#102739] lg:h-20 h-28 shadow-xl  flex ">
          <div className="px-5 py-3  flex justify-between ">
            <div className=" ">
              <h1 className="text-2xl font-medium text-yellow-500">Wingo</h1>
              <p className="text-sm font-medium text-base-200">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                quis dolore quas nam eum debitis?
              </p>
            </div>
            <div className=" flex  items-center ">
              <img className="w-12 h-12" src="/picture/dtpk.png" alt="" />
            </div>
          </div>
        </div>
        <div className="card w-full bg-[#102739] lg:h-20 h-28  shadow-xl  flex mt-3">
          <div className="px-5 py-2 flex justify-between">
            <div className=" ">
              <h1 className="text-2xl font-medium text-yellow-500">Wingo</h1>
              <p className="text-sm font-medium text-base-200">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                quis dolore quas nam eum debitis?
              </p>
            </div>
            <div className=" flex  items-center ">
              <img className="w-12 h-12" src="/picture/game_abfun.png" alt="" />
            </div>
          </div>
        </div>
        <div className="card w-full bg-[#102739] lg:h-20 h-28 shadow-xl  flex mt-3">
          <div className="px-5 py-2 flex justify-between">
            <div className=" ">
              <h1 className="text-2xl font-medium text-yellow-500">Wingo</h1>
              <p className="text-sm font-medium text-base-200">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                quis dolore quas nam eum debitis?
              </p>
            </div>
            <div className=" flex  items-center ">
              <img className="w-12 h-12" src="/picture/game_holdem.png" alt="" />
            </div>
          </div>
        </div>
        <div className="card w-full bg-[#102739] lg:h-20 h-28 shadow-xl  flex mt-3">
          <div className="px-5 py-2 flex justify-between">
            <div className=" ">
              <h1 className="text-2xl font-medium text-yellow-500">Wingo</h1>
              <p className="text-sm font-medium text-base-200">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                quis dolore quas nam eum debitis?
              </p>
            </div>
            <div className=" flex  items-center ">
              <img className="w-12 h-12" src="/picture/game_luxurycar.png" alt="" />
            </div>
          </div>
        </div>
        <div className="card w-full bg-[#102739] lg:h-20 h-28 shadow-xl  flex mt-3">
          <div className="px-5 py-2  flex  justify-between">
            <div className=" ">
              <h1 className="text-2xl font-medium text-yellow-500">Wingo</h1>
              <p className="text-sm font-medium text-base-200">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                quis dolore quas nam eum debitis?
              </p>
            </div>
            <div className=" flex  items-center ">
              <img className="w-12 h-12" src="/picture/game_rummy.png" alt="" />
            </div>
          </div>
        </div>
        <div className="card w-full bg-[#102739] lg:h-20 h-28 shadow-xl  flex mt-3">
          <div className="px-5 py-2 flex justify-between">
            <div className=" ">
              <h1 className="text-2xl font-medium text-yellow-500">Wingo</h1>
              <p className="text-sm font-medium text-base-200">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                quis dolore quas nam eum debitis?
              </p>
            </div>
            <div className=" flex  items-center ">
              <img className="w-12 h-12" src="/picture/game_wingo.png" alt="" />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-sm text-yellow-500 text-center">
            123 in offers bonuess, promotions,special event exciting contests
          </p>
          <div className=" flex justify-center mt-3">
            {/* <button
              onClick={() => navigate("/login")}
              className=" text-white font-medium bg-yellow-500 rounded-md w-32 py-2"
            >
              join in
            </button> */}
            <img
              onClick={() => navigate("/login")}
              className="w-[180px]"
              src="/picture/btn_joinin.png"
              alt=""
            />
          </div>
        </div>

        <div className=" flex justify-center mt-5">
          <img
            className="h-[80px]  rounded-lg"
            src="/picture/payment.jpg"
            alt=""
          />
        </div>

        <div className=" h-8 border-t-2 border-yellow-500 mt-3">
          <p className="text-center text-sm text-gray-400 mt-2">
            Copyright 2017-2025(©)777in All rights reserved and protected by law
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
