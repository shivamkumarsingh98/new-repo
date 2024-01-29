import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes, Route, Link } from "react-router-dom";
import Home from "../src/Pages/Home";
import Header from './Pages/Header';
import Browser from './Pages/Browser';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/Browser" element={<Browser />} />
      </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
