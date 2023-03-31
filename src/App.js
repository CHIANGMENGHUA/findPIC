import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Layout from "./Layout";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import "./styles/style.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
