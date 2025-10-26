import Navbar from "./components/Navbar";

export const metadata = {
  title: "Esther's Portfolio",
  description: "Created by Queen 👑",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "#000",
          color: "#fff",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}