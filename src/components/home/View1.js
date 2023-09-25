import React from "react";
import V1img from './image1.png';
import './View1.css';
import {BsFillArrowRightCircleFill} from "react-icons/bs";
export default function View1(props) {
    return(
        <div className="view1Div">
            <div className="v1D1">
                <button><a href="/Portfolio">Welcome to my Portfolio</a></button>
                <h1>Hi! I'm Tanya</h1>
                <article>I am a front-end web developer.</article>
                <span>
                    <p> <a href="/Contact" className="button">Let's Connect</a></p>
                    <BsFillArrowRightCircleFill className="vi1"/>
                    {/*<img src={Arrow} alt=">" className="vi1"/>*/}
                </span>
                
                <img src={V1img} alt="image1" className="vi2"/>
                
            </div>{/* 
           <div className="v1D2">
            <img src={V1img} alt="image1" className="vi3"/>
           </div>
           */}
        </div>
    );
}