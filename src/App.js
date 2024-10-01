import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/homepage/homepage';

//Rafael, se você está vendo isso... Cadê as rotas???
//se vc mexer no treelink funciona

function App() {
  return (
    <BrowserRouter basename='/treelink'>
      <Routes>
        <Route path = "/">
          <Route index element={<Homepage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
