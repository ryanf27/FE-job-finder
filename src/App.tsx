import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepages from "./pages/Homepages";
import Register from "./pages/Register";
import Login from "./pages/Login";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
