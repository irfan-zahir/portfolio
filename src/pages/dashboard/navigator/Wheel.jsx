import { transform } from 'framer-motion'
import React, { Component } from 'react'
import CardPage from './CardPage'

export class Navigator extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            radius: 250,
            cards: [],
            scrollOffset: props.scrollOffset
        }

        this.temp_theta = 0.0
        this.pages = ['about', 'works', 'extras']
    }

    render() {
        
        return (
            <div ref={ref_id => this.wheel = ref_id} style={{...styles.wheel, transform:`translate(-50%, -50%) rotate(${(this.props.scrollOffset/window.innerHeight*180)-90}deg)`}}>
                {this.pages.map((page,index)=>{
                    const theta = Math.PI/2 * index
                    const recenter = (this.props.scrollOffset/window.innerHeight*180)
                    const radius = this.state.radius
                    const center = {
                        x: parseFloat(400)/2.0,
                        y: parseFloat(400)/2.0,
                    }
                    return(
                        <CardPage theta={theta} radius={radius} center={center} key={index} page={page} recenter={recenter} />
                    )
                })}
            </div>
        )
    }
}

const styles = {
    wheel:{
        position: 'absolute',
        top:'50%',
        left:'50%',
        height:'400px',
        width:'400px',
        // backgroundColor:'royalblue',
        transform:'translate(-50%,-50%)',
        borderRadius: '50%'
    }
}

export default Navigator
