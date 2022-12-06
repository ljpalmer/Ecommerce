import React from 'react';
import {useState} from 'react';

const ItemCount = ({stock}) => {
    //Parte Logica
    const [contador, setContador] = useState(1);    /*
       const boton = document.getElementById("boton1");
       console.log(boton); NO SE PUEDE LLAMAR ANTES DE CREAR EL BOTON
       */
    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    };

    const restar = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }
    };
    return (
        <div>
            <button className='btn btn-dark' onClick={() => sumar()}>+</button>
            {contador}
            <button className='btn btn-light' onClick={() => restar()}>-</button>
            <button>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;
