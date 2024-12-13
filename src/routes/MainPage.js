import React from 'react'
import '../App.css';
import { Button } from '../Components/Buttons';
import { Link,useNavigate } from 'react-router-dom';


export default function MainPage() {
  const navigate = useNavigate();
  const topatientregister = () => {
    navigate('/patientregister'); 
  };
  const tologindoctor = () => {
    navigate('/logindoctor'); 
  };
  return (
    <>
        <div className="Header">
         <nav className="container">
      <div className="logo">
        <img src="/logo.jpeg" alt="logo" />
      </div>
      <h1>TeleHealth+</h1>
      <Link to="/about" style={{ marginLeft: '10px', textDecoration: 'none' }}>About Us</Link>
      <Link to="/opd" style={{ marginLeft: '10px', textDecoration: 'none' }}>OPD Timings</Link>
      <Link to="/faq" style={{ marginLeft: '10px', textDecoration: 'none' }}>FAQs</Link>
      <div className="bu">
      <Button onClick={topatientregister} color={"blue"} darkcolor={"darkblue"}>Patient</Button>
      <Button onClick={tologindoctor} color={"blue"} darkcolor={"darkblue"}>Doctor</Button>
      </div>
      
    </nav>
    </div>

    <div>
    <img src="/mainPageimg.jpg" class="main-img" alt="logo" /> 
    </div>
    </>
    
  )
}
