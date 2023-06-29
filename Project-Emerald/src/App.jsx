import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AzuraAnimation from "./EsComponents/AzuraAnimation.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AzuraAnimation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
