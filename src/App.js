import React, { useState } from 'react';
import Header from './components/Header1';
import './App.css';
import MoreDiv from './components/MoreDiv';

import {
  BrowserRouter as Router,Routes,Route
  } from "react-router-dom";
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Portfolio from './components/home/Portfolio';
export default function App() {
  const [h1,setH1]=useState({
    display:"flex"
  });
  const [h2,setH2]=useState({
    display:"none"
  });
  function displayHeader() {
    if(h1.display==='flex'&& h2.display==='none')
    {
      setH1(
        {
          display:"none"
        }
      );
      setH2(
        {
          display: 'flex'
        }
      );
    }
    else if(h2.display==='flex'&& h1.display==='none')
    {
      setH1(
        {
          display:"flex"
        }
      );
      setH2(
        {
          display:"none"
        }
      );
    }
    
  }
  return(
    <Router>
    <div className='app'>
      
    <Header h1={h1} displayHeader={displayHeader}/>
    
    <MoreDiv h2={h2} displayHeader={displayHeader} />
    
    <Routes>
    <Route path='/' Component={Home}></Route>
    <Route path='/skills' Component={Skills}></Route>
    <Route path='/projects' Component={Projects}></Route>
    <Route path='/contact' Component={Contact}></Route>
    <Route path='/portfolio' Component={Portfolio}></Route>
    </Routes>
    </div>
    </Router>
  );
}