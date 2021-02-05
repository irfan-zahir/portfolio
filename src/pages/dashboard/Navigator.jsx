import React from 'react'

export default function Navigator({page}) {

    const pages = ['About', 'Work', 'Experience']

    return (
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly', margin:'5px', zIndex:'1',width:'450px', fontSize:'1em',  alignItems:'center', color:'white'}}>
            {pages.map((title,index)=>{
                if(index == page){
                    return(
                        <div key={index} className='navigator-title' style={{display:'flex', flexDirection:'column', alignItems:'center', fontSize:'1.25em',}} >
                            <span style={{color:'#E16541'}}> {title} </span>
                            <div  style={{height:'3px', width:'50%', backgroundColor:'#E16541'}}></div>
                        </div>
                    )
                }else{
                    return (
                        <div key={index} className='navigator-title' >
                            <span>{title}</span>
                        </div>
                    )
                }
            })}
        </div>
    )
}
