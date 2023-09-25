import React from 'react';
import './Header.css';
import {FiMoreVertical}from 'react-icons/fi';
export default function Header(props){
    
  return(
    
    <div className='headerDiv' style={props.h1}>
        <ul className='logoDiv'>
            <li className='logo' ><a href="/">TANYA</a></li>
        </ul>
        <ul className='menu'>
            <li >
              <a href="/"> Home </a>
            </li>
            <li>
              <a href="/skills"> Skills</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
                <button><a href="/contact" >Let's Connect</a></button>
            </li>
        </ul>
        <ul className='more'>
            <li>
              <FiMoreVertical onClick={props.displayHeader} className='moreIcon'/>
                {/*<img src={more} alt='...' onClick={props.displayHeader}/>*/}
            </li>
        </ul>
    </div>
   
  );
}
