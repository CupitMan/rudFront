import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import CreateQuote from "./pages/CreateQuote/CreateQuote";
import Links from "./Links";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Links />
      <Routes>
        <Route path="/" element={<Home key="Home" />} />
        <Route
          path="/createQuote"
          element={<CreateQuote key={"createQuote"} />}
        />
      </Routes>
    </Router>
  </React.StrictMode>
);
