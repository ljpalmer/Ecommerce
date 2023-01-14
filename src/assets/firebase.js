import { initializeApp } from "firebase/app";
import {getFirestore, addDoc, getDocs, getDoc, updateDoc, deleteDoc, collection, doc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "reactjs-2022.firebaseapp.com",
  projectId: "reactjs-2022",
  storageBucket: "reactjs-2022.appspot.com",
  messagingSenderId: "508507345085",
  appId: "1:508507345085:web:816c410f27a986ed0527d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

//CRUD PRODUCTOS
//Valido para carga de registros a firestore database
const cargarBDD = async () => {
    const promise = await fetch('./json/videojuegos.json');
    const productos = await promise.json();
    productos.forEach(async (prod) => {               
        await addDoc(collection(db, "productos"), {
            nombre: prod.nombre,
            marca: prod.marca,            
            idCategoria : prod.idCategoria,
            nombreCategoria: prod.nombreCategoria,
            descripcion: prod.descripcion,
            stock: prod.stock,
            precio: prod.precio,
            img: prod.img
        });
    });
};

const getProductos = async() => {
    const productos = await getDocs(collection(db, "productos"));    
    const items = productos.docs.map(prod => {        
        return {...prod.data(), id: prod.id}
    })    
    return items
};
const getProducto =  async (id) => {
    const producto = await getDoc(doc(db, "productos", id))    
    const item = {...producto.data(), id: producto.id};     
    return item;
};
const updateProducto = async (id, info) => {
    const estado = await updateDoc(doc(db,"productos", id), info)
    return estado
};
const deleteProducto = async(id) =>{
    const estado = await deleteDoc(doc(db, "productos", id))
    return estado
};

//CREATE AND READ "ORDENES COMPRA"
const createOrdenCompra = async (cliente, preTotal, fecha ) => {
    const ordenCompra = await addDoc(collection(db, "ordenCompra"),{
        nombreCompleto: cliente.nombre,
        email: cliente.email,
        dni: cliente.dni,
        direccion: cliente.direccion,
        celular: cliente.celular,
        fecha: fecha,
        precioTotal: preTotal
    })

    return ordenCompra
}

const getOrdenCompra =  async (id) => {
    const ordenCompra = await getDoc(doc(db, "ordenCompra", id))
    const item = {...ordenCompra.data(), id: ordenCompra.id}
    return item
}

export {cargarBDD, getProductos, getProducto, updateProducto, deleteProducto, createOrdenCompra, getOrdenCompra}