import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import Inicio from "./pages/Inicio";
import ListPage from "./pages/ListPage";
import HeaderNav from "./components/HeaderNav";

function AppRoutes() {
  return (
    <div className="AppRoutes">
      <BrowserRouter>
        <HeaderNav></HeaderNav>
        <Routes>
          <Route path="/" element={<Inicio></Inicio>}></Route>
          <Route path="/mylist" element={<ListPage></ListPage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
