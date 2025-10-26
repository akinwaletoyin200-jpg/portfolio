export default function Home() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage:
          "linear-gradient(135deg, #ff69b4, #8a2be2, #1e90ff)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>
        Welcome to <span style={{ color: "#111" }}>Esther's Portfolio</span>
      </h1>
      <p style={{ maxWidth: "600px", fontSize: "18px" }}>
        Explore my work, projects, and contact me easily 💫
      </p>
    </div>
  );
}