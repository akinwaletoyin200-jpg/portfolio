"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navStyle = {
    background: "linear-gradient(90deg, #111, #1a1a1a, #222)",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    padding: "15px 20px",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
    transition: "0.3s",
  };

  const menuButton = {
    cursor: "pointer",
    background: menuOpen ? "#ff69b4" : "#333",
    borderRadius: "8px",
    padding: "5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const line = {
    width: "25px",
    height: "3px",
    backgroundColor: "#fff",
    margin: "4px 0",
    transition: "0.3s",
  };


  return (

    <main style={navStyle}>
      <h2
        style={{
          color: "#fff",
          fontSize: "26px",
          textShadow: "0 0 8px #ff69b4",
          letterSpacing: "2px",
          margin: 0,
        }}
      >
        Esther's Portfolio<span style={{ color: "#ff69b4" }}>.</span>
      </h2>

        {!isMobile && (
        <div style={{ display: "flex", gap: "30px" }}>
        
           <Link
             href="/components/home"
              style={linkStyle}
              onMouseEnter={(e) => (e.target.style.color = "#ff69b4")}
              onMouseLeave={(e) => (e.target.style.color = "#fff")}
            >
             <p>HOME</p>
            </Link>
            <Link
             href="/components/about"
              style={linkStyle}
              onMouseEnter={(e) => (e.target.style.color = "#ff69b4")}
              onMouseLeave={(e) => (e.target.style.color = "#fff")}
            >
             <p>ABOUT</p>
            </Link>
            <Link
             href="/components/contact"
              style={linkStyle}
              onMouseEnter={(e) => (e.target.style.color = "#ff69b4")}
              onMouseLeave={(e) => (e.target.style.color = "#fff")}
            >
             <p>CONTACT</p>
            </Link>
           <Link
             href="/components/projects"
              style={linkStyle}
              onMouseEnter={(e) => (e.target.style.color = "#ff69b4")}
              onMouseLeave={(e) => (e.target.style.color = "#fff")}
            >
             <p>PROJECTS</p>
            </Link>
          
        </div>
      )}

          
            

            {isMobile && (
        <div>
          <div onClick={() => setMenuOpen(!menuOpen)} style={menuButton}>
            <div
              style={{
                ...line,
                transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
              }}
            />
            <div
              style={{
                ...line,
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <div
              style={{
                ...line,
                transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
              }}
            />
          </div>

          {menuOpen && (
            <div
              style={{
                position: "absolute",
                top: "60px",
                right: "20px",
                background: "#222",
                borderRadius: "8px",
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              
                <Link
                  href="/components/about"
                  style={{ ...linkStyle, fontSize: "16px" }}
                  onClick={() => setMenuOpen(false)}
                >
                 About
                </Link>
                 <Link
                  href="/components/projects"
                  style={{ ...linkStyle, fontSize: "16px" }}
                  onClick={() => setMenuOpen(false)}
                >
                 Projects
                </Link>
               <Link
                  href="/components/contact"
                  style={{ ...linkStyle, fontSize: "16px" }}
                  onClick={() => setMenuOpen(false)}
                >
                 Contact
                </Link>
                 <Link
                  href="/components/home"
                  style={{ ...linkStyle, fontSize: "16px" }}
                  onClick={() => setMenuOpen(false)}
                >
                 Home
                </Link>
            </div>
          )}
        </div>
      )}
          
        
    </main>
  );
}