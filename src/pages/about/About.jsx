
import { motion } from 'framer-motion';
import React from 'react'
import ProfileImage from './ProfileImage';

export default function About() {

    const containerStyle = {
        width: '95vw', height: window.innerHeight*0.95, position:'relative', 
        marginTop:'25px', marginBottom:'25px', backgroundColor:'#13131355'
    }

    const xStyle = {
        row:{
            height:'100%', display:'flex', flexDirection:'column',justifyContent:'space-evenly'
        },
        column:{
            height:'50%', width:'100%', display:'flex', flexDirection:'row'
        }
    }

    const baseStyle = {
        height:'100%', width:'100%'
    }

    return (
        <>
            <div style={containerStyle} className='about'>
                <div className='hprow' style={xStyle.row}>
                    <div style={xStyle.column}>
                        <motion.div initial={{...baseStyle}}>
                        
                        </motion.div>
                        <ProfileImage/>
                    </div>
                    <div style={xStyle.column}>
                        <motion.div initial={{...baseStyle}}>
                        
                        </motion.div>
                        
                        <motion.div initial={{...baseStyle}}>
                        
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}
