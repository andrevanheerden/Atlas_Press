import React from "react";
import Navbar from "./componets/navbar";
import "./home.css";

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-content">
        <h1>Welcome to Atlas Press</h1>
        <p>Your gateway to global publishing and stories that inspire.</p>
      </div>
    </div>
  );
}

export default Home;
