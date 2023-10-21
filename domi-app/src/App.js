import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom"
import { Home } from './Pages/Home/Home'
import { Cart } from './Pages/Cart/Cart';


function App() {
  // const [useshow, setShow] = useState('')
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>



    </>
  );
}

export default App;
