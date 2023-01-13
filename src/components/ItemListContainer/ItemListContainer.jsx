import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import {consultarBDD} from '../../assets/funciones.js'
import { cargarBDD } from '../../assets/firebase';
// import consultarBDD from '../../assets/funciones.js' -> otra forma se comenta ambas son correctas
const ItemListContainer = () => {  
    //Consulta a la BD, realizamos llamada asincrona
    const [productos, setProductos] = useState([]);
    const {categoria} = useParams();
    useEffect(() => {
        if(categoria){
            consultarBDD('../json/videojuegos.json').then(products => {
                const productList = products.filter(prod => prod.stock>0)
                                            .filter(prod => prod.nombreCategoria===categoria);
                setProductos(productList);
            });
        }else{
            consultarBDD('./json/videojuegos.json').then(products => {
                const productList = products.filter(prod => prod.stock>0)   
                setProductos(productList)
            });
        }        
        //Una vez cargado en la base de datos de firestore lo desactivamos
        // cargarBDD().then(productos => console.log(productos));

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
