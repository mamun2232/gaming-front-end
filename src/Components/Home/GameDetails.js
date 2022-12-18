import React from "react";
import { useNavigate } from "react-router-dom";

const GameDetails = () => {
  const navigate = useNavigate()
  return (
    <div>
    
      <div>
        <img
          className=" w-full h-[500px] relative"
          src="/picture/homepic.jpeg"
          alt=""
        />
      </div>

      <div className=" absolute top-20  right-[45vw]">
        <h1 className=" text-3xl text-yellow-500 font-medium">333.in</h1>
      </div>
      <div className="absolute top-[18vh] right-[38vw]">
        <p className=" text-2xl text-yellow-500 font-medium text-center">
          The Best Solt Mechine game <br /> Desinged for real player
        </p>
      </div>

      <div className="absolute top-100   bottom-52 right-[45vw]">
        <button className=" text-white font-medium bg-yellow-500 rounded-md w-32 py-1">
          Start
        </button>
      </div>

      <div className=" bg-[#020913] w-full pb-20 pt-10 px-3">
        <div className="card w-full bg-[#102739] h-20 shadow-xl  flex">
          <div className="px-3 py-3">
            <div className=" ">
              <h1 className="text-2xl font-medium text-yellow-500">Wingo</h1>
              <p className="text-sm font-medium text-base-200">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                quis dolore quas nam eum debitis?
              </p>
            </div>
            <div className=" "></div>
          </div>
        </div>
        <div className="card w-full bg-[#102739] h-20 shadow-xl  flex mt-3">
          <div className="px-5 py-2">
            <div className=" ">
              <h1 className="text-2xl font-medium text-yellow-500">Wingo</h1>
              <p className="text-sm font-medium text-base-200">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                quis dolore quas nam eum debitis?
              </p>
            </div>
            <div className=" "></div>
          </div>
        </div>
        <div className="card w-full bg-[#102739] h-20 shadow-xl  flex mt-3">
          <div className="px-5 py-2">
            <div className=" ">
              <h1 className="text-2xl font-medium text-yellow-500">Wingo</h1>
              <p className="text-sm font-medium text-base-200">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                quis dolore quas nam eum debitis?
              </p>
            </div>
            <div className=" "></div>
          </div>
        </div>
        <div className="card w-full bg-[#102739] h-20 shadow-xl  flex mt-3">
          <div className="px-5 py-2">
            <div className=" ">
              <h1 className="text-2xl font-medium text-yellow-500">Wingo</h1>
              <p className="text-sm font-medium text-base-200">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                quis dolore quas nam eum debitis?
              </p>
            </div>
            <div className=" "></div>
          </div>
        </div>
        <div className="card w-full bg-[#102739] h-20 shadow-xl  flex mt-3">
          <div className="px-5 py-2">
            <div className=" ">
              <h1 className="text-2xl font-medium text-yellow-500">Wingo</h1>
              <p className="text-sm font-medium text-base-200">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                quis dolore quas nam eum debitis?
              </p>
            </div>
            <div className=" "></div>
          </div>
        </div>
        <div className="card w-full bg-[#102739] h-20 shadow-xl  flex mt-3">
          <div className="px-5 py-2">
            <div className=" ">
              <h1 className="text-2xl font-medium text-yellow-500">Wingo</h1>
              <p className="text-sm font-medium text-base-200">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                quis dolore quas nam eum debitis?
              </p>
            </div>
            <div className=" "></div>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-sm text-yellow-500 text-center">
            777 in offers bonuess, promotions,special event exciting contests
          </p>
          <div className=" flex justify-center mt-3">
            <button onClick={()=>navigate('/login')} className=" text-white font-medium bg-yellow-500 rounded-md w-32 py-2">
              join in
            </button>
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
