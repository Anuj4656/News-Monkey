import { useState } from "react";
import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutUs from "./components/AboutUs";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<News key="general" country="us" category="general" />}
          />
          <Route
            path="/entertainment"
            element={
              <News key="entertainment" country="us" category="entertainment" />
            }
          />
          <Route
            path="/business"
            element={<News key="business" country="us" category="business" />}
          />
          <Route
            path="/health"
            element={<News key="health" country="us" category="health" />}
          />
          <Route
            path="/science"
            element={<News key="science" country="us" category="science" />}
          />
          <Route
            path="/sports"
            element={<News key="sports" country="us" category="sports" />}
          />
          <Route
            path="/technology"
            element={
              <News key="technology" country="us" category="technology" />
            }
          />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
