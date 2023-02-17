import React from 'react';
import Sharp from '../assets/sharp.jpg';
import '../styles/Contact.css';
function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={{backgroundImage: `url(${Sharp})`}}></div>
        <div className='rightSide'>
            <h1>Contact</h1>
            <form id="contact-form" method='POST'>
                <label htmlFor="name"> Nom</label>
                <input name="name" placeholder=''type="text"/>
                <label htmlFor="email"> Email</label>
                <input name="email" placeholder=''type="email"/>
                <label htmlFor="message">Message</label>
                <textarea rows="6" placeholder='' name="message" required>
             </textarea>
             <button type="submit"> Envoyez !</button>
                

            </form>
        </div>

      
    </div>
  )
}

export default Contact
