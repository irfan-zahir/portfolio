import { motion } from 'framer-motion';
import React from 'react'
import { Button } from 'react-bootstrap';

export default function ShortIntro({setShowContent}) {

    const containerMotion = {
        initial:{
            width: '100%', height: '100vh', 
            display: 'flex', alignItems:'center', justifyContent:'center',
            opacity: '0', fontSize:'0.01em'
        },
        animate:{
            width: '100%', height: '100vh', flexDirection:'column',
            display: 'flex', alignItems:'center', justifyContent:'center',
            opacity: '1', fontSize:'1em'
        },
        transition:{
            duration:0.7,
            delay:0.2
        },
    }

    const name = 'Irfan Zahir'
    return (
        <motion.div initial={containerMotion.initial} animate={containerMotion.animate} transition={containerMotion.transition}>
            
            <span className='londrina' style={{color:'white', fontSize:'3em', textAlign:'center',}}>
                Hello, I'm 
                <span className='intro-name' style={{marginLeft:'15px'}} onClick={()=>setShowContent()}>
                    {name.split("").map( (word, index) => <span className='words' key={index} >{word}</span> )}
                </span>
                . <br/>
                <span className='londrina' style={{color:'white', fontSize:'1em', textAlign:'center'}}>
                    I'm a full-stack Web and Mobile Developer
                </span>
            </span>

        </motion.div>
    )
}
