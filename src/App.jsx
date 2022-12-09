import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import ItemCount from './components/ItemCount/ItemCount';

const App = () => {  
  return (
    <>       
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />          
          <Route path='/cart' element={<CartContainer/>} />          
          <Route path='/producto/:id' element={<ItemDetailContainer />} />          
          <Route path='/categoria/:categoria' element={<ItemListContainer/>} />          
        </Routes>
        {/* <ItemCount stock={15}/> */}
      </BrowserRouter>      
    </>
  );
}

export default App;