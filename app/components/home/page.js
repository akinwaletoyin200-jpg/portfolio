"use client";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    setTimeout(() => setFade(true), 300);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), hsla(297, 40%, 20%, 0.60)), url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        textAlign: "center",
        opacity: fade ? 1 : 0,
        transform: fade ? "translateY(0)" : "translateY(30px)",
        transition: "all 1s ease",
        padding: isMobile ? "0 20px" : "0 100px",
      }}
    >
      <h1
        style={{
          fontSize: isMobile ? "36px" : "64px",
          textShadow: "0 0 15px #ff4081",
        }}
      >
        Hi, I’m Esther
      </h1>
      <p
        style={{
          fontSize: isMobile ? "18px" : "24px",
          maxWidth: "700px",
          marginTop: "20px",
          textShadow: "0 0 8px #ff80ab",
        }}
      >
        A full stack developer passionate about building modern, colorful, and
        engaging digital experiences.
      </p>
    </div>
  );
}