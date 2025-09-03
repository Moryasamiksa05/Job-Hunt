import React from "react";
import { motion } from "framer-motion";
import Avatar from "@mui/material/Avatar";
import Section from "../components/Section";

const testimonials = [
  {
    name: "Aisha Khan",
    role: "Product Designer",
    text: "Found my dream role within weeks. The UI is sleek and fast!",
  },
  {
    name: "Rohan Patel",
    role: "Frontend Engineer",
    text: "Loved the application tracker and clean experience.",
  },
  {
    name: "Emily Chen",
    role: "Data Analyst",
    text: "Responsive on all devices and super intuitive.",
  },
];

const TESTIMONIALS = () => {
  return (
    <section className="relative py-16">
      <Section
        id="testimonials"
        subtitle="Loved by professionals"
        title="Hear it from our users"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 relative z-10">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
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

                {/* Testimonial Text */}
                <p className="relative z-10 text-white/90 italic leading-relaxed text-lg">
                  “{t.text}”
                </p>

                {/* User Info */}
                <div className="relative z-10 flex items-center gap-4 mt-6">
                  <Avatar
                    alt={t.name}
                    src={`https://ui-avatars.com/api/?name=${t.name}&background=4F46E5&color=fff`}
                    className="w-12 h-12 shadow-md"
                  />
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-sm text-cyan-300">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </section>
  );
};

export default TESTIMONIALS;
