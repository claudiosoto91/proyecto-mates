import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from './../context/authContext';


const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <Link to='/'>
            <img src="./public/img/logo-mates.png" alt="logo-mates" />
          </Link>
        </div>
        <div className="links">
          <Link className='link' to='/'> <h4>Home</h4></Link>
          <Link className='link' to='/nosotros'> <h4>Nosotros</h4></Link>
          <Link className='link' to='/carrito'>
            <h4>Carrito</h4> 
            <span></span> 
          </Link>
          <Link to='/detalle' className='link'>
            <span id='usuario' className={currentUser ? ('usuario'): ''}>{currentUser?.username}</span>
          </Link>
          {currentUser ? (<span className='logout' onClick={logout}>Salir</span>) : (<Link className='link login' to='/login'>Login</Link>)}
        </div>
      </div>
    </div>
  )
}

export default Navbar