import React from "react";
import { useLoaderData } from "react-router-dom";
import UserLYT from "../UserLYT/UserLYT";

const User = () => {
  const users = useLoaderData();
  // console.log(data);
  return (
    <div>
      <h2 className="text-center text-5xl font-bold py-5">Load user: {users.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:px-32 mt-12 pb-12">
        {users.map((user) => (
          <UserLYT key={user.id} user={user}></UserLYT>
        ))}
      </div>
    </div>
  );
};

export default User;
