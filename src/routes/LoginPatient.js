import React from 'react'
import { Button } from '../Components/Buttons'
import { useNavigate } from 'react-router-dom';

export default function LoginPatient() {
    const navigate = useNavigate();
  const topatientdash = () => {
    navigate('/patientregister/login/patientdashboard'); 
  };
  return (
    <div className='login'>
        <h1>Login</h1>
        <input type="text" placeholder='Enter username..'/>
        <input type="password" placeholder='Enter password..'/>
        <Button onClick={topatientdash} color={"blue"} darkcolor={"darkblue"}>Submit</Button>
    </div>
  )
}
