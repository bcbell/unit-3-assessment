import React from 'react'
import './Circles.css'

const Circles =(props)=>{
    return(
        <div className='Circles'>
            {props.circleNo.map((circle, idx)=>
           <div className={props.selectedCircleIdx === idx ? 'selected' : 'color'} onClick={()=>props.handleCircleSelection(idx)} key={circle} alt=''>{idx}</div>
            )}
        </div>
    )
}

export default Circles