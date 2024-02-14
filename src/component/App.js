import React from 'react';
import './App.css';
import Header from "./Header/Header";
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Category from "../pages/Category";
import Contact from "../pages/Contact";

function App() {
  
  return (
    <PrimeReactProvider>
     
     <BrowserRouter>
      <Routes>
      <Header />   
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="category" element={<Category />} />
          <Route path="contact" element={<Contact />} />
        
      </Routes>
    </BrowserRouter>
    </PrimeReactProvider>
  );
}

export default App;
