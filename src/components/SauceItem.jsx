
import React from "react";
import { GoFlame } from "react-icons/go";

function sauceItem(props) {


  const data = props.datas


  return (
    <div className="sauceItem">
      <div style={{backgroundImage:`url(${data.image})`}}></div>
      <h1> {data.name} </h1>
      <p> €{data.price / 100} </p>
      <div className="Flam">
      <GoFlame />
      <GoFlame />
      <GoFlame />
      <GoFlame />
      <GoFlame />
     <GoFlame />
      
      
      </div>
    </div>
  );
}

export default sauceItem;
