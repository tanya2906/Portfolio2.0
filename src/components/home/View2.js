import React, { useState } from "react";
import './View2.css';
export default function View2(props) {
    const [more,less]=useState({
        display:"none"
    });
    const[button,setButton]=useState({
        display:"block"
    });
   function MORE() {
       setButton({
        display:"none"
       });
       less({
        display:"block"
       });
   }
    return(
        <div className="View2div">
            <div className="v2">
                <h1>Skills</h1>
                <p className="v2p1">Below are some of my skills that I have aquired thus far in my computer science career and I'm always looking to learn more.</p>
                <div>
                    
                        <div className="container">
                            <div className="card">
                                <div className="percent" >
                                    <svg>
                                        <circle cx={70} cy={70} r={70}></circle>
                                        <circle cx={70} cy={70} r={70} className="html"></circle>
                                    </svg>
                                </div>
                                <p>80% <br/>HTML</p>
                                
                            </div>
                            <div className="card">
                                <div className="percent" >
                                    <svg>
                                        <circle cx={70} cy={70} r={70}></circle>
                                        <circle cx={70} cy={70} r={70} className="css"></circle>
                                    </svg>
                                </div>
                                <p>80%<br/>CSS</p>
                            </div>
                            <div className="card">
                                <div className="percent" >
                                    <svg>
                                        <circle cx={70} cy={70} r={70}></circle>
                                        <circle cx={70} cy={70} r={70} className="js"></circle>
                                    </svg>
                                </div>
                                <p>70% <br/>Javascript</p>
                            </div>
                            <div className="card">
                                <div className="percent" >
                                    <svg>
                                        <circle cx={70} cy={70} r={70}></circle>
                                        <circle cx={70} cy={70} r={70} className="react"></circle>
                                    </svg>
                                </div>
                                <p>60% <br/>React</p>
                            </div>
                        </div>
                    
                    
                </div>
                <button className="v2button" onClick={MORE} style={button}>More</button>
                <div className="moreSkills" style={more}>
                    
                        <div className="container">
                            <div className="card">
                                <div className="percent" >
                                    <svg>
                                        <circle cx={70} cy={70} r={70}></circle>
                                        <circle cx={70} cy={70} r={70} className="cpp"></circle>
                                    </svg>
                                </div>
                                <p>80% <br/>C++</p>
                                
                            </div>
                           {/*  <div className="card">
                                <div className="percent" >
                                    <svg>
                                        <circle cx={70} cy={70} r={70}></circle>
                                        <circle cx={70} cy={70} r={70} className="java"></circle>
                                    </svg>
                                </div>
                                <p>60%<br/>Java</p>
                            </div> */}
                            {/* 
                            <div className="card">
                                <div className="percent" >
                                    <svg>
                                        <circle cx={70} cy={70} r={70}></circle>
                                        <circle cx={70} cy={70} r={70} className=""></circle>
                                    </svg>
                                </div>
                                <p>70% <br/>Javascript</p>
                            </div>
                            <div className="card">
                                <div className="percent" >
                                    <svg>
                                        <circle cx={70} cy={70} r={70}></circle>
                                        <circle cx={70} cy={70} r={70} className="react"></circle>
                                    </svg>
                                </div>
                                <p>60% <br/>React</p>
                            </div>
                            */}
                        </div>
                    
                    
                </div>
            </div>
        </div>
    );
}