/* jshint ignore:start */
// src/ParticlesBackground.js
import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // or use loadFull if you need advanced features
import { useCallback } from "react";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // loadSlim or loadFull — must match your installed plugin
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: { value: 50 },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 3 },
          move: { enable: true, speed: 1 },
        },
        background: { color: "#0f172a" }, // dark background
      }}
    />
  );
}
