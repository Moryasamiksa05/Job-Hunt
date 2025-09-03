

import React from "react";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SecurityIcon from "@mui/icons-material/Security";
import Section from "../components/Section";
import { motion } from "framer-motion";

const features = [
  {
    title: "Curated Jobs",
    desc: "Handpicked opportunities across top companies.",
    icon: <WorkOutlineIcon fontSize="large" />,
  },
  {
    title: "Growth Focused",
    desc: "Track applications and grow your career.",
    icon: <TrendingUpIcon fontSize="large" />,
  },
  {
    title: "Secure & Private",
    desc: "Your data stays yours — always.",
    icon: <SecurityIcon fontSize="large" />,
  },
];

const FeatureSection = () => {
  return (
    <section className="relative py-16">
      <Section
        id="features"
        subtitle="What We Offer"
        title="Designed to impress. Built to convert."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 relative z-10">
          {features.map((f, index) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div
                className="
                  relative group
                  p-6 rounded-3xl
                  glass-card
                  border border-white/20
                  shadow-[0_0_25px_rgba(255,255,255,0.1)]
                  hover:shadow-[0_0_45px_rgba(0,255,255,0.35)]
                  hover:scale-105
                  transition-all duration-500
                  overflow-hidden
                "
              >
                {/* Inner Glass Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/10 via-transparent to-blue-500/10 opacity-70 rounded-3xl blur-2xl pointer-events-none"></div>

                {/* Icon */}
                <div className="relative z-10 h-14 w-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-white grid place-items-center mb-5 shadow-lg shadow-cyan-400/40">
                  {f.icon}
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-xl font-bold mb-2 text-white">
                  {f.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-white/80">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </section>
  );
};

export default FeatureSection;
