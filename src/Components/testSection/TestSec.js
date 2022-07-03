import React from 'react'
import "./testSec.css";
import logo from "../../assets/onlyLogo.png";
import thumbnail from "../../assets/thumbnail.png";

const TestSec = () => {
  return (
    <div className='mainSec'>
        <div className='subSec1'>
            <img src={logo} alt="logo"/>
        </div>
        <div className='subSec2'>
            <h2>
            What Influencers Say About HypeScout
            </h2>
            <img src={thumbnail} alt='thumbnail'/>
        </div>
    </div>
  )
}

export default TestSec