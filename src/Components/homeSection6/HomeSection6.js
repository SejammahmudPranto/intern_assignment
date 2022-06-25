import React from 'react';
import "./homeSection6.css";
import pathaoLogo from "../../assets/pathaoLogo.png";
import addatimesLogo from "../../assets/addatimesLogo.png";
import dominosLogo from "../../assets/dominosLogo.png";
import kaykraftLogo from "../../assets/kaykraftLogo.png";
import TransparentButton from '../transparentButton/TransparentButton';

const HomeSection6 = () => {
  return (
    <div className='brands-waiting'>
        <h2>Top Brands Are Waiting For You</h2>
        <TransparentButton text={"Get Brand Collaborations"}/>
        <div className='brand-logos'>
            <img src={pathaoLogo} alt="pathaoLogo"/>
            <img src={addatimesLogo} alt="addatimesLogo"/>
            <img src={dominosLogo} alt="dominosLogo"/>
            <img src={kaykraftLogo} alt="kaykraftLogo"/>
        </div>
    </div>
  )
}

export default HomeSection6