import React, { useState } from 'react';
import "./faq.css";
import icon from "../../assets/plusicon.png";

const Faq = ({question, answer}) => {
  const [showAnswer, setShowAnser] = useState(false);

  const handleShow= () => {
    if (showAnswer) {
      setShowAnser(false);
    } else {
      setShowAnser(true);
    }
  }

  return (
    <>
    <div className='faq' onClick={handleShow}>
        <p>{question}</p>
        <img src={icon} alt='icon'/>
        
    </div>
    <div>
      {showAnswer && <div className='answer'>Dummytext</div>}
    </div>
    </>
  )
}

export default Faq