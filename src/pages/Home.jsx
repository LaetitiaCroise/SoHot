import React from 'react';
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
        <div className='headerContainer'>
            <h1> So Hot !</h1>
            <p> pour l'amour du piment</p>
            < Link to ="/sauces">
            <button> Voir nos sauces </button>
            </Link>
        </div>
      
    </div>
  )
}

export default Home;
