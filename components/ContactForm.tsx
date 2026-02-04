"use client";

import { useState } from "react";

const tours = [
  "Island Highlights",
  "Beach & Snorkel",
  "Custom Private Tour",
];

export default function ContactForm({ fullPage = false, onBack }: { fullPage?: boolean; onBack?: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    tour: "",
    date: "",
    message: "",
  });

  const [status, setStatus] = useState<null | "success" | "error" | "loading">(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", whatsapp: "", tour: "", date: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className={fullPage ? "w-full" : "bg-gradient-to-b from-gray-50 to-white py-24"}>
      <div className={fullPage ? "max-w-2xl mx-auto px-4 pb-12" : "max-w-2xl mx-auto px-4"}>
        <div className="mb-12">
          {fullPage && (
            <button
              onClick={onBack}
              className="pt-4 mb-4 px-0 py-2 text-cyan-600 hover:text-cyan-700 font-semibold flex items-center gap-2 transition-colors"
            >
              ← Back
            </button>
          )}
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Contact & Reservations</h2>
          <p className="text-lg text-gray-600">
            Ready to explore? Get in touch and let's plan your perfect island adventure.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-colors"
            />
          </div>

          <input
            type="text"
            name="whatsapp"
            placeholder="WhatsApp Number (optional)"
            value={formData.whatsapp}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-colors"
          />

          <div className="grid md:grid-cols-2 gap-5">
            <select
              name="tour"
              value={formData.tour}
              onChange={handleChange}
              required
              className="p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-colors"
            >
              <option value="">Select a Tour</option>
              {tours.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>

            <div className="relative">
              {!formData.date && (
                <div className="absolute inset-0 flex items-center pointer-events-none pl-3 text-gray-500 md:hidden">
                  Select Date
                </div>
              )}
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-colors ${
                  formData.date ? "text-gray-900" : "md:text-gray-900 text-transparent"
                }`}
              />
            </div>
          </div>

          <textarea
            name="message"
            placeholder="Tell us about your group, interests, or special requests..."
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-colors"
            rows={5}
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {status === "loading" ? (
              <span className="flex items-center justify-center gap-2">
                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Sending...
              </span>
            ) : (
              "Send Reservation Request"
            )}
          </button>

          {status === "success" && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 flex items-start gap-3">
              <span className="text-xl">✓</span>
              <div>
                <p className="font-semibold">Request sent successfully!</p>
                <p className="text-sm">We'll respond within 24 hours.</p>
              </div>
            </div>
          )}
          {status === "error" && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 flex items-start gap-3">
              <span className="text-xl">✕</span>
              <div>
                <p className="font-semibold">Something went wrong</p>
                <p className="text-sm">Please try again or contact us on WhatsApp.</p>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
