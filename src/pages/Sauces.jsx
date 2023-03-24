import React, {useEffect} from 'react';
import { SaucesList } from '../helpers/SaucesList';
import SauceItem from "../components/SauceItem";
import '../styles/Sauces.css';

/*
to do list

quand le scroll atteint 300 ajout 6 items  à saucesList  agir  ligne 33 
comment faire pour faire passer sauce List de 6 à 12 
et quand le scroll attein 600 passe sauce List de 12 à 18 

*/


function Sauces() {
  useEffect(() => {
    console.log('useEffect')
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleScroll() {
    console.log('window.innerHeight', window.innerHeight );
    console.log('document.documentElement.scrollTop',document.documentElement.scrollTop);

    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    console.log('Fetch more list items!');
  }

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
