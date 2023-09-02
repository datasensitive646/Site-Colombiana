import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ContextProvider from "../context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Private from "./private";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Error from "../pages/Error";
import Manutencao from "../pages/Manutencao";

import ContaFisicaUm from "../pages/ContaFisicaUm";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <ToastContainer outClose={3000} />
        <Routes>
          <Route path="/" element={<ContaFisicaUm />} />
          <Route path="/loginadm" element={<Login />} />
          <Route path="/manutencao" element={<Manutencao />} />
          <Route
            path="/dm"
            element={
              <Private>
                {" "}
                <Dashboard />{" "}
              </Private>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}
