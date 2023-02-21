import React from 'react';
import { SaucesList } from '../helpers/SaucesList';
import SauceItem from "../components/SauceItem";
import '../styles/Sauces.css';




function Sauces() {


  return (
    <div className='sauces'>
        <h1 className='titleSauces'>Les Sauces</h1>
    
        <div className='SaucesList'>
            {SaucesList.map((sauceItem, key) =>{
            return < SauceItem datas={sauceItem} key={key}/>
        })}
        </div>

      
    </div>
  );
}

export default Sauces;
