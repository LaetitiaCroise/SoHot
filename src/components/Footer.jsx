import React from 'react';
import { CgInstagram } from "react-icons/cg";
import { FaTwitterSquare } from "react-icons/fa";
import{ FaFacebookSquare } from "react-icons/fa";
import{ RxLinkedinLogo } from "react-icons/rx";
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
          <CgInstagram />
          <FaTwitterSquare />
          <FaFacebookSquare/>
          <RxLinkedinLogo />

         </div>
        <p>&copy; 2023 Sohot.com</p>
    </div>
  )
}

export default Footer
