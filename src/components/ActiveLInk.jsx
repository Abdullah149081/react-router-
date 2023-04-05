import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink to={to} className={({ isActive }) => (isActive ? "underline font-bold text-transparent bg-clip-text  bg-gradient-to-r from-lime-600  to-slate-800" : "")}>
      {children}
    </NavLink>
  );
};

export default ActiveLink;
