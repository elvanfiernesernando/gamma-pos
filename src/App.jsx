import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./pages/Sidebar";


export default function App() {
  return (

    <Routes>
      <Route element={<Sidebar />}>
        <Route index element={<h1>Ini outlet content</h1>} />
      </Route>
    </Routes>

  );
}
