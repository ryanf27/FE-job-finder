import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepages from "./pages/Homepages";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepages />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
