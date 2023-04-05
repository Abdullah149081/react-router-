import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="sticky top-0 bg-warning ">
      <nav className="text-2xl py-8 flex gap-4 justify-center text-center ">
        <div className="font-medium flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/user">User</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
