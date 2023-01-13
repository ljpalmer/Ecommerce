import React from 'react';
import Item from '../Item/Item';
//Modificar el array de objetos
const ItemList = ({productList}) => {    
    return (
        <>
           {productList.map(producto => <Item key={producto.id} prod={producto}/>)}
        </>
    );
}

export default ItemList;
