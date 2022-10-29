import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Menu from "./pages/Menu";
import History from "./pages/History";
import Inventory from "./pages/Inventory";
import Settings from "./pages/Settings";
import PaymentProvider from "./stores/PaymentProvider";
import InventoryProvider from "./stores/InventoryProvider";
import CategorySuccessModal from "./components/CategorySuccessModal";


export default function App() {
  return (

    <Routes>
      <Route path={"/"} element={<MainLayout />}>
        <Route index element={
          <PaymentProvider>
            <Menu />
          </PaymentProvider>
        } />
        <Route path="/history" element={<History />} />
        <Route path="/inventory" element={
          <InventoryProvider>
            <Inventory />
          </InventoryProvider>
        } />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>

  );
}
