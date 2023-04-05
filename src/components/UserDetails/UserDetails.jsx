import React from "react";
import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, phone, email, website, company, address } = user;

  return (
    <div className="md:px-32">
      <h2 className="text-5xl font-bold text-center">Here user Details</h2>
      <div className="border-2 w-2/4 mx-auto border-amber-700  p-5 rounded-lg space-y-4 mt-10 pl-12">
        <h2 className="text-4xl font-bold">Name: {name}</h2>
        <p className="text-2xl text-pink-500 font-medium">
          Email: <span className="cursor-pointer">{email}</span>
        </p>
        <p className="text-2xl text-pink-500 font-medium">Phone: {phone}</p>
        <p className="text-2xl text-pink-500 font-medium">Website: {website}.</p>
        <p className="text-2xl text-pink-500 font-medium">Company: {company.name}.</p>
        <p className="text-2xl text-pink-500 font-medium">Address: {Object.values(address).slice(0, 4).join(" , ")}.</p>
      </div>
    </div>
  );
};

export default UserDetails;
