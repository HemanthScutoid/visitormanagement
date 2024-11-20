import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./components/admin/Admin";
import AddVisitor from "./components/AddVisitor";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/addnewvisitor" element={<AddVisitor />} />
      </Routes>
    </Router>
  );
}

export default App;
