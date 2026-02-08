"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  "/gallery/1.jpeg",
  "/gallery/2.jpeg",
  "/gallery/3.jpeg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
];

const waterBikeImages = images.slice(0, 4);
const mangroveImages = images.slice(4);

export default function Gallery({ fullPage = false, onBack }: { fullPage?: boolean; onBack?: () => void }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className={fullPage ? "w-full" : "bg-white"}>
      <div className={fullPage ? "max-w-7xl mx-auto px-4 pb-12" : "max-w-7xl mx-auto px-4 py-24"}>
        <div className="mb-16">
          {fullPage && (
            <button
              onClick={onBack}
              className="pt-4 mb-4 px-0 py-2 text-cyan-600 hover:text-cyan-700 font-semibold flex items-center gap-2 transition-colors"
            >
              ← Back
            </button>
          )}
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Gallery
          </h2>
          <p className="text-lg text-gray-600">
            Explore the beauty of Roatan through the eyes of our guests
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Water Bike & Beach Adventure Tour</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {waterBikeImages.map((src, index) => (
              <div
                key={src}
                onClick={() => setSelectedImage(src)}
                className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <Image
                  src={src}
                  alt="Roatan tour photo"
                  fill
                  priority={index < 3}
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Mangrove Tunnel Tour</h3>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            {mangroveImages.map((src) => (
              <div
                key={src}
                onClick={() => setSelectedImage(src)}
                className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <Image
                  src={src}
                  alt="Roatan tour photo"
                  fill
                  sizes="(max-width: 768px) 50vw, 50vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Fullscreen gallery image"
              width={1920}
              height={1440}
              className="object-contain max-w-[90vw] max-h-[90vh]"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 text-4xl font-light transition-colors"
              aria-label="Close fullscreen"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
