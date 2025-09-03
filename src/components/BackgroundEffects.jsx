import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const BackgroundEffects = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      {/* ===== FULL BACKGROUND IMAGE ===== */}
      <div className="fixed inset-0 z-0">
        <img
          src="/src/assets/web-bg.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />

        {/* ===== GRADIENT TRANSPARENT OVERLAY ===== */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5]/30 via-[#6D28D9]/30 to-[#3B82F6]/30"></div>

        {/* ===== GLASS SHINE OVERLAY ===== */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.12)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.08)_0%,transparent_50%),radial-gradient(circle_at_50%_90%,rgba(255,255,255,0.05)_0%,transparent_50%)] backdrop-blur-[20px]"></div>
      </div>

      {/* ===== FLOATING PARTICLES  ===== */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="fixed inset-0 z-10"
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              push: { quantity: 3 },
              repulse: { distance: 120, duration: 0.3 },
            },
          },
          particles: {
            color: { value: ["#06b6d4", "#3b82f6", "#a855f7"] },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.15,
              width: 1,
            },
            collisions: { enable: false },
            move: {
              directions: "none",
              enable: true,
              outModes: "out",
              random: true,
              speed: 1,
              straight: false,
            },
            number: { density: { enable: true, area: 900 }, value: 65 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 4 } },
          },
          detectRetina: true,
        }}
      />
    </>
  );
};

export default BackgroundEffects;
