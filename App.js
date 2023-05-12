import "./App.css";
import Navbar from "./comportment/navbar/navbar";
import Container from "./comportment/body/container";
import Bottom from "./comportment/bottom/bottom";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
// import Free from "./importent/free";
import Home from "./importent/home";
import Product from "./importent/Product";
import Policy from "./importent/Policy";
import Istruct from "./importent/istruct";
import Contact from "./importent/contact";
import Login from "./importent/login";

function App() {
  // const [count, setCount] = useState(0);
  return (
    <div className="app" >
      <Navbar />
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/free" element={<Container />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/istruct" element={<Istruct />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Routes>
      <Route path="Homepage" element={<Container />} />
      </Routes>
      <Bottom/>
    </div>
  );
}

export default App;
