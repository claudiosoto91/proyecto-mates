import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AuthContext } from './../context/authContext';


export const Login = () => {

  const [inputs, setInputs] = useState({
    username:"",
    password:""
  });
  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);


  const handleChange = e => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
  }
  const handleSubmit = async e => {
    e.preventDefault();
    try{
      await login(inputs);
      navigate("/");

    }catch(err){ 
      setErr(err.response.data);
    }
  }


  return (
    <div className='auth'>
        <h2>Login | Tienda de Mates</h2>
        <p>Ingresá con tu usuario y contraseña para poder realizar tus compras y conocer todo lo que tenemos para vos </p>
        <form>
            <input name='username' onChange={handleChange} type="text" placeholder='Nombre' />
            <input name='password' onChange={handleChange} type="password" placeholder='Contraseña' />
            <button onClick={handleSubmit} >Login</button>
            {err && <p>{err}</p> }
            
            <span>¿Aún no tienes una cuenta?</span> <Link className='link ir-registro' to='/register'>Registro</Link>
        </form>
    </div>
  )
}
