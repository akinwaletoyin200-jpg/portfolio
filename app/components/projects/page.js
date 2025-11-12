"use client";
import React from "react";

export default function Projects() {
  const isMobile = typeof window !== "undefined" ? window.innerWidth <= 768 : false;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: isMobile ? "30px 15px" : "60px",
      }}
    >
      <h2
        style={{
          fontSize: isMobile ? "30px" : "50px",
          color: "#fff",
          fontWeight: "bold",
          marginBottom: "25px",
        }}
      >
        My Projects
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "25px",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        
        <a
          href="https://portfolio-rho-five-14.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", width: isMobile ? "90%" : "280px" }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.9)",
              borderRadius: "15px",
              padding: "25px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
              textAlign: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
            }}
          >
            <h3 style={{ color: "#333", marginBottom: "10px" }}>Portfolio Website</h3>
            <p style={{ color: "#555", lineHeight: "1.5" }}>
              A responsive portfolio using React.
            </p>
          </div>
        </a>

        <a
          href="https://my-planner-five.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", width: isMobile ? "90%" : "280px" }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.9)",
              borderRadius: "15px",
              padding: "25px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
              textAlign: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
            }}
          >
            <h3 style={{ color: "#333", marginBottom: "10px" }}>Planner app</h3>
            <p style={{ color: "#555", lineHeight: "1.5" }}>
              Or.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}