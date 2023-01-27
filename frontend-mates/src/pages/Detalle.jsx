import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'dotenv/config';


export const Detalle = () => {
  const BACKEND_URL = process.env.BACKEND_URL;
  const [orders, setOrders] = useState([]);

  useEffect( ()=>{
    const ordersData = async () => {
      try{
        const res = await axios.get(`${BACKEND_URL}/api/carrito`);
        setOrders(res.data);
      }catch(err){
        console.log(err);
      }
    }
    ordersData();
  },[]);

  return (
    <div className='container-detalle'>
        {  
        orders.map( (order) => {
          return(
            <div className='order' key={order.id}>
              <h1 className='name'>Compra de {order.user}</h1>
              <p className='item'>{JSON.stringify(order.item)}</p>
              <p className='total'>Total Gastado:{order.total}</p>
            </div>
          )

        } )}
      <h2>Compras Realizadas</h2>
      <p>Aquí podrás gestionar todas tus compras realizadas con nosotros.</p>
    </div>
  )
}
