
import React from "react";
import React, { useState, useEffect } from 'react';
import LikeDislike from '../components/LikeDislikes';



function sauceItem(props) {
  

const data = props.datas


  return (
    
    <div className="sauceItem">
      <div className="imagesSauces">
      <div style={{backgroundImage:`url(${data.image})`}}></div>
      </div>
      <h1> {data.name} </h1>
      {/* <p> €{data.price / 100} </p> */}
      
      <div className="Flam">
      <LikeDislike />

      </div>

    </div>
   
  );
}

export default sauceItem;
