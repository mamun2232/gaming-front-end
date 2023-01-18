import React, { useEffect, useState } from "react";
import RasultTable from "./RasultTable";

const Result = () => {
  const [results, setResult] = useState([]);
  useEffect(() => {
    fetch("https://gaming-backend.vercel.app/api/v1/result/allResult")
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setResult(result.result);
        }
      });
  }, [results]);
  return (
    <div>
      <h1 className="">
        Total Result{" "}
        <span className=" font-medium text-gray-700"> {results?.length}</span>
      </h1>

      <div className="mt-5 mb-40">
        <div class="overflow-x-auto rounded-lg border border-gray-200 shadow-md">
          <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Peroid No
                </th>

                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Price
                </th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Win Result
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
            {<RasultTable results={results} />}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Result;
