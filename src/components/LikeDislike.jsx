import React, { useState } from "react";



function likeDislike(){
    const [like,setlike] = useState(100)
    const [dislike,setdislike] = useState(4)
    
    const [likeactive,setlikeactive] = useState(false)
    const [dislikeactive,setdislikeactive] = useState(false)

    function likef(){
        if(likeactive){
            setlikeactive(false)
            setlike(like-1)
        } else{
            setlikeactive(true)
            setlike(like+1)
            if (dislikeactive){
                setdislikeactive(false)
                setlike(like+1)
                setdislike(dislike-1)
            }

        }
    }
    function dislikef(){
        if(dislikeactive){
            setdislikeactive(false)
            setdislike(like-1)
        } else{
            setdislikeactive(true)
            setdislike(like+1)
            if (likeactive){
                setlikeactive(false)
                setdislike(like+1)
                setlike(dislike-1)
            }

        }
    }

    return(
        <React.Fragment>
        <div className="likeDislikeM"></div>
        <div></div>
        <button onClick={likef} className={[likeactive ? 'active-like':null,'button'].join('')}>Like{like}</button>
        <button onClick={dislikef} className={[dislikeactive ? 'active-dislike':null 'button'].join('')}>Dislike{dislike}</button>
        <div></div>
        </React.Fragment>
        
    );
}
export default likeDislike;