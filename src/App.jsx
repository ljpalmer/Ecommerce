import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';
//Router DOM
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Context, para tener alcance a la variable solo provider, si va querer consultar valor entonces se importa tambien contexto
import { DarkModeProvider } from './context/DarkModeContext';

const App = () => {  
  return (
    <>       
      <BrowserRouter>
        <DarkModeProvider>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>} />          
            <Route path='/cart' element={<CartContainer/>} />          
            <Route path='/producto/:id' element={<ItemDetailContainer />} />          
            <Route path='/categoria/:categoria' element={<ItemListContainer/>} />          
          </Routes>        
        </DarkModeProvider>
      </BrowserRouter>      
    </>
  );
}

export default App;