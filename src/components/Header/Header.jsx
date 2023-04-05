import React from "react";
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLInk";

const Header = () => {
  return (
    <div className="sticky top-0 bg-warning ">
      <nav className="text-2xl py-8 flex gap-4 justify-center text-center mb-12">
        <div className="font-medium flex gap-4 text-lg md:text-2xl">
          <ActiveLink to="/">Home</ActiveLink>
          <ActiveLink to="/user">User</ActiveLink>
          <ActiveLink to="/posts">Posts</ActiveLink>
          <ActiveLink to="/about">About</ActiveLink>
          <ActiveLink to="/contact">Contact</ActiveLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
