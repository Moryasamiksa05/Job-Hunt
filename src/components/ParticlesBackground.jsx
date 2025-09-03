import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "transparent" },
        fpsLimit: 60,
        detectRetina: true,
        particles: {
          number: {
            value: 80,
            density: { enable: true, value_area: 900 },
          },
          color: {
            value: ["#38bdf8", "#6366f1", "#a855f7"], // cyan + blue + purple mix
          },
          shape: { type: "circle" },
          opacity: {
            value: 0.4,
            random: true,
            anim: { enable: true, speed: 0.8, opacity_min: 0.1, sync: false },
          },
          size: {
            value: 4,
            random: true,
            anim: { enable: true, speed: 3, size_min: 1, sync: false },
          },
          links: {
            enable: true,
            distance: 140,
            color: "#67e8f9", // Light cyan glow
            opacity: 0.15,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
            attract: { enable: false },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            grab: { distance: 150, line_linked: { opacity: 0.5 } },
            push: { quantity: 3 },
            repulse: { distance: 180, duration: 0.4 },
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;

