import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/homepage/homepage';

//Rafael, se você está vendo isso... Cadê as rotas???

function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path = "/">
          <Route index element={<Homepage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
