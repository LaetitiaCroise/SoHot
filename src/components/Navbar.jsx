import React from 'react';
import Logo from '../assets/Sohot.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
            <img src={Logo} />
        </div>
        <div className='rightSide'>
            <Link to ="/"> Accueil</Link>
            <Link to ="/sauces"> Nos Sauces</Link>
            <Link to ="/apropos"> A propos</Link>
            <Link to ="/contact"> Contact</Link>

        </div>
      
    </div>
  )
}

export default Navbar;
