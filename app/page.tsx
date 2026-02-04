"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Tours from "@/components/Tours";
import Pricing from "@/components/Pricing";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const [currentView, setCurrentView] = useState<"home" | "tours" | "pricing" | "gallery" | "contact">("home");

  // Listen for hash changes
  if (typeof window !== "undefined") {
    window.addEventListener("hashchange", () => {
      const hash = window.location.hash.slice(1);
      if (hash === "tours") setCurrentView("tours");
      else if (hash === "pricing") setCurrentView("pricing");
      else if (hash === "gallery") setCurrentView("gallery");
      else if (hash === "contact") setCurrentView("contact");
      else setCurrentView("home");
    });
  }

  const handleBack = () => {
    setCurrentView("home");
    window.location.hash = "";
  };

  return (
    <>
      {currentView === "home" && (
        <>
          <Hero />
        </>
      )}
      {currentView === "tours" && (
        <div style={{ background: 'linear-gradient(to bottom right, #f0f9ff, #e0f2fe)', minHeight: '100vh' }}>
          <Tours fullPage={true} onBack={handleBack} />
        </div>
      )}
      {currentView === "pricing" && (
        <div style={{ background: 'linear-gradient(to bottom right, #f0f9ff, #e0f2fe)', minHeight: '100vh' }}>
          <Pricing fullPage={true} onBack={handleBack} />
        </div>
      )}
      {currentView === "gallery" && (
        <div style={{ background: 'linear-gradient(to bottom right, #f0f9ff, #e0f2fe)', minHeight: '100vh' }}>
          <Gallery fullPage={true} onBack={handleBack} />
        </div>
      )}
      {currentView === "contact" && (
        <div style={{ background: 'linear-gradient(to bottom right, #f0f9ff, #e0f2fe)', minHeight: '100vh' }}>
          <ContactForm fullPage={true} onBack={handleBack} />
        </div>
      )}
    </>
  );
}
