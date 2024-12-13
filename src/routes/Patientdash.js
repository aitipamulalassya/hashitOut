import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom';
export default function Patientdash() {
    const navigate = useNavigate();
  const toavailable = () => {
    navigate('/patientregister/login/patientdashboard/available'); 
  };
  return (
    <> <div className="patient-form">
    <h1>DashBoard</h1>

     <div className='dash-box'>
     <label htmlFor="issuename">Enter Health Issue:</label>
     
     <input type="text" id="issuename" name="issuename" />
     <label htmlFor="Lang">Language preferred:</label>
     <input type="text" id="Lang" name="Lang" />
     <label htmlFor="Description">Describe about issue:</label>
     <textarea id="Description" name="Description" rows="5" cols="30" placeholder='Type here..'></textarea>
        
    </div>
    


<div className='btn'>

<button onClick ={toavailable} style={{backgroundColor: "#4CAF50", 
      color: "white", 
      padding: "10px 20px", 
      border: "none", 
      borderRadius: "5px", 
      fontSize: "16px", 
      cursor: "pointer", 
    
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", 
      transition: "background-color 0.3s",  }}>Available Doctors</button>
</div>
</div>
 
</>
    
);
}