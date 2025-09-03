


import React from "react";
import { motion } from "framer-motion";
import Section from "../components/Section";

export default function About() {
  const principles = [
    "Clarity over clutter",
    "Accessible by default",
    "Performance first",
    "Consistent spacing & rhythm",
    "Meaningful motion",
    "Real device testing",
  ];

  return (
    <div className="pb-16 relative">
      {/* ==== Glass Gradient Background ==== */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5]/20 via-[#6D28D9]/20 to-[#3B82F6]/30 backdrop-blur-[2px] -z-10"></div>

      {/* ==== ABOUT JOB HUNT ==== */}
      <Section title="About Job Hunt" subtitle="Who we are">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* ========== Our Mission ========== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg shadow-cyan-400/20 p-6 hover:shadow-cyan-400/40 hover:scale-[1.02] transition-all"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent mb-3">
              Our Mission
            </h3>
            <p className="text-gray-300 leading-relaxed">
              We craft elegant, responsive career experiences that help candidates discover
              and secure roles faster. Our stack blends{" "}
              <span className="text-cyan-300 font-semibold">React</span>,{" "}
              <span className="text-cyan-300 font-semibold">Material UI</span>, and{" "}
              <span className="text-cyan-300 font-semibold">Tailwind CSS</span> to deliver speed,
              accessibility, and a polished brand feel.
            </p>
          </motion.div>

          {/* ========== Why It Matters ========== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg shadow-cyan-400/20 p-6 hover:shadow-cyan-400/40 hover:scale-[1.02] transition-all"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent mb-3">
              Why It Matters
            </h3>
            <p className="text-gray-300 leading-relaxed">
              First impressions count. We design for{" "}
              <span className="text-cyan-300 font-semibold">clarity</span> and{" "}
              <span className="text-cyan-300 font-semibold">conversion</span>, with clean layouts,
              strong hierarchy, and delightful{" "}
              <span className="text-cyan-300 font-semibold">micro-interactions</span> that work
              seamlessly across mobiles, tablets, and desktops.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* ==== PRINCIPLES ==== */}
      <div className="mt-16"> 
        <Section title="Principles" subtitle="Our Design Playbook">
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {principles.map((p, index) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-md shadow-cyan-400/10 hover:shadow-cyan-400/40 hover:scale-[1.05] transition-all p-5 text-center text-gray-200 font-medium"
              >
                {p}
              </motion.li>
            ))}
          </ul>
        </Section>
      </div>
    </div>
  );
}
