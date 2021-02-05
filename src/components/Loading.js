import React from 'react'
import Typing from 'react-typing-animation'

export default function Loading({style}) {
    return (
        <div style={{...style}}>
            <div className='center-row'>
                <div className='center-col'>
                    <Typing speed={2}>
                        Creating the best scene...
                    </Typing>
                </div>
            </div>
        </div>
    )
}
