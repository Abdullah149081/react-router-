import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="text-2xl  flex gap-4 justify-center text-center my-5">
        <div className="font-medium flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link> 
        </div>
      </nav>
    </div>
  );
};

export default Header;
