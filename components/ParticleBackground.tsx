"use client";

import React, { useEffect } from "react";

const ParticleBackground = () => {
  const handleWebGLError = (event: Event) => {
    const webGLEvent = event as WebGLContextEvent; // Type assertion
    console.error("WebGL context lost:", webGLEvent.statusMessage);
  };

  useEffect(() => {
    const canvas = document.querySelector("canvas");

    canvas?.addEventListener(
      "webglcontextlost",
      handleWebGLError as EventListener // Explicit type assertion
    );

    return () => {
      canvas?.removeEventListener(
        "webglcontextlost",
        handleWebGLError as EventListener
      );
    };
  }, []);

  return (
    <canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default ParticleBackground;
