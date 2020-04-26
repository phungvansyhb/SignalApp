import React from 'react';
import './App.css';
import Header from "./Component/header/header";
import Home from "./Component/home/home";
import Footer from "./Component/footer/footer";
import Calculator from "./Component/calculator/calculator";
import Guide from './Component/Guide/guide';

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Calculator/>
      <Guide/>
      <Footer/>
    </div>
  );
}

export default App;
