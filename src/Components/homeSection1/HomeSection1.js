import React from 'react';
import "./homesection1.css";
import gifimg from "../../assets/headerimggif.gif";
import ellipse from "../../assets/Group357.png";
import TransparentButton from '../transparentButton/TransparentButton';

const HomeSection1 = () => {
  return (
    <div className="header">
        <div className="header_content">
          <h2>YOU CREATE CONTENTS<br />WE BRING BRANDS</h2>
          <div className="header_content_join">
            {/* <button type="button">Join as Influncer</button> */}
            <TransparentButton text={"Join as Influencer"}/>
            <div className="header_content_demo">
              <img src={ellipse} alt="ellipse" />
              <p>Watch demo</p>
            </div>
          </div>
        </div>
        <div className="header_image">
          <img src={gifimg} alt="gif" />
        </div>
    </div>
  )
}

export default HomeSection1;