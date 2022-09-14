import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { DataProvider as DataContextManager } from "./data/DataContext";

const App = () => {
  return (
    <BrowserRouter>
      <DataContextManager>
        <Routes>
          <Route path="/user/:id" element={<Home />} />
        </Routes>
      </DataContextManager>
    </BrowserRouter>
  );
};

export default App;
