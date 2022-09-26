import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/layouts/header/Header";
import Events from "./pages/events/Events";

const App = () => {
  return (
    <>
      <Header />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Events />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
