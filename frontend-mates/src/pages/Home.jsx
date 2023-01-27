import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { CarritoContext } from './../context/carritoContext';
import { useContext } from 'react';
import 'dotenv/config';
const Home = () => {
  const BACKEND_URL = process.env.BACKEND_URL;
  const [products, setProducts] = useState([]);

  const { addCart} = useContext(CarritoContext)

  const handleClick = e => {
    e.preventDefault();
    const productSelect =  e.target.parentElement.parentElement;
    const infoProduct = {
      id: productSelect.getAttribute('data-id'),
      name: productSelect.querySelector('.name').textContent,
      price: parseFloat(productSelect.querySelector('.price').textContent),
      img: productSelect.querySelector('.img img').src
    }
    addCart(infoProduct);

    //Cartel de agregado
    const btn = productSelect.querySelector('#btn-agregar');
    btn.classList.add('mensaje');
    btn.textContent = 'Agregado al carrito';

    setTimeout(()=>{
      btn.textContent = 'Agregar al carrito';
      btn.classList.remove('mensaje');
    },2000);
  }

  useEffect( ()=>{
    const fetchData = async () => {
      try{
        const res = await axios.get(`${BACKEND_URL}/api/products`);
        setProducts(res.data);
      }catch(err){
        console.log(err);
      }
    }
    fetchData();
  },[]);

  return (
    <div className='home'>
      <div className="img">
        <img src="./public/img/hero-home.png" alt="imagen-mates" />
      </div>
      <h2>Productos</h2>
      <div id='products' className="products">
        {  
        products.map( (product) => {
          return(
            <div data-id={product.id} className='product' key={product.id}>
            <div className="img">
              <img src={product.img} alt="imagen producto" />
            </div>
            <div className="content">
              <h1 className='name'>{product.name}</h1>
              <p className='price'>{product.price}</p>
              <p>{product.info}</p>
              <a id='btn-agregar' onClick={handleClick}>Agregar al carrito</a>
            </div>
          </div>
          )

        } )}
      </div>
    </div>
  )
}

export default Home