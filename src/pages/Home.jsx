
import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/chili-pepper-642391_1280.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>So Hot ! </h1>
        <p> Pour l'amour du piment</p>
        <Link to="/sauces">
          <button> Voir nos sauces ! </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
