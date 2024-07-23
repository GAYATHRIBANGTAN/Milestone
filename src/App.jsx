import { useState } from 'react'
import "./App.css";
import Slider from './components/Slider.jsx';
import BuildAssistance from './components/BuildAssistance.jsx';
import Milestone from './components/Milestone.jsx';
import Form from './components/Form.jsx'
import Copyright from './components/Copyright.jsx'



function App() {
  

  return (
    <>
    <div className="fixed_Bar">
     <div className='navigation'>
     <img  id ="img" src="/images/MILESTONElogo.png" alt="logo"></img>
     <span id="title">MILESTONE Promoters</span>
     <img id="search" src="/images/icons8-search-50.png" alt="search"></img>
     <img id="menu" src="/images/icons8-menu-50.png" alt="menu"></img>
     </div>
     </div>
     <Slider/>
     <BuildAssistance/>
     <Milestone/>
     <Form/>
     <Copyright/>
    </>
  )
}

export default App
