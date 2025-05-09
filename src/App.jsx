import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home1 from "./components/Home1";
import Tenants from "./components/Tenants";
import HomePage from "./components/HomePage";
// import LoginForm from "./components/LoginForm";
import Contact from "./components/Contact";
import AboutUs from "./../src/components/AboutUs";
// import Register from "./components/Register";
import Rentals from "./components/Tenants";
import PropertyManager from "./components/PropertyManager";
import Dashboard from "./components/Dashboard";
import ChatbotPage from "./components/ChatbotPage";
function App() {
  return (
    <Router>
      {" "}
      <Home1 />{" "}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Rentals" element={<Rentals />} />
        <Route path="/PropertyManager" element={<PropertyManager />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route
              <li><Link to="/dashboard">Dashboard</Link></li>

          path="/contact"
          element={<h1 style={{ color: "white" }}>Contact Page</h1>}
        /> */}
        
        <Route path="/chatbot" element={<ChatbotPage />} />
        <Route path="AboutUs" element={<AboutUs />} />
        {/* <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Register />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
