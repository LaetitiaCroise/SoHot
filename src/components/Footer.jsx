import React from 'react';
import { FiInstagram } from "react-icons/fi";
import { FaTwitterSquare } from "react-icons/fa";
import{ FaFacebookSquare } from "react-icons/fa";
import{ RxLinkedinLogo } from "react-icons/rx";
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
          <FiInstagram />
          <FaTwitterSquare />
          <FaFacebookSquare/>
          <RxLinkedinLogo />

         </div>
        <p>&copy; 2023 Sohot.com</p>
    </div>
  )
}

export default Footer
