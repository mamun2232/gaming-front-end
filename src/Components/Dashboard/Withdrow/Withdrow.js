import React, { useEffect, useState } from "react";
import WithdrowTable from "./WithdrowTable";

const Withdrow = () => {
  const [withdrows, setWithdrow] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/api/v1/withdrow/allWithdrow")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setWithdrow(data.withdrow);
          setLoading(false);
        }
      });
  }, [withdrows]);

  return (
    <div>
      <h1 className="">
        Total Withdrow Request{" "}
        <span className=" font-medium text-gray-700"> {withdrows?.length}</span>
      </h1>

      <div className="mt-5">
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
                  Withdrow(amount)
                </th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Status
                </th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Paid Now
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
            {<WithdrowTable withdrows={withdrows} />}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Withdrow;
