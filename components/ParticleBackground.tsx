"use client";

import React, { useEffect } from "react";

const ParticleBackground = () => {
  // Handles WebGL context loss errors
  const handleWebGLError = (event: WebGLContextEvent) => {
    console.error("WebGL context lost:", event);
  };

  useEffect(() => {
    const canvas = document.querySelector("canvas");
    
    // Add event listener for WebGL context lost
    canvas?.addEventListener("webglcontextlost", handleWebGLError);

    // Cleanup the event listener on component unmount
    return () => {
      canvas?.removeEventListener("webglcontextlost", handleWebGLError);
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
