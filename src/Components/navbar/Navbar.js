import React, { useState } from 'react';
import './navbar.css';
import logo from "../../assets/Group4.png";
import BlackButton from '../blackButton/BlackButton';
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({children}) => {
  // eslint-disable-next-line no-unused-vars
  const [toggleMenu, setToggleMenu] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const handleMenuBar = () => {
    if (toggleMenu) {
      setToggleMenu(false);
    } else {
      setToggleMenu(true);
    }
  }
  console.log({toggleMenu});

  return (
    <>
    <div className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="nav_list">
          <li><a href='/'>Influencer</a></li>
          <li><a href='/'>Brands</a></li>
          <li><a href='/'>HypeSocial</a></li>
          <li><a href='/'>Success Stories</a></li>
        </ul>
        <div className="login_getstarted">
          <p><a href="./login">Login</a></p>
          <BlackButton text={"Get Started"}/>
          <div className='menubar'>
            {toggleMenu ? <FaTimes onClick={()=> (setToggleMenu(false))}/> : <FaBars onClick={()=> (setToggleMenu(true))}/>}
          </div>
        </div>        
    </div>
    { toggleMenu ? 
        <div>
            <ul className="nav_list-mobile">
                <li><a href='/'>Influencer</a></li>
                <li><a href='/'>Brands</a></li>
                <li><a href='/'>HypeSocial</a></li>
                <li><a href='/'>Success Stories</a></li>
            </ul>
        </div> :
        <div className='main'>
        {children}
        </div>

    }
    
    
    </>
  )
}

export default Navbar;