import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loading from "../Utilites/Loading";
import Facebook from "./Facebook";

const Game = () => {
  const [peroid, setProid] = useState(null);
  const [facebook, setFacebook] = useState([]);
  const [facebookAmoun, setFacebookAmoun] = useState(0);
  const [tiktok, setTikTok] = useState([]);
  const [tiktokAmoun, setTiktkAmoun] = useState(0);
  const [reFetch, setReFetch] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("https://gaming-backend.vercel.app/api/v1/result/peroid")
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setProid(result.peroid);

          fetch(
            `https://gaming-backend.vercel.app/api/v1/game/game/${result?.peroid}`
          )
            .then((res) => res.json())
            .then((data) => {
              if (data.success) {
                setFacebook(data.facebook);
                setTikTok(data.tiktok);
                const facebookArray = data?.facebook?.map((face) => face.money);
                const tiktokArray = data?.tiktok?.map((face) => face.money);

                if (tiktokArray !== 0) {
                  setTiktkAmoun(tiktokArray.reduce((a, b) => a + b));
                }

                if (facebookArray !== 0) {
                  setFacebookAmoun(facebookArray.reduce((a, b) => a + b));
                }
              } else {
                setFacebook([]);
                setTikTok([]);
              }
            });
        }
      });
  }, [reFetch]);

  const facebookWinHendler = () => {
    const facebookMap = facebook.map(({ userId, money }) => {
      return { id: userId, money: money * 2 };
    });

    fetch("https://gaming-backend.vercel.app/api/v1/game/game/win", {
      method: "PUT",
      body: JSON.stringify(facebookMap),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setReFetch(true);
          const peroidResult = {
            peroid: peroid,
            price: facebookAmoun,
            winResult: "facebook",
          };
          fetch("https://gaming-backend.vercel.app/api/v1/result/results", {
            method: "POST",
            body: JSON.stringify(peroidResult),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((res) => res.json())
            .then((result) => {
              if (result.success) {
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
              }
            });
        }
      });
  };

  const tiktokWinHendler = () => {
    const tiktokMap = tiktok.map(({ userId, money, balance }) => {
      return { id: userId, money: money * 2 };
    });

    fetch("https://gaming-backend.vercel.app/api/v1/game/game/win/tiktok", {
      method: "PUT",
      body: JSON.stringify(tiktokMap),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setReFetch(true);
          const peroidResult = {
            peroid: peroid,
            price: tiktokAmoun,
            winResult: "Tiktok",
          };
          fetch("https://gaming-backend.vercel.app/api/v1/result/results", {
            method: "POST",
            body: JSON.stringify(peroidResult),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((res) => res.json())
            .then((result) => {
              if (result.success) {
                console.log(result);
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
              }
            });
        }
      });
  };

  return (
    <div>
      <div></div>

      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* <!-- head --> */}
              <thead>
                <tr>
                  <th>Period No</th>
                  <th>Sky Total Amount</th>
                  <th>Red Total Amount</th>
                  <th>Win Action</th>
                  <th>Win Action</th>
                </tr>
              </thead>
              <tbody>
                {/* <!-- row 1 --> */}
                <tr className="border">
                  <th>{peroid}</th>
                  <td className="text-[#2374e1] font-medium h-6  relative">
                    <p>
                      {facebookAmoun} USD
                      <small
                        className={`${
                          facebookAmoun > tiktokAmoun ? "block" : "hidden"
                        } text-[8px]  absolute left-16 top-4`}
                      >
                        Big Amount
                      </small>
                    </p>
                  </td>
                  <td className="text-[#ff4019] font-medium h-6 relative">
                    <p>
                      {tiktokAmoun} USD
                      <small
                        className={`${
                          facebookAmoun < tiktokAmoun ? "block" : "hidden"
                        } text-[8px]  absolute left-16 top-4`}
                      >
                        Big Amount
                      </small>
                    </p>
                  </td>
                  <td>
                    <button
                      // disabled={facebook.length == 0}
                      onClick={() => facebookWinHendler()}
                      className={` bg-[#2374e1]  text-white  px-8 py-1 rounded`}
                    >
                      {" "}
                      Win Sky Color
                    </button>
                  </td>
                  <td>
                    <button
                      // disabled={tiktok.length == 0}
                      onClick={() => tiktokWinHendler()}
                      className={` bg-[#ff4019] text-white  px-8 py-1  rounded`}
                    >
                      {" "}
                      Win Red Color
                    </button>
                  </td>
                </tr>
                {/* <!-- row 2 --> */}
              </tbody>
            </table>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2  gap-5">
            <div className="   ">
              <Facebook gamingUser={facebook} />
            </div>
            <div className="">
              <Facebook gamingUser={tiktok} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Game;
