import React from 'react';
import Faq from '../faq/Faq';
import "./homeSection8.css";

const HomeSection8 = () => {
  return (
    <div className='section9'>
        <h2>FAQ</h2>
        <div className='section9_faqs'>
            <Faq question={"What is HypeScout?"}/>
            <Faq question={"How can I collaborate with brands on HypeScout?"}/>
            <Faq question={"What are the difference between micro influencers and featured influencers?"}/>
            <Faq question={"How do I get payment from HypeScout?"}/>
            <Faq question={"I have more questions"}/>
            
        </div>
    </div>
  )
}

export default HomeSection8