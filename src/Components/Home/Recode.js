import React, { useEffect, useState } from "react";
import Loading from "../Utilites/Loading";
import RecordTable from "./RecordTable";

const Recode = () => {
  const [record, setRecord] = useState([]);
  const [user, setUser] = useState({});
  const [loading, isLoading] = useState(false);
  useEffect(() => {
    
    const userInfo = JSON.parse(localStorage.getItem("gamingUser"));
    fetch(`http://localhost:5000/api/v1/user/user/${userInfo?._id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUser(data.user);
        }
      });
    fetch(`http://localhost:5000/api/v1/game/record/${userInfo?.userId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setRecord(data.record.reverse());
          
        }
      });
  }, [record]);

  return (
    <div className="bg-base-200 h-screen">
      <div className=" h-12  w-full bg-white flex justify-center items-center">
        <p className="text-lg font-medium">Game Record</p>
      </div>
      <div className="bg-white h-14  w-full  border-t  flex items-center  ">
        <p className="text-lg  text-gray-500 px-4">
          Balance:{" "}
          <span className="  font-medium text-gray-900">{user?.balance}</span>
        </p>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="px-8 mt-10 pb-40">
          <div className="">
            <div className="">
              <div class="overflow-x-auto rounded-lg border border-gray-200 shadow-md">
                <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
                  <thead class="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        class="px-6 py-4 font-medium text-gray-900"
                      >
                        Peroid No
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-4 font-medium text-gray-900"
                      >
                        Game Name
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-4 font-medium text-gray-900"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-4 font-medium text-gray-900"
                      >
                        WinGame(result)
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-4 font-medium text-gray-900"
                      >
                        Amount(result)
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-4 font-medium text-gray-900"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  {record.map((record) => (
                    <RecordTable key={record.id} record={record}></RecordTable>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recode;
