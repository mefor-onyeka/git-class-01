import { useState } from "react";
import Home from "./pages/homepage";
import { Register } from "./pages/Register";
import { Login } from "./pages/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<p>Page not found</p>}/>
      </Routes>
      <ToastContainer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
