"use client";
import React, { useState, useEffect } from "react";

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projects = [
    { title: "Portfolio Website", desc: "A responsive portfolio using React." },
    { title: "Food App", desc: "A colorful food ordering UI." },
    { title: "Swiper Gallery", desc: "A card-based animation slider." },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: isMobile ? "30px 15px" : "60px",
        transition: "all 0.5s ease",
      }}
    >
      <h2 style={{ fontSize: isMobile ? "30px" : "50px", color: "#fff" }}>
        My Projects
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "25px",
          marginTop: "30px",
        }}
      >
        {projects.map((p) => (
          <div
            key={p.title}
            style={{
              background: "rgba(255,255,255,0.9)",
              borderRadius: "15px",
              padding: "25px",
              width: isMobile ? "90%" : "280px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
              textAlign: "center",
              transition: "all 0.4s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
            }}
          >
            <h3 style={{ color: "#333" }}>{p.title}</h3>
            <p style={{ color: "#555" }}>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}