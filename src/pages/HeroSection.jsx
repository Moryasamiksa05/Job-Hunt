

import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { ReactTyped } from "react-typed";
import Avatar from "@mui/material/Avatar";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0b0f19]">
      {/* ==== Background Image ==== */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop"
          alt="Dashboard mockup"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-[#0b0f19]/80 backdrop-blur-[2px]"></div>
      </div>

      {/* ==== Main Content ==== */}
      <div className="relative container mx-auto px-6 z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight"
          >
            Land Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500 drop-shadow-lg">
              Dream Job
            </span>{" "}
            Today
          </motion.h1>

          {/* Typing Animation */}
          <motion.p
            className="mt-5 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <ReactTyped
              strings={[
                "Find your perfect role from thousands of listings.",
                "Fast, responsive, and built with React + Tailwind + MUI.",
                "Premium glassmorphic job platform for modern hiring.",
              ]}
              typeSpeed={50}
              backSpeed={30}
              backDelay={1500}
              loop
              showCursor
              cursorChar="|"
            />
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Button
              component={Link}
              to="/services"
              variant="contained"
              size="large"
              className="rounded-2xl bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/40 text-white px-6"
            >
              Explore Services
            </Button>
            <Link
              to="/contact"
              className="border border-cyan-300 text-cyan-300 hover:bg-cyan-300 hover:text-black transition rounded-2xl px-6 py-2.5 text-center shadow-md"
            >
              Contact Us
            </Link>
          </motion.div>

          {/* Glassmorphic Counter Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-12 bg-white/10 backdrop-blur-xl border border-white/20 p-6 sm:p-8 rounded-2xl shadow-2xl max-w-3xl mx-auto"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {[
                { label: "Jobs Listed", value: 2000, suffix: "+" },
                { label: "Successful Hires", value: 900, suffix: "+" },
                { label: "User Ratings", value: 4.9, suffix: "/5" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="p-4 rounded-xl shadow-md hover:shadow-lg hover:shadow-cyan-400/30 transition duration-300"
                >
                  <p className="text-3xl sm:text-4xl font-extrabold text-cyan-300">
                    <CountUp
                      start={0}
                      end={item.value}
                      duration={2}
                      delay={0.5}
                    />
                    {item.suffix}
                  </p>
                  <p className="text-gray-200 text-sm sm:text-base">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Aisha Card */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 mx-auto bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg px-5 py-3 flex items-center gap-3 border border-white/20 max-w-xs"
          >
            <Avatar
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Aisha"
              className="w-10 h-10"
            />
            <div>
              <p className="font-semibold text-white text-base">
                Aisha just got hired! 🎉
              </p>
              <p className="text-sm text-cyan-300 font-medium">
                UI/UX Designer @ Fintech Co.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
