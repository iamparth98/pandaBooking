import React from "react";
import "./home.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
      </div>
    </div>
  );
}

export default Home;
