import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Cards from "../../components/cards/Cards";

const Home = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="content">{children}</div>
      <Cards />
    </div>
  );
};

export default Home;
