import React, { useState, useRef, useCallback, useLayoutEffect, useEffect } from 'react'
import { motion } from 'framer-motion'
import bg_vid from '../../resources/bg-vid.mp4'
import About from '../about/About'
import ShortIntro from './ShortIntro'
import Works from '../works/Works'
import { scroller } from 'react-scroll'
import ScrollContainer from './ScrollContainer'
import Navigator from './navigator/Wheel'
import Experience from '../experience/Experience'

export default function Dashboard() {

    const [prepping, setPrepping] = useState(true)

    const [showContent, setShowContent] = useState(false)

    const [showNav, setShowNav] = useState(false)
    const [scrollOffset, setScrollOffset] = useState(0)
    const [botCirc, setBotCirc] = useState(false)

    const initMotion = {
        initial: {
            height:'100vh', width:'100vw', backgroundColor:'#1f1f1f', overflow: 'hidden', opacity: '0', transform: 'scaleY(0.01)'
        },
        animate:{
            height: prepping ? '100vh' : '400vh', width:'100vw', position:'absolute', backgroundColor:'#1f1f1f',
            display: 'flex', flexDirection: 'column', alignItems:'center', opacity: '1', overflow:'hidden', transform: 'scaleY(1)'
        },
        transition:{
            duration: 1.5
        }
    }

    // circleMotion

    setTimeout(() => {
        if(prepping) setBotCirc(true)
        setPrepping(false)
    }, 1500);

    const displayContent = () => {
        setShowContent(true)
        setBotCirc(false)
        window.scrollTo({
            top: window.innerHeight/2,
            behavior:'smooth',
        })
    }

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            setScrollOffset(window.pageYOffset)
            if(window.pageYOffset > 450){
                setShowNav(true)
            }else if(window.pageYOffset == 0){
                setBotCirc(true)
            }else{
                setShowNav(false)
                setBotCirc(false)
            }
        })
    },[])

    

    return (
        <>
            {showNav && showContent && <div style={{width:'100%', height:'3em', position:'fixed', top: window.innerHeight/2, right:window.innerWidth/2+150, zIndex:'1', display:'flex', alignItems:'center', justifyContent:'center'}}>
            {console.log(`dashboard ${scrollOffset}`)}
            <Navigator scrollOffset={scrollOffset}/>
            </div>}

            {/* {botCirc &&  <div style={{width:'100%', height:'150px', position:'fixed', bottom: 0, zIndex:'1', display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'#00000055'}}></div>} */}
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
            <Experience/>
        </>
    )
}
  