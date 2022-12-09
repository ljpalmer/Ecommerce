import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
const ItemDetail = ({item}) => {
    console.log(item);
    return (
        <div className='row g-0'>
            <div className='col-md-4'>
            <img src={`../img/${item.img}`}className="card-img-top" alt="..." />
            </div>
            <div className='col-md-8'>
                <div className='card-body'>
                    <h5 className='card-title'>{item.nombre}</h5>
                    <p className='card-text'>Modelo: {item.modelo}</p>
                    <p className='card-text'>Marca: {item.marca}</p>
                    <p className='card-text'>$ {new Intl.NumberFormat('de-DE').format(item.precio) }</p>
                    <p className='card-text'>Stock: {item.stock}</p>
                    <ItemCount stock={item.stock}/>
                    <button className='btn btn-secondary mt-3'>Finalizar Compra</button>     
                </div>                          
            </div>
        </div>
    );
}

export default ItemDetail;
