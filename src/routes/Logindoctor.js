import React from 'react'
import { Button } from '../Components/Buttons'
import { useNavigate } from 'react-router-dom';

export default function Logindoctor() {
    const navigate = useNavigate();
  const todoctordash = () => {
    navigate('/logindoctor/doctordashboard'); 
  };
  return (
    <div className='login'>
        <h1>Login</h1>
        <input type="text" placeholder='Enter username..'/>
        <input type="password" placeholder='Enter password..'/>
        <Button onClick={todoctordash} color={"blue"} darkcolor={"darkblue"}>Submit</Button>
    </div>
  )
}