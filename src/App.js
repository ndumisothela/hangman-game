import "./App.css";
import React from "react";
import Hangman from "./Components/Hangman";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import Help from "./Components/Help";
import Homepage from "./Components/Homepage";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
      </Routes>
      <Routes>
        <Route exact path="game" element={<Hangman />} />
      </Routes>
      <Routes>
        <Route path="/help" element={<Help />} />
      </Routes>
    </>
  );
};

export default App;
