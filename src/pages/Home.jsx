import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/maisonmartinfrance_177534381_821144228757895_8236361948720608102_n.jpg';
import "../styles/Home.css";

function Home() {
  return (
    
    <div className='home'>
        {/* <div className='headerContainer' style={{ backgroundImage: `url(${BannerImage})`}}> */}
        <div className='headerContainer'>
            <h1> So Hot !</h1>
            <p> pour l'amour du piment</p>
            < Link to ="/sauces">
            <button> Voir nos sauces </button>
            </Link>
            </div>
            <div className='containerImage'>
            <img src={BannerImage} />
            </div>
        
      
    </div>
  )
}

export default Home;
