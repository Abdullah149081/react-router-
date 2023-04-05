import React from "react";

const UserLYT = ({ user }) => {
  console.log(user);
  const { name, email, phone } = user;
  return (
    <div className="border-2 border-amber-700  p-5 rounded-lg space-y-4">
      <h2 className="text-4xl font-bold">Name: {name}</h2>
      <p className="text-2xl text-pink-500 font-medium">Email: {email}</p>
      <p className="text-2xl text-pink-500 font-medium">Phone: {phone}</p>
    </div>
  );
};

export default UserLYT;
