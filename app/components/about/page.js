"use client";
import React, { useState, useEffect } from "react";

export default function About() {
  const [isMobile, setIsMobile] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    setTimeout(() => setVisible(true), 300);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "all 1s ease",
        padding: isMobile ? "20px" : "60px",
      }}
    >
      <h2 style={{ fontSize: isMobile ? "32px" : "50px", color: "#333" }}>
        About Me
      </h2>
      <p
        style={{
          fontSize: isMobile ? "18px" : "22px",
          color: "#444",
          textAlign: "center",
          maxWidth: "700px",
          lineHeight: "1.6",
        }}
      >
        I’m Esther — a Passionate Web developer and computer science student at the university of BOUESTI, i create clean, interactive, and user-focused websites.

        i studied Web development at Early Code Institute abuja, where i gained hand-on experience with HTML, CSS, JAVASCRIPT, AND REACT .
        currently, i'm pursuing a degree in computing and information science, strengthning my knowledge of software development and problem-solving.

        i enjoy turning ideas into functional, visually applealing projects and continuously learning new tools to improve my craft.


      </p>
    </div>
  );
}