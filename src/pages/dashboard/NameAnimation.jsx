import React from 'react'

export default function NameAnimation({setShowContent}) {

    return (
        <span className='gradient-text skranji' onClick={()=>setShowContent(false)}>irfan zahir</span>
    )
}
