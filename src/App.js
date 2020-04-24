import React from 'react';
import './App.css';
import Header from "./Component/header/header";
import Home from "./Component/home/home";
import Footer from "./Component/footer/footer";
import Calculator from "./Component/calculator/calculator";

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Calculator/>
      <Footer/>
    </div>
  );
}

export default App;
