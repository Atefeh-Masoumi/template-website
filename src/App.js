import React from 'react';
import Navbar from './component/Navbar';
import Header from './component/header';
import Body from './component/Body';
import ProductImage from './component/productImage.js';
import Footer from './component/Footer';
import Particles from "react-tsparticles";
import particleConfig from './component/particleConfig';
// import particleConfig from '../src/component/particle.json'

function App() {
 
  return (
      <>
        
      <Navbar/>
      <Header/>
      <Body/>
      <ProductImage/>
      <Footer/>
      
      </>
  );
}

export default App;
