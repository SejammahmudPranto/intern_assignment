import React from 'react';
import "./transparentbutton.css";

const TransparentButton = ({text}) => {
  return (
    <button type='button' className='button'>{text}</button>
  )
}

export default TransparentButton