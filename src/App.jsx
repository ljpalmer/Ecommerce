import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
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
            <Route path='/cart' element={<Cart/>} />          
            <Route path='/producto/:id' element={<ItemDetailContainer />} />          
            <Route path='/categoria/:categoria' element={<ItemListContainer/>} />          
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>        
        </DarkModeProvider>        
      </BrowserRouter>
            
    </>
  );
}

export default App;