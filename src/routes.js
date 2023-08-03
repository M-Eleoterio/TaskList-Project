import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import Inicio from "./pages/Inicio";

function AppRoutes() {
  return (
    <div className="AppRoutes">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio></Inicio>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
