import React, { useEffect, useState } from "react";
import ReachrgeTable from "./ReachrgeTable";

const Reachrge = () => {
  const [reachrges, setRechrge] = useState([]);
  useEffect(() => {
    fetch("https://gaming-backend.vercel.app/api/v1/reachrge/allReachrge")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setRechrge(data.reachrge.reverse());
        }
      });
  }, [reachrges]);

  return (
    <div>
      <h1 className="">
        Total Reachrge Request{" "}
        <span className=" font-medium text-gray-700"> {reachrges?.length}</span>
      </h1>

      <div className="mt-5 mb-40">
        <div class="overflow-x-auto rounded-lg border border-gray-200 shadow-md">
          <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Pay Id
                </th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Email
                </th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Recharge(Point)
                </th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Transaction Screenshot
                </th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Status
                </th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Reacharge Now
                </th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Action
                </th>
                <th
                  scope="col"
                  class="px-6 py-4 font-medium text-gray-900"
                ></th>
              </tr>
            </thead>
            {<ReachrgeTable reachrges={reachrges} />}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reachrge;
