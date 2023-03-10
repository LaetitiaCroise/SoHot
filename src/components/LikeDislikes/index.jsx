import React, { useState } from "react";
import './LikeDislike.css';
import { AiFillLike, AiFillDislike} from 'react-icons/ai'



function likeDislike() {
    const [like,setlike] = useState(10)
    const [dislike,setdislike] = useState(4)
    
    const [likeactive,setlikeactive] = useState(false)
    const [dislikeactive,setdislikeactive] = useState(false)



    function likef(){
        if(likeactive){
            setlikeactive(false)
            setlike(like-1)
            alert('merci pour votre avis')
            
            
        } else{
            setlikeactive(true)
            setlike(like+1)
            alert('merci pour votre avis')
            if(dislikeactive){
                setdislikeactive(false)
                setlike(like+1)
                setdislike(dislike-1)
                
                
            }

        }
    }
    function dislikef(){
        if(dislikeactive){
            setdislikeactive(false)
            setdislike(dislike-1)
            localStorage.setDislike('dislike', JSON.stringify(dislike));
            alert('merci votre avis')
        } else{
            setdislikeactive(true)
            setdislike(dislike+1)
            alert('merci pour votre avis')
            if (likeactive){
                setlikeactive(false)
                setdislike(dislike+1)
                setlike(like-1)
                
            }

        }
    }

    return(
        <>
        {/* <div className="likeDislikeM"></div> */}
        
        <button onClick={likef} className={[likeactive ? 'active-like':null,'button'].join('')}><AiFillLike />{like}</button>
        <button onClick={dislikef} className={[dislikeactive ? 'active-dislike':null, 'button'].join('')}><AiFillDislike />{dislike}</button>
        
      
        </>
        
    );
}
export default likeDislike;