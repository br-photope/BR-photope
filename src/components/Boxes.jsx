import React from 'react'
import './Boxes.css';

export default function Boxes(props) {
  return (
    <>
        <div className='boxo'>
            <p id='value'>
                {props.value} 
            </p>
            
            <p id='text'>
                {props.heading}
            </p>
        </div>
    
    
    
    
    
    </>
  )
}
