import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkModeContext";
import { useCarritoContext } from "../../context/CarritoContext";
const ItemDetail = ({item}) => {
    const {darkMode} = useDarkModeContext()
    const {addItem} = useCarritoContext()
    
    const onAdd = (contador) => {
        addItem(item, contador)
    }   
    console.log(item);
    return (
        <div className='row g-0'>
            <div className='col-md-4 mt-2 mb-2'>
            <img src={item.img} alt="..." className="img-fluid rounded-start"/>
            </div>
            <div className='col-md-8'>
                <div className='card-body'>
                    <h5 className='card-title'>{item.nombre}</h5>
                    <p className='card-text'>Categoría: {item.nombreCategoria}</p>
                    <p className='card-text'>Marca: {item.marca}</p>
                    <p className='card-text'>Descripción: {item.descripcion}</p>
                    <p className='card-text'>$ {new Intl.NumberFormat('de-DE').format(item.precio) }</p>
                    <p className='card-text'>Stock: {item.stock}</p>
                    <ItemCount inicial = {1} stock= {item.stock} onAdd={onAdd}/><br/>
                    <button className={`btn ${darkMode ? 'btn-secondary' : 'btn-primary'}`}><Link to="/cart" className="nav-link">Finalizar compra</Link></button>                    
                </div>                          
            </div>
        </div>
    );
}

export default ItemDetail;
