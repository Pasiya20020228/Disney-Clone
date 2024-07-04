import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Header from "./components/Header";
import React from "react";
import { createRoot } from "react-dom/client";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Login/>
  }
])

function App() {
  return (
    <div className="">
      <Header/>
      <RouterProvider router ={router}/>
        
    </div>
  );
}

export default App;
