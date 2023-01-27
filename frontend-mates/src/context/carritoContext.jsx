
import { createContext, useState } from "react";

export const CarritoContext = createContext();

export const CarritoContextProvider = ({children}) => {

const [carrito, setCarrito] = useState([]);

const addCart = (item) => {
    //Buscar si esta el producto
    let existeProducto = carrito.find(p => p.id === item.id);
    if ( existeProducto ){
        //Si ya esta aumentar la cantidad
        existeProducto.quantity++;
        setCarrito([...carrito]);
    }else{
        //Si no está se agrega
        setCarrito(prevCarrito => [...prevCarrito, {...item, quantity: 1}])
    }
}

const clearCarrito = () => setCarrito([]);

const removeProduct = (id) => setCarrito(carrito.filter(product => product.id !== id));

const totalPrice = () => {return carrito.reduce((prev, act) => prev + act.quantity * act.price, 0)}
const totalProducts = () => carrito.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

return (
        <CarritoContext.Provider value={{clearCarrito,
            removeProduct,
            addCart,
            totalPrice,
            totalProducts,
            carrito    
        }}>
            {children}
        </CarritoContext.Provider>

    )
}