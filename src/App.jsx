import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import ItemCount from './components/ItemCount/ItemCount';

const App = () => {  
  return (
    <>   
      <Navbar/>
      <ItemListContainer/>
      {/* <ItemCount stock={15}/> */}
    </>
  );
}

export default App;