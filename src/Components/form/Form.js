import React from 'react'
import "./form.css";
import { useFormik } from 'formik';

const initialValues = {
  name: "",
  email: "",
  channel: "",
}

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "required";
  }
  if (!values.email) {
    errors.email = "required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.channel) {
    errors.channel = "required";
  }
  return errors;
}
const onSubmit = (values) => {
  console.log('form datas', values)
}


const Form = ({text}) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });


  return (
    <div className='form'>
        <div className='form_header'>
            {text}
        </div>
        <form onSubmit={formik.handleSubmit}>
          <select name="position">
              <option value="Influencer">I am an Influencer</option>
              <option value="another">I am an advertiser</option>
          </select>
          <input 
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          placeholder="Name"
          />

          {(formik.errors.name && formik.touched.name) ? <div className="error">{formik.errors.name}</div> : null}

          <input 
          type="text"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
          placeholder="Email"
          />

          {(formik.errors.email && formik.touched.email) ? <div className="error">{formik.errors.email}</div> : null} 


          <input 
          type="text"
          id="channel"
          name="channel"
          onChange={formik.handleChange}
          value={formik.values.channel}
          onBlur={formik.handleBlur}
          placeholder="Phone Number"
          />

          {(formik.errors.channel && formik.touched.channel) ?  <div className="error">{formik.errors.channel}</div> : null}

          <textarea rows={5} placeholder='I would like to know more information about ...'/>
          <button type="submit" className='submit-button'>Submit</button>
        </form>
    </div>
  )
}

export default Form