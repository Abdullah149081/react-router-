import React from "react";
import { Link } from "react-router-dom";

const UserLYT = ({ user }) => {
  console.log(user);
  const { name, email, phone, id } = user;
  return (
    <div className="border-2 border-amber-700  p-5 rounded-lg space-y-4">
      <h2 className="text-4xl font-bold">Name: {name}</h2>
      <p className="text-2xl text-pink-500 font-medium">
        Email: <span className="cursor-pointer">{email}</span>
      </p>
      <p className="text-2xl text-pink-500 font-medium">Phone: {phone}</p>
      <p className="text-success font-bold">
        <Link to={`/user/${id}`}>Show me</Link>
      </p>
    </div>
  );
};

export default UserLYT;
