import React, { useEffect,useState } from 'react'

const Drum = ({letter,sound}) => {
const [isPlay,setIsPlay]=useState(false);


    const play=()=>{
        setIsPlay(true);
        new Audio(sound).play();


        setTimeout(()=>{
            setIsPlay(false);
        },150);
    }

    useEffect(()=>{

       

        document.addEventListener('keypress',(e)=>{

            if(e.key.toLowerCase()===letter.toLowerCase()){
                play();
            }
          
        })

        
        },[]);






  return (

   
    <div className={`drum ${isPlay ?"play" :""}`}   onClick={play}>

        <div className='key'>{letter}</div>

    </div>
    
  )
}

export default Drum