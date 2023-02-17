import React from 'react';
import { SaucesList } from '../helpers/SaucesList';
import SauceItem from "../components/SauceItem";
import '../styles/Sauces.css';
import { GoFlame } from "react-icons/go";
import LikeDislike from '../components/LikeDislikes';



function Sauces() {


  return (
    <div className='sauces'>
        <h1 className='titleSauces'>Les Sauces</h1>
    
        <div className='SaucesList'>
            {SaucesList.map((sauceItem, key) =>{
            return < SauceItem datas={sauceItem} key={key}/>
        })}
         <LikeDislike />
        </div>

      
    </div>
  );
}

export default Sauces;
