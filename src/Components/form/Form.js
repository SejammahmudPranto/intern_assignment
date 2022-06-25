import React from 'react'
//import BlackButton from '../blackButton/BlackButton';
import "./form.css";

const Form = ({text}) => {
  return (
    <div className='form'>
        <div className='form_header'>
            {text}
        </div>
        <select name="position">
            <option value="Influencer">I am an Influencer</option>
            <option value="another">I am an advertiser</option>
        </select>
        <input type={'text'} placeholder='Name'/>
        <input type={'email'} placeholder='Email'/>
        <input type={'number'} placeholder='Phone Number'/>
        <textarea rows={5} placeholder='I would like to know more information about ...'/>
        <button type="button" className='submit-button'>Submit</button>
    </div>
  )
}

export default Form