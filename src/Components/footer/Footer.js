import React from 'react';
import "./footer.css";
import hypescoutLogo from "../../assets/Group4.png";
import bdflag from "../../assets/bdflag.png";
import flag2 from "../../assets/flag2.png";
import ytFooter from "../../assets/ytFooter.png";
import twitterFooter from "../../assets/twitterFooter.png";
import fbFooter from "../../assets/fbFooter.png";
import instaFooter from "../../assets/instaFooter.png";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_child_1'>
            <img src={hypescoutLogo} alt='hypescout logo'/>
            <div className='flags'>
                <img src={bdflag} alt='bd flag'/>
                <img src={flag2} alt='flag 2'/>
            </div>
        </div >
        <div className='footer_child'>
            <h4>Company</h4>
            <p>Terms</p>
            <p>Privacy</p>
        </div>
        <div className='footer_child'>
            <h4>Resources</h4>
            <p>Blog</p>
            <p>Case Study</p>
        </div>
        <div className='footer_child'>
            <h4>Influencer</h4>
            <p>Join as Influencer</p>
            <p>HypeSocial</p>
        </div>
        <div className='footer_child'>
            <h4>Advertiser</h4>
            <p>Join as Advertiser</p>
            <p>Hypelink</p>
        </div>
        <div className='footer_child'>
            <h4>Connect</h4>
            <div className='flags'>
                <img src={instaFooter} alt="insta icon"/>
                <img src={fbFooter} alt="fb icon"/>
                <img src={twitterFooter} alt="twitter icon"/>
                <img src={ytFooter} alt="yt icon"/>
            </div>
        </div>

    </div>
  )
}

export default Footer