import React from 'react';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import {consultarBDD} from '../../assets/funciones.js'

// import consultarBDD from '../../assets/funciones.js' -> otra forma se comenta ambas son correctas
const ItemListContainer = () => {  
    //CONSULTA LA BD, REALIZA LA LLAMADA ASINCRONICA
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        consultarBDD().then(productList => {
            const cardProductos = ItemList({productList});
            setProductos(cardProductos);
        });
    }, []);


    return (
       <>            
           <div className="cardProductos">
                {productos}
           </div>
       </>
    );
}

export default ItemListContainer;
