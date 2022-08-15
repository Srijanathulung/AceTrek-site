import Header from "./components/Header/Header";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

const Home = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Navbar/>
    </div>
  );
};

export default Home;
