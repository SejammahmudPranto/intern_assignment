import React from 'react'
import "./successStory.css";

const SuccessStory = ({image, icon, para}) => {
  return (
    <div className='success-story'>
        <img className='success-story_img' src={image} alt="img" />
        <div className='success-story_content'>
            <img className='success-story_icon' src={icon} alt="icon"/>
            <p className='succes-story_p'>{para}</p>
            <a href='/'>Read Case Study...</a>
        </div>
    </div>
  )
}

export default SuccessStory