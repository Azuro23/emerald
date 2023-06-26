// App.js


import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
// import NavBar from "./EsComponents/NavBar";
// import Devs from "./EsComponents/Devs";
import Carousel from "./Carousel.jsx"
const App = () => {
  return (
    <BrowserRouter>
  
     <Carousel />
     {/* <Devs /> */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
       
      </Routes>
    </BrowserRouter>
  );
};

export default App;