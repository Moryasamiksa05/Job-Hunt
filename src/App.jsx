
import React, { useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
 import ParticlesBackground from "./components/ParticlesBackground";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

import BackgroundEffects from "./components/BackgroundEffects";

// import React, { useCallback } from "react";
// import { Routes, Route } from "react-router-dom";
// import Container from "@mui/material/Container";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import { loadFull } from "tsparticles";
// import Particles from "react-tsparticles";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Contact from "./pages/Contact";
// import ParticlesBackground from "./components/ParticlesBackground";
// import BackgroundEffects from "./components/BackgroundEffects";

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* ===== GRADIENT BACKGROUND ===== */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#4F46E5] via-[#6D28D9] to-[#3B82F6] animate-waterFlow -z-30"></div>

      {/* ===== PARTICLES BACKGROUND ===== */}
      <div className="fixed inset-0 -z-20">
        <ParticlesBackground /> 
      </div>

      {/* ===== GLASS EFFECT OVERLAY ===== */}
      <div className="fixed inset-0 bg-white/10 backdrop-blur-[30px] -z-10"></div>

      {/* ===== OPTIONAL FLOATING EFFECTS ===== */}
      <BackgroundEffects />

      {/* ===== MAIN CONTENT ===== */}
      <div className="relative z-10">
        <Navbar />

        <main className="pt-6">
          <Container maxWidth="lg">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Container>
        </main>

        <Footer />
      </div>
    </div>
  );
}


