import React from "react";
import './View3.css';


export default function View3(props) {
    return(
        <div className="View3div">
            <h1>PROJECTS</h1>
            {/*<p>about projects</p>*/}
            <div className="v3">
                <div className="v3Project"> <a href="https://tanya2906.github.io/portfolio/" target="__blank__">
                    <img src='/image/p1.png' alt="" /> </a>
                </div>
                <div className="v3Project"> <a href="https://tanya2906.github.io/Music-player/" target="__blank__">
                    <img src='/image/p2.png' alt="" /> </a>
                </div>
                <div className="v3Project"> <a href="https://tanya2906.github.io/snake-game/" target="__blank__">
                    <img src='/image/p3.png' alt="" /> </a>
                </div>
                <div className="v3Project"> <a href="https://friendly-elf-ab135b.netlify.app/" target="__blank__">
                    <img src='/image/p4.png' alt="" /> </a>
                </div>
                <div className="v3Project"> <a href="https://neon-khapse-89ec65.netlify.app/" target="__blank__">
                    <img src='/image/p5.png' alt="" /> </a>
                </div>
                {/*<div className="v3Project">
                    <img src={IMG} alt="" />
    </div>*/}
            </div>
        </div>
    );
}