
import React from "react";
import Section from "../components/Section";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <Section id="cta" className="relative z-10 mt-16 mb-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="
          relative rounded-3xl
          bg-white/10 backdrop-blur-2xl
          border border-white/20
          p-6 sm:p-10 md:p-14
          flex flex-col md:flex-row items-center justify-between gap-6
          shadow-[0_0_30px_rgba(0,255,255,0.15)]
          hover:shadow-[0_0_45px_rgba(0,255,255,0.35)]
          transition-all duration-500
          overflow-hidden
        "
      >
        {/* Inner Glass Glow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/10 via-transparent to-blue-500/10 opacity-60 rounded-3xl blur-2xl pointer-events-none"></div>

        {/* Left Text Content */}
        <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl font-extrabold text-white drop-shadow-md">
            Ready to accelerate your job hunt?
          </h3>
          <p className="text-white/80 mt-2 max-w-2xl leading-relaxed">
            Let’s build a career site that looks{" "}
            <span className="text-cyan-300 font-semibold">premium</span> and
            performs flawlessly across devices.
          </p>
        </div>

        {/* CTA Button */}
        <Button
          component={Link}
          to="/contact"
          variant="contained"
          size="large"
          className="
            relative z-10
            rounded-2xl
            bg-gradient-to-r from-cyan-400 to-blue-500
            text-black font-semibold
            hover:from-cyan-300 hover:to-blue-400
            hover:scale-105
            transition-all duration-300 ease-in-out
            shadow-lg shadow-cyan-500/40
            px-7 py-3
          "
        >
          Start a Project
        </Button>

        {/* Premium Glass Shine Animation */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-10 animate-pulse"></div>
        </div>
      </motion.div>
    </Section>
  );
};

export default CallToAction;
