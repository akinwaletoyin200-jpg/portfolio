"use client";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const phoneNumber = "2347026799651"; // WhatsApp number

 const handleSend = () => {
  if (!name || !message) {
    alert("Please enter both your name and message!");
    return;
  }

  const phoneNumber = "2347026799651"; // your WhatsApp number
  const text = `Hello, my name is ${name}. ${message}`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

  window.open(whatsappUrl, "_blank");
};
  return (
    <>
      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          background: linear-gradient(135deg, #a855f7, #f472b6, #fcd34d);
        }
        .title {
          font-size: 3rem;
          font-weight: bold;
          background: linear-gradient(to right, #6b21a8, #db2777);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 2rem;
          text-align: center;
        }
        .card {
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(12px);
          padding: 2rem;
          border-radius: 2rem;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
          width: 100%;
          max-width: 400px;
        }
        input,
        textarea {
          width: 100%;
          padding: 0.75rem;
          border-radius: 1rem;
          border: none;
          margin-top: 0.5rem;
          margin-bottom: 1rem;
          outline: none;
          font-size: 1rem;
        }
        input {
          background: rgba(255, 255, 255, 0.5);
        }
        textarea {
          background: rgba(255, 255, 255, 0.5);
          resize: none;
          height: 6rem;
        }
        button {
          width: 100%;
          padding: 0.75rem;
          border-radius: 1rem;
          font-size: 1.1rem;
          font-weight: bold;
          border: none;
          color: white;
          background: linear-gradient(to right, #34d399, #10b981);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        button:hover {
          background: linear-gradient(to right, #059669, #047857);
        }
        .info {
          margin-top: 2rem;
          text-align: center;
          font-weight: 500;
          color: #111827;
        }
        @media (max-width: 500px) {
          .title {
            font-size: 2.25rem;
          }
          .card {
            padding: 1.5rem;
          }
        }
      `}</style>

      <div className="container">
        <h1 className="title">Contact Me 💬</h1>

        <div className="card">
          <label>
            <span>Your Name</span>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label>
            <span>Message</span>
            <textarea
              placeholder="Type your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </label>

          <button onClick={handleSend}>Send via WhatsApp</button>
        </div>

        <p className="info">
          Or reach me directly on call <br />
          <strong>+234 702 679 9651</strong>
        </p>
      </div>
    </>
  );
}