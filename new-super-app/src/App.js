import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes, Route, Link } from "react-router-dom";
import Home from "../src/Pages/Home";
import Header from './Pages/Header';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Header" element={<Header />} />
      </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
