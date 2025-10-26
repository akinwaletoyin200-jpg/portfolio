"use client";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const phoneNumber = "2347026799651"; 
    const text = `Hello, my name is ${name}. ${message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-700 text-white px-4">
      <h1 className="text-4xl font-bold mb-6">Contact Me 💬</h1>

      <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg w-full max-w-md">
        <label className="block mb-3">
          <span className="text-lg font-medium">Your Name</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full mt-2 p-3 rounded bg-white/20 text-white outline-none focus:ring-2 focus:ring-green-400"
          />
        </label>

        <label className="block mb-4">
          <span className="text-lg font-medium">Message</span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message"
            className="w-full mt-2 p-3 rounded bg-white/20 text-white outline-none focus:ring-2 focus:ring-green-400 h-28 resize-none"
          ></textarea>
        </label>

        <button
          onClick={handleSend}
          className="w-full py-3 rounded bg-green-500 hover:bg-green-600 text-white text-lg font-semibold transition-all"
        >
          Send via WhatsApp
        </button>
      </div>

      <p className="mt-6 text-gray-300 text-sm">
        You can also reach me directly on WhatsApp 💚
      </p>
    </div>
  );
}