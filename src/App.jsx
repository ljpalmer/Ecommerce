import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
const App = () => {  
  return (
    <>   
      <Navbar/>
      <ItemListContainer greetings={"Hola, Buenas tardes"}/>
    </>
  );
}

export default App;