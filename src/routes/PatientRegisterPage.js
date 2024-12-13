import React from 'react'
import { Button } from '../Components/Buttons'
import { useNavigate } from 'react-router-dom';
export default function PatientRegisterPage() {
  const navigate = useNavigate();
  const topatientloginpage = () => {
    navigate('/patientregister/login'); 
  };
  return (
    
    <div className="Heropatient">
        <h1>Registration</h1>
    <div className="register">
         <div>
            <input type="text" placeholder='Enter your name..'/>
            <input type="text" placeholder='Enter your email..'/>
            <input type="password" placeholder='Enter your password..'/>
        </div>
        <div>
            <input type="text" placeholder='Enter your Username..' />
            <input type="text" placeholder='Enter your number..' />
            <input type="password" placeholder='Confirm your password..' />
        </div>
    </div>
    <div>
    <Button color={"blue"} darkcolor={"darkblue"}>Register</Button>
    <h3>Already have an account</h3>
    <button style={{backgroundColor: "#4CAF50", 
          color: "white", 
          padding: "10px 20px", 
          border: "none", 
          borderRadius: "5px", 
          fontSize: "16px", 
          cursor: "pointer", 
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", 
          transition: "background-color 0.3s",  }} onClick={topatientloginpage}>Login</button>
</div>
    </div>
     
    
   
  )
}
