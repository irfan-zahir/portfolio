import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import { useSpring, animated } from 'react-spring'
import landing from './resources/landing.svg'
import twitter from './resources/icons/twitter.png'
import telegram from './resources/icons/telegram.png'
import github from './resources/icons/github.png'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import bg_vid from './resources/bg-vid.mp4'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.125]
const imgcalc = (x, y) => [-(y - window.innerHeight / 2) / 25, (x - window.innerWidth / 2) / 25, 1.075]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function Landing() {

  const [props, set] = useSpring(() => ({ 
    xys: [0, 0, 1], config: { mass: 10, tension: 350, friction: 40 },
  }))

  const [imgprops, setimg] = useSpring(() => ({ 
    xys: [0, 0, 1], config: { mass: 10, tension: 350, friction: 40 },
  }))

  return (
    <>
    <video autoPlay muted loop className='bg-vid'>
      <source src={bg_vid} type='video/mp4' ></source>
    </video>
    <motion.div className='landing-container' initial={{opacity:0}} animate={{opacity:1}} 
    transition={{staggerChildren:'2'}}>
      <motion.div initial={{opacity:0, transform:'scale(0.5)'}} animate={{opacity:1, transform:'scale(1)'}} 
      exit={{opacity:0, transform: 'scale(5)'}} transition={{duration: 1, ease:'easeIn'}}>
        <NavLink style={{textDecoration:'none'}} to='/my-portfolio'>
          <animated.div
            className="card"
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans), borderRadius:'25px', backgroundClip:'white', border:'10px solid silver'}}
          >
            <animated.img src={landing} className='landing-image' 
              onMouseMove={({ clientX: x, clientY: y }) => setimg({ xys: imgcalc(x, y) })}
              onMouseLeave={() => setimg({ xys: [0, 0, 1] })}
              style={{ transform: imgprops.xys.interpolate(trans)}}
            />
          </animated.div>
        </NavLink>
        <br/>
        <Row>
          <Col sm={4}>
            <div className='l-text d-flex' onClick={()=>window.location.replace('http://www.twitter.com/_irfanzahir')}>
              <Image src={twitter} height={21} /> _irfanzahir
            </div> 
          </Col>
          <Col sm={4}>
            <div className='l-text d-flex' onClick={()=>window.location.replace('https://github.com/irfan-zahir')}>
              <Image src={github} height={21} /> irfan-zahir
            </div> 
          </Col>
          <Col sm={4}> 
            <div className='l-text d-flex' onClick={()=>window.location.replace('https://t.me/irfanzahir')}>
              <Image src={telegram} height={21} /> irfanzahir
            </div> 
          </Col>
        </Row>
      </motion.div>
      <motion.div animate={{top:'0%', left:'0%', height:'0%', width:'0%', borderBottomRightRadius:'100%'}} 
      exit={{height:'100%', width:'100%', position:'absolute', backgroundColor:'#1f1f1f',}}
      transition={{duration: 1.5, delay:0.5}}/>
    </motion.div>
    </>
  )
}

export default Landing;


//TODO