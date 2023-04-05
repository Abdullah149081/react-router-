import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Header></Header>
      <div className="text-center">{navigation.state === "loading" && <progress className="progress w-56 bg-lime-500 opacity-50"></progress>}</div>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
