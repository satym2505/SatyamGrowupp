import React from 'react'
import './page.css'
import Header from './Header';
import { FaPlayCircle } from "react-icons/fa";
import H2 from './H2';
import s1 from './img/s1.png'
import s2 from './img/s2.png'
import s3 from './img/s3.png'

const Page = () => {
    return (

        <>


            <div class="area" >
                <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <center>
                    <Header />
                </center>
                <div id='popo'>
                    <div id='pg'>
                        <h1>We Create Results So You <br /> Focus On The Process.</h1>
                        <h4>Start today with Growupp. We provide students with optimum <br />and best result seeking strategies.</h4>
                        <div id='btn'><h3>Start </h3><FaPlayCircle id='icon' /> </div>
                    </div>
                    <div id='box'>
                        <img className="b fade-in" src={s1} />
                        <img className="b fade-in1" src={s2} />
                        <img className="b fade-in2" src={s3} />
                    </div>
                </div>
                <center>
                    <H2 />
                </center>

            </div >

        </>
    )
}

export default Page
