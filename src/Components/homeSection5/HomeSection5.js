import React from 'react'
import "./homeSection5.css";
import thumbnail from "../../assets/thumbnail.png";
import onlyLogo from "../../assets/onlyLogo.png";
import TransparentButton from '../transparentButton/TransparentButton';
//import bg from "../../assets/shapeCustom.png";

const HomeSection5 = () => {
  return (
    <div>
        <div className='become-part'>
            <h2>Become a part of HypeScout</h2>
            <TransparentButton text={"Join Now"}/>
        </div>
        <div className='influencers-say'>
            <div className='logo1'>
                <img src={onlyLogo} alt='logo'/>
            </div>
            <div className="influencers-say_content">
                <p>What Influencers say about HypeScout</p>
                <img src={thumbnail} alt="thumbnail"/>
            </div>
        </div>
    </div>
  )
}

export default HomeSection5