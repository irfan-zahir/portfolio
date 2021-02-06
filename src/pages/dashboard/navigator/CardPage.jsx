import React from 'react'

function get_coords(theta, radius){
    return{
        x: Math.cos(theta)*radius,
        y: Math.sin(theta)*radius,
    }
}

function CardPage(props) {
    let new_coords = get_coords(props.theta, props.radius)
    return (
        <div className='intro-name londrina' style={{...style, left:`${props.center.x + new_coords.x}px`, top:`${props.center.y - new_coords.y}px`,
        transform:`translate(-50%,-50%) rotate(${-props.recenter+90}deg)`,}}>
            {props.page}
        </div>
    )
}


const style = {
    position: 'absolute',
    top:'50%',
    left:'50%',
    height:'2em',
    color: 'white',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    fontSize: '3em'
}

export default CardPage
