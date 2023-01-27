import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="content">
        <div className="img">
          <img src="./public/img/logo-mates.png" alt="logo-mates" />
        </div>
        <div className="lista">
            <p>Direccion</p>
            <p>Telefono</p>
            <p>Facebook</p>
            <p>Instagram</p>
          </div>
      </div>
      <h5 className='pie'>Hecho por Claudio Soto | React JS | 2023 </h5>
    </footer>
  )
}

export default Footer