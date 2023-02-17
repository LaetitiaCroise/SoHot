import React, { useState } from 'react';
import Logo from '../assets/Sohot.png';
import { Link } from 'react-router-dom';
// import MenuIcon from '@mui/icons-material/Menu';
import { AiOutlineMenu } from "react-icons/ai";
import '../styles/Navbar.css';

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);
    const toggleNavbar = () => {
        setOpenLinks (!openLinks);
    }
  return (
    <div className='navbar'>
        <div className='leftSide' id ={openLinks ? "open" : "close"}>
            <img src={Logo} />
            <header className='hiddenLinks'>
            <Link to ="/"> Accueil</Link>
            <Link to ="/sauces"> Nos Sauces</Link>
            <Link to ="/about"> A propos</Link>
            <Link to ="/contact"> Contact</Link>
            </header>
        </div>
        <header className='rightSide'>
            <Link to ="/"> Accueil</Link>
            <Link to ="/sauces"> Nos Sauces</Link>
            <Link to ="/about"> A propos</Link>
            <Link to ="/contact"> Contact</Link>
            <button onClick={toggleNavbar}>
            <AiOutlineMenu />
            </button>
        </header>
      
    </div>
  )
}

export default Navbar;
