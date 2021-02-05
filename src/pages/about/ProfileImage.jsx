
import React, { useState } from 'react'
import { Carousel, Image } from 'react-bootstrap'
import image1 from '../../resources/profileImage/1.jpg'
import image2 from '../../resources/profileImage/2.jpg'
import image3 from '../../resources/profileImage/3.jpg'
import image4 from '../../resources/profileImage/4.jpg'

export default function ProfileImage() {

    const [imageHover, setImageHover] = useState(false)

    const imageStyle = {
        width:'550px', height:'350px', 
        transition:'transform 0.9s', transform: imageHover ? 'scale(1.5)' : 'scale(1)', 
        objectFit:'cover'
    }

    return (
        <div style={{height:'100%', width:'100%', display:'flex', justifyContent:'center', alignItems:'center',
         }}>
            <Carousel style={{width:'550px', height:'350px', zIndex:'0', boxShadow:'7px 10px 6px #0000005f'}} controls={false} indicators={false} interval={4000}>
                <Carousel.Item>
                    <Image src={image1} style={imageStyle} rounded
                    onMouseEnter={()=>setImageHover(true)} onMouseLeave={()=>setImageHover(false)} />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={image2} style={{...imageStyle, transform: imageHover ? 'scale(1.5) translateY(60px)' : 'scale(1)'}} 
                    onMouseEnter={()=>setImageHover(true)} onMouseLeave={()=>setImageHover(false)} rounded/>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={image3} style={imageStyle} rounded
                    onMouseEnter={()=>setImageHover(true)} onMouseLeave={()=>setImageHover(false)} />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={image4} fluid style={{...imageStyle, transform: imageHover ? 'scale(1.5) translateY(-45px)' : 'scale(1)'}} 
                    onMouseEnter={()=>setImageHover(true)} onMouseLeave={()=>setImageHover(false)} rounded/>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
