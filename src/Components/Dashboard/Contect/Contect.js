import React, { useEffect, useState } from "react";
import ContectTable from "./ContectTable";

const Contect = () => {
      const [contects, setContect] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/contect/contect")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setContect(data.contect);
        }
      });
  }, [contects]);
  return <div>
  <h1 className="">
    Total Message Request{" "}
    <span className=" font-medium text-gray-700"> {contects.length}</span>
  </h1>

  <div className="mt-5 mb-40">
    <div class="overflow-x-auto rounded-lg border border-gray-200 shadow-md">
      <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">
              Name
            </th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">
              Email
            </th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">
             Phone
            </th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">
              Subject
            </th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">
             Message
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
        {<ContectTable contects={contects} />}
      </table>
    </div>
  </div>
</div>;
};

export default Contect;
