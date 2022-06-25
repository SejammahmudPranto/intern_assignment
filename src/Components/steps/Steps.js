import React from 'react';
import "./steps.css";

const Steps = ({image,alttext,header, para}) => {
  return (
    <div className='step'>
        <img src={image} alt={alttext}/>
        <h4>{header}</h4>
        <p className='steps_p'>{para}</p>
    </div>
  )
}

export default Steps