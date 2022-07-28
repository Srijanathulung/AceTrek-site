import Header from "./components/Header/Header";
import React from "react";
import Navbar from "../src/components/Navbar/Navbar";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <div className="container-fluid nav ">
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
