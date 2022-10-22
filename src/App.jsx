import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Menu from "./pages/Menu";
import History from "./pages/History";
import Favourite from "./pages/Favourite";
import Management from "./pages/Management";
import Settings from "./pages/Settings";


export default function App() {
  return (

    <Routes>
      <Route path={"/"} element={<MainLayout />}>
        <Route index element={<Menu />} />
        <Route path="/history" element={<History />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/management" element={<Management />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>

  );
}
