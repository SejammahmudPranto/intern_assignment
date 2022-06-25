import React from 'react';
import "./blackbutton.css";

const BlackButton = ({text}) => {
  return (
    <button type="button" className='blackbutton'>{text}</button>
  )
}

export default BlackButton