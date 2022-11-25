import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
const App = () => {
  const user = {nombre: "Pedro", apellido: "Parker"}
  const busqueda1 = "Buscar Productos"
  return (
    <>   
      <Navbar/>
      <ItemListContainer greetings={"Hola, Buenas tardes"}/>
    </>
  );
}

export default App;