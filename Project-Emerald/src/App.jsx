// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
import NavBar from "./EsComponents/NavBar";
// import Devs from "./EsComponents/Devs";

const App = () => {
  return (
    <BrowserRouter>
     <NavBar />
     {/* <Devs /> */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
       
      </Routes>
    </BrowserRouter>
  );
};

export default App;