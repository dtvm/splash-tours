"use client";

import Image from "next/image";

const images = [
  "/gallery/1.jpeg",
  "/gallery/2.jpeg",
  "/gallery/3.jpeg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
];

export default function Gallery({ fullPage = false, onBack }: { fullPage?: boolean; onBack?: () => void }) {
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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src) => (
            <div
              key={src}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src={src}
                alt="Roatan tour photo"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
