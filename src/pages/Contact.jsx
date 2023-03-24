import React from 'react';
import { useForm } from 'react-hook-form';
import Sharp from '../assets/sharp.jpg';
import '../styles/Contact.css';


function Contact() {
 const { handleSubmit, register, reset, formState: {}} = useForm ()

 
 function onSubmit (data) {

  reset();
  alert ('messages envoyé !')
 }
  return (
    <div className='contact'>
        <div className='leftSide' style={{backgroundImage: `url(${Sharp})`}}></div>
        <div className='rightSide'>
            <h1>Contact</h1>
            <form onSubmit = {handleSubmit(onSubmit)} id="contact-form" method='POST'>
                <label htmlFor="name"> Nom</label>
                <input name="name" placeholder=''type="text"{...register("name", {required : true})}/>
                <label htmlFor="email"> Email</label>
                <input name="email" placeholder=''type="email" {...register("email",{required : true})}/>
                <label htmlFor="message">Message</label>
                <textarea rows="10 
                " placeholder='' name="message" required {...register("message",{required : true})}>
             </textarea>
             <button type="submit"> Envoyez !</button>
                

            </form>
        </div>

      
    </div>
  )
}

export default Contact
