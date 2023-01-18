import React, { useEffect, useState } from "react";
import UserTable from "./UserTable";

const User = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("https://gaming-backend.vercel.app/api/v1/user/user")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUser(data.user.reverse());
        }
      });
  }, [users]);
  return (
    <div>
      <h1 className="">
        Total User{" "}
        <span className=" font-medium text-gray-700"> {users?.length}</span>
      </h1>

      <div className="mt-5 mb-40">
        <div class="overflow-x-auto rounded-lg border border-gray-200 shadow-md">
          <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  User Name
                </th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Id
                </th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Email
                </th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Role
                </th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Balance
                </th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Make Admin
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
            {<UserTable users={users} />}
          </table>
        </div>
      </div>
    </div>
  );
};

export default User;
