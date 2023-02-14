import React from 'react';
import { SaucesList } from '../helpers/SaucesList';

function Sauces() {
  return (
    <div className='sauces'>
        <h1 className='titleSauces'>Les Sauces</h1>
        <div className='SaucesList'>{SaucesList.map((sauceItem, key) =>{
            return <div> { sauceItem.name} </div>;
        })}
        </div>

      
    </div>
  )
}

export default Sauces
