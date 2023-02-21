import React from 'react';
import Chilli from "../assets/chilli.jpg";
import '../styles/About.css';


function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{ backgroundImage:`url(${Chilli})` }}>
        </div>
        <div className='aboutBottom'>
            <h1> A propos de nous </h1>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Delectus consequatur maiores repellendus, nisi quisquam tempora odio. 
                Maxime suscipit et asperiores. Et tempora inventore ad ea, suscipit nam! Omnis, cumque facilis?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore illum ipsum nemo accusamus doloremque veritatis quaerat consectetur qui ex doloribus ullam harum neque, pariatur debitis, consequatur, possimus deleniti suscipit quam.</p>

        </div>
      
    </div>
  )
}

export default About;
