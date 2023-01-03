    import { useContext, useState, createContext } from "react";

    const carritoContext = createContext();

    export const useCarritoContext = useContext(carritoContext);

    export const carritoProvider = (props) => {
    const [carrito, setCarrito] = useState([]);
        //Ver Cantidad, agregar productos, eliminar productos
        //vaciar el carrito, finalizar compra, buscar producto
        const isInCart = (id) => {
            //retorna productos pero
            return carrito.find(producto => producto.id===id);
        }

        const addItem = (producto, cantidad) =>{
            if(isInCart(producto.id)){
                const indice= cart.findIndex(pro => producto.id===producto);
                const aux = [...carrito] ;
                aux[indice].cant = cantidad;
                setCarrito(aux);
            }else{
                //No existe
                const nuevoProducto = {
                    ...producto,
                    cant : cantidad
                    }
                }
            }
        }
    }