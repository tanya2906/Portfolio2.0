import React from "react";
import './MoreDiv.css';
import {ImCross} from 'react-icons/im';
export default function MoreDiv(props) {
    return(
        <div className="moreDiv" style={props.h2}>
          <ul>
          <li >
              <a href="/"> Home </a>
            </li>
            <li>
              <a href="/skills"> Skills</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            
            <li><a href="/contact">Let's Connect</a></li>
            <li>
              <ImCross onClick={props.displayHeader}/>
                {/*<img src={Close} alt="X" onClick={props.displayHeader}/>*/}
            </li>
          </ul>
        </div>
    );
}