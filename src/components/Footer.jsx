


import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative mt-24">
      {/* Glassmorphic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5]/20 via-[#6D28D9]/20 to-[#3B82F6]/30 backdrop-blur-3xl border-t border-white/10"></div>

      <Container maxWidth="lg" className="relative z-10 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* ================= Brand Info ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-2xl bg-gradient-to-tr from-cyan-400 to-blue-600 grid place-items-center text-white font-bold shadow-md shadow-cyan-400/40">
                JH
              </div>
              <span className="text-xl font-extrabold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Job Hunt
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Find your dream job with a modern, responsive & glassmorphic experience.
              Built with React, MUI, Tailwind, and Framer Motion.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-5">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{ scale: 1.15 }}
                  className="p-3 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-cyan-400 hover:text-black transition duration-300 shadow-md shadow-cyan-300/30"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ================= Navigation Links ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link to="/about" className="hover:text-cyan-300 transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-300 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan-300 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* ================= Newsletter ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Stay in Touch</h4>
            <p className="text-gray-300">Subscribe to our newsletter for updates.</p>

            {/* FIXED FORM - FULLY RESPONSIVE */}
            <form className="mt-4 flex flex-col sm:flex-row gap-3 w-full max-w-lg">
              <input
                type="email"
                className="flex-1 min-w-0 rounded-xl bg-white/10 border border-white/20 text-white px-4 py-3 placeholder-gray-300 focus:ring-2 focus:ring-cyan-400 outline-none sm:text-base text-sm"
                placeholder="your@email.com"
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-semibold rounded-xl px-6 py-3 shadow-md shadow-cyan-400/40 hover:shadow-cyan-400/60 transition duration-300 w-full sm:w-auto sm:min-w-[130px] text-sm sm:text-base"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* ================= Bottom Footer ================= */}
        <Box className="text-sm text-gray-400 text-center mt-10 pt-6 border-t border-white/10">
          © {new Date().getFullYear()} <span className="text-cyan-300 font-semibold">Job Hunt</span>. All rights reserved.
        </Box>
      </Container>
    </footer>
  );
}
