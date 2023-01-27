import { useEffect, useState } from 'react';
const Contador = ({inicial, stock, onAdd}) => {

    const [contador, setContador] = useState(parseInt(inicial));

    const decrementar = () => {
        setContador(contador - 1);
    }
    const incrementar = () => {
        setContador(contador + 1);
    }
    useEffect(() => {
        setContador(parseInt(inicial));
    },[inicial]);

    
  return (
        <>
            <div>
                <button className='btn-menos' disabled={contador <= 0} onClick={decrementar}>-</button>
                <span>{contador}</span>
                <button className='btn-mas' disabled={contador >= stock} onClick={incrementar}>+</button>
            </div>
            <div>
                <button id='agregar' className='btn-agregar' disabled={contador <= 0} onClick={() => onAdd(contador)}>Agregar al Carrito</button>
            </div>
        </>
  )
}

export default Contador;