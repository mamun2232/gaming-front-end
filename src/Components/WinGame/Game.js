import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { GiTrophyCup } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import GamingModal from "./GamingModal";
const Game = () => {
  const [user, setUser] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [minutes, setMinutes] = useState(
    parseInt(localStorage.getItem("minutes")) || 1
  );
  const [seconds, setSeconds] = useState(
    parseInt(localStorage.getItem("seconds")) || 0
  );
  const [peroid, setProid] = useState(null);
  const [result, setResult] = useState([]);

  const navigate = useNavigate();
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("gamingUser"));
    fetch(`http://localhost:5000/api/v1/user/user/${userInfo?._id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUser(data.user);
        }
      });

    fetch("http://localhost:5000/api/v1/result/peroid")
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setProid(result.peroid);
        }
      });
    fetch("http://localhost:5000/api/v1/result/allResult")
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setResult(result.result.reverse());
        }
      });
  }, [isOpen, peroid]);

  const gamingNumber = [
    { number: 0, color: "red" },
    { number: 1, color: "sky" },
    { number: 2, color: "red" },
    { number: 3, color: "sky" },
    { number: 4, color: "red" },
    { number: 5, color: "sky" },
    { number: 6, color: "red" },
    { number: 7, color: "sky" },
    { number: 8, color: "red" },
    { number: 9, color: "sky" },
  ];

  const gameStartHendeler = (number, color) => {
    openModal();
    setSelectedColor(color);
    setSelectedNumber(number);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      localStorage.setItem("seconds", seconds);
      localStorage.setItem("minutes", minutes);
      if (seconds > 0) {
        setSeconds(seconds - 1);
        //  localStorage.setItem("seconds", seconds)
      } else if (minutes > 0) {
        const myMinte = localStorage.getItem("minutes");
        setMinutes(myMinte - 1);

        setSeconds(59);
      } else {
        setMinutes(parseInt(localStorage.setItem("minutes", 1)));
        setSeconds(0);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [minutes, seconds]);

  return (
    <div className="  h-full bg-base-200">
      <div className="pt-4 px-4 ">
        <div className=" h-32 bg-white rounded-lg px-4 py-4">
          <p className=" text-gray-900 font-medium">
            Available balance :{" "}
            <span className="text-gray-800 px-2">{user?.balance}</span>
          </p>

          <div className=" mt-5 flex justify-between">
            <button
              onClick={() => navigate("/recharge")}
              className=" w-[100px] bg-[#c7984a] px-4 rounded-lg py-2 font-medium"
            >
              Rechage
            </button>
            <button className="  bbg-base-200  border-[#c7984a] border  px-4 rounded-lg py-2 font-medium">
              Read Rule
            </button>
            <button
              onClick={() => navigate("/recorde")}
              className=" w-[100px] bg-base-200 px-4 border-[#c7984a]  border  rounded-lg py-2 font-medium"
            >
              Record
            </button>

            <button></button>
          </div>
        </div>
        <div className="mt-3">
          <div className=" flex justify-between">
            <div>
              <div className="  flex ">
                <span className="text-xl ">
                  <GiTrophyCup />
                </span>{" "}
                <span className="  text-gray-700">Peroid</span>
              </div>
              <p className=" pl-4 text-2xl">{peroid}</p>
            </div>
            <div>
              <div className="  text-end px-4">
                <span className="  text-gray-700">Count Down</span>
                <p className=" pl-4 text-2xl">
                  {/* 03:00 */}
                  <p id="demo">
                    {minutes}: {seconds}
                  </p>
                  {/* <Countdown date={Date.now() + 360000 }
                  overtime={false}
                  /> */}
                </p>
              </div>
            </div>
          </div>

          <div className=" mt-4 flex  justify-around ">
            <button
              onClick={() => gameStartHendeler("facebook", "sky")}
              className=" px-6 py-2 rounded-lg bg-[#2374e1] text-[#ffffff]"
            >
              Facebook
            </button>

            <button
              onClick={() => gameStartHendeler("TikTok", "red")}
              className=" px-6 py-2 rounded-lg bg-[#ff4019] text-[#ffffff]"
            >
              Tiktok
            </button>
          </div>

          {/* <div className=" mt-5 grid  grid-cols-5  lg:gap-5 gap-3 lg:px-4">
            <button className=" w-full text-[#ffffff] rounded-lg bg-[#ff4019]  h-10">
              0
            </button>
            <button className=" w-full text-[#ffffff] rounded-lg bg-[#2374e1] h-10">
              1
            </button>
            <button className=" w-full text-[#ffffff] rounded-lg bg-[#ff4019]  h-10">
              2
            </button>
            <button className=" w-full text-[#ffffff] rounded-lg bg-[#2374e1] h-10">
              3
            </button>
            <button className=" w-full text-[#ffffff] rounded-lg bg-[#ff4019]  h-10">
              4
            </button>
          </div>
          <div className=" mt-4 grid  grid-cols-5  lg:gap-5 gap-3 lg:px-4">
            <button className=" w-full text-[#ffffff] rounded-lg bg-[#2374e1]  h-10">
              5
            </button>
            <button className=" w-full text-[#ffffff] rounded-lg bg-[#ff4019]  h-10">
              6
            </button>
            <button className=" w-full text-[#ffffff] rounded-lg bg-[#2374e1] h-10">
              7
            </button>
            <button className=" w-full text-[#ffffff] rounded-lg bg-[#ff4019]  h-10">
              8
            </button>
            <button className=" w-full text-[#ffffff] rounded-lg bg-[#2374e1] h-10">
              9
            </button>
          </div> */}
          <div className=" mt-4 grid  grid-cols-5  lg:gap-5 gap-3 lg:px-4">
            {gamingNumber?.map(({ number, color }) => (
              <button
                onClick={() => gameStartHendeler(number, color)}
                key={number}
                className={`${
                  color == "sky" ? "bg-[#2374e1]" : "bg-[#ff4019]"
                }  w-full text-[#ffffff] rounded-lg   h-10`}
              >
                {number}
              </button>
            ))}
          </div>

          {isOpen && (
            <GamingModal
              isOpen={isOpen}
              closeModal={closeModal}
              openModal={openModal}
              color={selectedColor}
              number={selectedNumber}
              balance={user?.balance}
              userId={user?._id}
              userIdNumber={user?.userId}
              peroid={peroid}
            />
          )}

          <div className="pr-2">
            <div className=" mt-7 bg-white rounded-sm h-[600px] w-full mb-10">
              <div className=" flex justify-center py-4">
                <div className="  flex ">
                  <span className="text-xl ">
                    <GiTrophyCup />
                  </span>{" "}
                  <span className="  text-gray-700">Peroid</span>
                </div>
              </div>

              <div className=" h-12 border-t border-b ">
                <div className="flex px-4 gap-10">
                  <div className="flex flex-1 items-center  h-12">
                    <p className=" font-medium text-gray-500">Period</p>
                  </div>
                  <div className="flex items-center  w-[5vw] h-12">
                    <p className=" font-medium text-gray-500">Price</p>
                  </div>
                  {/* <div className="flex items-center  h-12">
                    <p className=" font-medium text-gray-500">Number</p>
                  </div> */}
                  <div className="flex items-center  h-12 w-[5vw]">
                    <p className=" font-medium text-gray-500">Result</p>
                  </div>
                </div>
              </div>
              <div className=" h-10">
                {result?.slice(0, 14).map(({ peroid, price, winResult }) => (
                  <div key={peroid} className="flex px-4 gap-10">
                    <div className="flex w-[80vw] items-center  h-10">
                      <p className=" font-medium text-gray-700">{peroid}</p>
                    </div>
                    <div className="flex items-center w-[6vw]  h-10">
                      <p className=" font-medium text-gray-700">{price}</p>
                    </div>
                    {/* <div className="flex items-center w-[3vw] h-10">
                    <p className=" font-medium text-gray-700">5</p>
                  </div> */}
                    <div className="flex items-center w-[2vw] h-10">
                      <p className=" font-medium text-gray-700">{winResult}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* <div className=" mt-5 bg-white rounded-sm h-[600px] mb-10">

        </div> */}
      </div>
    </div>
  );
};

export default Game;
