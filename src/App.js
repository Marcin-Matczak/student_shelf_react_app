import Home from "../src/components/Home/HomeContainer";
import Info from "./components/Info/Info";
import About from "./components/About/About";
import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <Router>
      <MainLayout>
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </AnimatePresence>
      </MainLayout>
    </Router>
  );
}

export default App;
