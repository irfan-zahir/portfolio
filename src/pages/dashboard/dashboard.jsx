import React, { useState, useRef, useCallback, useLayoutEffect, useEffect } from 'react'
import { motion } from 'framer-motion'
import bg_vid from '../../resources/bg-vid.mp4'
import About from '../about/About'
import ShortIntro from './ShortIntro'
import Works from '../works/Works'
import { scroller } from 'react-scroll'
import ScrollContainer from './ScrollContainer'
import Navigator from './Navigator'

export default function Dashboard() {

    const [prepping, setPrepping] = useState(true)

    const [showContent, setShowContent] = useState(false)

    const [showNav, setShowNav] = useState(false)

    const [currPage, setCurrPage] = useState(0)

    const initMotion = {
        initial: {
            height:'100vh', width:'100vw', borderBottomRightRadius:'100%', backgroundColor:'#1f1f1f', overflow: 'hidden'
        },
        animate:{
            height: '400vh', width:'100vw', position:'absolute', backgroundColor:'#1f1f1f', borderBottomRightRadius:'0%', 
            display: 'flex', flexDirection: 'column', alignItems:'center', opacity: '1', overflow:'hidden',
        },
        transition:{
            duration: 1
        }
    }

    setTimeout(() => {
        setPrepping(false)
    }, 1000);

    const displayContent = () => {
        setShowContent(true)
        window.scrollTo({
            top: window.innerHeight/2,
            behavior:'smooth',
        })
    }

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(window.pageYOffset > 500){
                setShowNav(true)
                const page = (3*window.pageYOffset/window.innerHeight)
                setCurrPage(Math.round(page)-2)
            }else{
                setShowNav(false)
            }
        })
    },[])

    return (
        <>
            {
                prepping && <video autoPlay muted loop className='bg-vid'>
                <source src={bg_vid} type='video/mp4' ></source>
                </video>
            } 
            {showNav && <div style={{width:'100%', height:'3em', position:'fixed', top: 0, zIndex:'1', display:'flex', alignItems:'center', justifyContent:'center',}}>
                <Navigator page={currPage}/>
            </div>}
            <ScrollContainer scrollIntertia={50}>
                <motion.div initial={initMotion.initial} animate={initMotion.animate} transition={initMotion.transition}>
                    {!prepping && <>
                            <ShortIntro setShowContent={displayContent} showContent = {showContent} />
                            {showContent && <Content/>}
                    </>}
                </motion.div>
            </ScrollContainer>
        </>
    )
}

function Content(){
    return (
        <>
            <About/>
            <Works/>
        </>
    )
}
  