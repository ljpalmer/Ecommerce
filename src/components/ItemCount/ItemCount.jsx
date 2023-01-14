import {useState} from 'react';
import { useDarkModeContext } from '../../context/DarkModeContext';
const ItemCount = ({inicial, stock, onAdd}) => {
    const {darkMode} = useDarkModeContext()

    const [contador, setContador] = useState(inicial);
    
    const sumar = () => contador < stock && setContador(contador + 1)

    const restar = () => contador > 1 && setContador(contador - 1)
    
    const agregarAlCarrito = () => onAdd(contador)

    return (
        <div className='row col-12'>
            <button onClick={restar} className={`btn ${darkMode ? 'btn-dark' : 'btn-light'} col-2`}><i className="fas fa-minus"></i></button>
            <div className='col-1 text-center'>
                {contador}
            </div>                    
            <button onClick={sumar} className={`btn ${darkMode ? 'btn-dark' : 'btn-light'} col-2`}><i className="fas fa-plus"></i></button>
            {stock !==0 ? <button className={`btn ${darkMode ? 'btn-primary' : 'btn-dark'} col-2`} onClick={agregarAlCarrito}><i className="fas fa-cart-plus"></i></button> : '' }
        </div>
    );
}

export default ItemCount;