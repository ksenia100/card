import React from 'react';
import './App.css';
import ProductCardShadcn from './components/ProductCardShadcn';
import ProductCardRadixUI from './components/ProductCardRadixUI';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {

  const productProps = {
    name: "Ноутбук Apple MacBook Air 13 M1 8/256GB 2020 (MGN63) Space Gray",
    price: "36 499₴",
    colorOptions: ["Red", "Blue", "Green"],
    sizeOptions: ["Small", "Medium", "Large"],
    memoryOptions: ["256GB", "312GB"]
  }

  const productProps2 = {
    name: "HP 14 Laptop, Intel Celeron N4020, 4 GB RAM, 64 GB Storage, 14-inch Micro-edge HD Display, Windows 11 Home, Thin & Portable, 4K Graphics, One Year of Microsoft 365 (14-dq0040nr, Snowflake White)",
    price: "$186.99",
    colorOptions: ["Grey", "White", "Black", "Pink"],
    sizeOptions: ["Small", "Medium", "Large"],
    capacityOptions: ["14-inch", "8GB RAM", "16GB RAM", "32GB RAM"]
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProductCardRadixUI {...productProps} />} />
        <Route path="/card2" element={<ProductCardShadcn {...productProps2}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
