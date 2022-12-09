import React from 'react';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import {consultarBDD} from '../../assets/funciones.js'
import { useParams } from 'react-router-dom';

// import consultarBDD from '../../assets/funciones.js' -> otra forma se comenta ambas son correctas
const ItemListContainer = () => {  
    //CONSULTA LA BD, REALIZA LA LLAMADA ASINCRONICA
    const [productos, setProductos] = useState([]);
    const {categoria} = useParams();

    useEffect(() => {
        if(categoria){
            consultarBDD('../json/productos.json').then(products => {
                const productList = products.filter(prod => prod.stock>0).filter(prod => prod.nombreCategoria===categoria)
                // const cardProductos = ItemList({productList});
                // setProductos(cardProductos);                
                setProductos(productList)
            });
        }else{
            consultarBDD('./json/productos.json').then(products => {
                const productList = products.filter(prod => prod.stock>0)
                // const cardProductos = ItemList({productList});
                // setProductos(cardProductos);
                setProductos(productList)
            });
        }
        
    }, [categoria]);


    return (
       <>            
           <div className="row cardProductos">
                {/* {productos} */}
                <ItemList productList={productos} />
           </div>
       </>
    );
}

export default ItemListContainer;
