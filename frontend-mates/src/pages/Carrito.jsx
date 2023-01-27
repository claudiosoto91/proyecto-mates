import React from 'react'
import { useContext } from 'react';
import { CarritoContext } from './../context/carritoContext';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './../context/authContext';
import axios from 'axios';
import 'dotenv/config';


export const Carrito = () => {
  const BACKEND_URL = process.env.BACKEND_URL;

  const navegate = useNavigate();

  const { carrito, totalPrice, clearCarrito, removeProduct } = useContext(CarritoContext);
  const { currentUser} = useContext(AuthContext);

  const handleClick = async () => {

    const order = {
      user: currentUser?.username,
      item: JSON.stringify( carrito.map(product => ({id: product.id, nombre: product.name, precio: product.price, quantity: product.quantity}))),
      total: totalPrice()
    }

    const enviarOrder = async () => {
      await axios.post(`${BACKEND_URL}/api/carrito`, order )
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
    }
    enviarOrder();
    clearCarrito();
    navegate('/');
  }


  if (carrito.length === 0){
    return(
      <>
        <div className="carrito-vacio">
          <p>Carrito Vacío</p>
          <Link className='link' to='/'>Te esperan todos nuestros Productos</Link>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="container-carrito">
      {  
        carrito.map( (product) => {
          return(
            <div className='carrito' key={product.id}>
                <div className="img">
                  <img src={product.img} alt="imagen producto" />
                </div>
                <div className="content">
                  <h3 className='name'>{product.name}</h3>
                  <p className='price'>Precio: ${product.price}</p>
                  <p className='cantidad'>Cantidad:{product.quantity}</p>
                  <button className='btn-eliminar' onClick={() => removeProduct(product.id)} >Eliminar</button>
                </div>
            </div>
          )

        } )}
     </div>
      <div className='botones'>
        <p  className='total'>Total: ${totalPrice()}</p>
          {
            currentUser ? 
            (<button className='btn-comprar' onClick={handleClick} >Finalizar Compra</button>)
            :
            (<Link to='/login'>Iniciar Sesión para finalizar Compra</Link>)
          }
      </div>

 
    </>
  )
}
