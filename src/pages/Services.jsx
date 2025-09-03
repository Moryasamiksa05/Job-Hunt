import React from "react";
import { motion } from "framer-motion";
import Section from "../components/Section";
import Button from "@mui/material/Button";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import SpeedIcon from "@mui/icons-material/Speed";
import DevicesIcon from "@mui/icons-material/Devices";

const services = [
  {
    title: "UI/UX & Branding",
    desc: "High-converting, modern layouts with clean typography and consistent design system.",
    icon: <DesignServicesIcon fontSize="large" />,
  },
  {
    title: "Performance & SEO",
    desc: "Best practices for Core Web Vitals, semantic markup, and blazing fast load times.",
    icon: <SpeedIcon fontSize="large" />,
  },
  {
    title: "Responsive & Accessible",
    desc: "WCAG-friendly components that work flawlessly across all devices.",
    icon: <DevicesIcon fontSize="large" />,
  },
];

export default function Services() {
  return (
    <div className="pb-24 relative">
      {/* ==== Background Glow ==== */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5]/15 via-[#6D28D9]/15 to-[#3B82F6]/20 backdrop-blur-[2px] -z-10"></div>

      {/* ==== SERVICES SECTION ==== */}
      <Section title="Services" subtitle="What We Do">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, index) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.06,
                rotateX: 6,
                rotateY: -6,
                transition: { duration: 0.4 },
              }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg shadow-cyan-400/20 hover:shadow-cyan-400/50 transition-all duration-300 p-6"
            >
              {/* Icon */}
              <div className="h-14 w-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center shadow-md shadow-cyan-300/40 mb-5 text-cyan-300">
                {s.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent mb-3">
                {s.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed flex-1">{s.desc}</p>

              {/* Button */}
              <Button
                variant="outlined"
                className="mt-6 rounded-xl border-cyan-400 text-cyan-300 normal-case font-semibold hover:bg-cyan-400 hover:text-black hover:shadow-lg transition-all"
              >
                Learn More
              </Button>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ==== PACKAGES SECTION ==== */}
      <Section
        title="Packages"
        subtitle="Pick a Plan That Fits"
      >
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Starter",
              price: "₹19,999",
              perks: ["Landing page", "Basic SEO", "2 revisions"],
            },
            {
              name: "Growth",
              price: "₹49,999",
              perks: ["Multi-page site", "Brand kit", "Analytics", "5 revisions"],
            },
            {
              name: "Scale",
              price: "₹99,999",
              perks: [
                "Custom components",
                "Integrations",
                "A/B testing",
                "Unlimited revisions",
              ],
            },
          ].map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.07,
                rotateX: 5,
                rotateY: 5,
                transition: { duration: 0.4 },
              }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/60 transition-all duration-300 p-6 flex flex-col"
            >
              {/* Package Name */}
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                {pkg.name}
              </h3>

              {/* Price */}
              <p className="text-3xl font-extrabold text-gray-100 mt-3">
                {pkg.price}
              </p>

              {/* Perks */}
              <ul className="mt-5 space-y-2 text-gray-300 flex-1">
                {pkg.perks.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="text-cyan-400">✔</span>
                    {p}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <Button
                variant="contained"
                className="mt-6 rounded-xl bg-cyan-400 text-black font-semibold shadow-md shadow-cyan-300 hover:bg-cyan-300 hover:shadow-lg transition-all"
              >
                Choose {pkg.name}
              </Button>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}

