import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Form from './components/Form/Form';
const App = () => {
  const user = {nombre: "Pedro", apellido: "Parker"}
  const busqueda1 = "Buscar Productos"
  return (
    <>   
      <Navbar/>
      <Form busqueda={busqueda1}/>
    </>
  );
}

export default App;