import React from 'react';
import "./homeSection7.css";
import sec8pic from "../../assets/sec8pic.png";
import pic1 from "../../assets/pic1.png";
import pic2 from "../../assets/pic2.png";
import pic3 from "../../assets/pic3.png";
import pic4 from "../../assets/pic4.png";
import pic5 from "../../assets/pic5.png";
import TransparentButton from '../transparentButton/TransparentButton';


const HomeSection7 = () => {
  return (
    <div className='section8'>
        <div className='section8_content'>
            <h2>Bangladesh's First Influencer Marketing Platform</h2>
            <TransparentButton text={"Join The Hype"}/>
            <p className='message'>HypeScout works as a bridge between Brands and Influencers </p>
            <div className='section8_content_inner'>
                <img src={sec8pic} alt='Rabby Tawhid'/>
                <div className='section8_content_inner_details'>
                    <h3>Rabby Tawhid</h3>
                    <p>Fashion Blogger</p>
                </div>
            </div>
        </div>
        <div className='section8_images'>
            <div className='section8_images_col1'>
                <img src={pic1} alt='pics1'/>
                <img src={pic2} alt='pics2'/>
                <img src={pic3} alt='pics3'/>
            </div>
            <div className='section8_images_col2'>
                <img src={pic4} alt='pics4'/>
                <img src={pic5} alt='pics5'/>
            </div>
        </div>

    </div>
  )
}

export default HomeSection7