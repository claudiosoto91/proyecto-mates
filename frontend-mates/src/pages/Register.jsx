import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import 'dotenv/config';


export const Register = () => {
  const BACKEND_URL = process.env.BACKEND_URL;
  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:""
  });
  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const handleChange = e => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
  }
  const handleSubmit = async e => {
    e.preventDefault();
    try{
      await axios.post(`${BACKEND_URL}/api/auth/register`, inputs);
      navigate("/login");

    }catch(err){ 
      setErr(err.response.data);
    }
  }


  return (
    <div className='auth'>
        <h2>Register</h2>
        <form>
            <input required type="text" placeholder='Nombre' name='username' onChange={handleChange} />
            <input required type="email" placeholder='Email' name='email' onChange={handleChange} />
            <input required type="password" placeholder='Contraseña' name='password' onChange={handleChange} />
            <button onClick={handleSubmit}>Register</button>
            {err && <p>{err}</p> }
            
            <span>¿Tienes una cuenta?</span> <Link className='link ir-login' to='/login'>Ir a loguearse</Link>
        </form>
    </div>
  )
}
