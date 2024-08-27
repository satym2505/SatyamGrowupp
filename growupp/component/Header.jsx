import React from 'react'
import "./Header.css";
const Header = () => {
  return (
    <>
      <div id='nav'>
        <div id='ll1'>
          <img id='logo' src='https://growupp.in/Home/image/grow%20up%20image%201.png' />
        </div>
        <div id='ll2'>
          <ul>
            <li className='li1'>Home</li>
            <li className='li1'>About</li>
            <li className='li1'>Career</li>

          </ul>
        </div>
        <div id='ll3'>
          <h2>Contact us</h2>
        </div>
        

      </div>



    </>
  )
}

export default Header
