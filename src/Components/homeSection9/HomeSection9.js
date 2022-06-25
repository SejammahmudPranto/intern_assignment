import React from 'react';
import Form from '../form/Form';
import "./homeSection9.css";
import locationIcon from "../../assets/locationIcon.png";
import msgIcon from "../../assets/msgIcon.png";
import callIcon from "../../assets/callIcon.png";




const HomeSection9 = () => {
  return (
    <div className='contact-section'>
        <div className='drop-message_form'>
            <Form text={"Drop us a message"}/>
        </div>
        <div className='contact-ways'>
            <div>
                <img src={msgIcon} alt='msg icon'/>
                <p>support@hypescout.com</p>
            </div>
            <div>
                <img src={callIcon} alt='call icon'/>
                <p>(+880)1320761236</p>
            </div>
            <div>
                <img src={locationIcon} alt='msg icon'/>
                <p>House 11, J Block, Baridhara, Notun Bazar, Dhaka - 1212</p>
            </div>
        </div>

    </div>
  )
}

export default HomeSection9