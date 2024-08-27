import React from 'react'
import './Footer.css'
import { PiTelegramLogoDuotone } from "react-icons/pi";
const Footer = () => {
    return (
        <>
            <div id="f">
                <div id='f1'>
                <img id='logo2' src='https://growupp.in/Home/image/grow%20up%20image%201.png' />
                <p>Your study care center , to build your bright career. Grow with <br/>Growupp Stay connected with us!</p>
                <h1>
                    Follow us
                </h1>
                
                

<img src='https://static.vecteezy.com/system/resources/previews/018/930/691/non_2x/instagram-logo-instagram-icon-transparent-free-png.png' className='social'/>
<img src='https://static.vecteezy.com/system/resources/previews/042/148/637/non_2x/linkedin-logo-linkedin-social-media-icon-free-png.png' className='social'/>
<p>© All Right Reserved<span id='sp1'> Growupp</span></p>
   
                </div>
                <div id='f2'>
                <h2>
                    Useful Links
                </h2>
                <div className='bor'></div>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Career</li>
                        <li>Contact Us</li>
                        <li>Terms and Conditions</li>
                    </ul>
                </div>
                <div id='f3'>
                <h2>
                    Contact
                </h2>
                <div className='bor'></div>
                    <p>
                        Don’t miss to Contact to our new feeds, kindly fill <br/>the form below.</p>
                        <div id='inpsec'>
                        <input id='t' placeholder='Email Address'></input>
                        <div id='inp'><PiTelegramLogoDuotone id='ic1'/></div>
                        </div>
                    
                </div>
            </div>
        </>
    )
}

export default Footer
