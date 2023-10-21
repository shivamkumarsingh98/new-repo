import logo from './logo.svg';
import React from 'react';
import './App.css';
import {  BrowserRouter , Routes, Route  } from "react-router-dom";
import Header from './Pages/Header';


function App() {
  return (
    <div>
      < BrowserRouter >
      <Routes>
      <Route path="/" element={<Header />} />
      </Routes>
    </ BrowserRouter >

      <Header />
    </div>
      );
}

      export default App;
