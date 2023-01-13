import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { consultarBDD } from '../../assets/funciones';
import { getProducto } from "../../assets/firebase";
import ItemDetail from '../ItemDetail/ItemDetail';
const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const {id} = useParams();
     useEffect(() => {
            // consultarBDD('../json/videojuegos.json').then(productos => {
            //     const prod = productos.find(producto => producto.id === parseInt(id));
            //     setProducto(prod)
            // });
            getProducto(id).then(prod => setProducto(prod))
     }, []);
    return (
        <div className='card mb-3 container itemDetail'>
             <ItemDetail item={producto}/>
        </div>
    );
}

export default ItemDetailContainer;
