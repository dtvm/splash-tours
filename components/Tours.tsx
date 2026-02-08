const tours = [
  {
    title: "Water Bike & Beach Adventure Tour",
    description:
      "Experience the perfect mix of fun, relaxation, and adventure with our Water Bike & Beach Tour! Ride across calm, crystal-clear waters on an easy-to-use water bike (no experience needed), then unwind on a beautiful tropical beach.\n\nThis tour is ideal for couples, families, friends, and cruise ship guests looking for a safe, exciting, and memorable experience.",
    icon: "🤿"
  },
  {
    title: "Mangrove Tunnel Tour",
    description:
      "Discover the magic of our Mangrove Tunnel Tour, an unforgettable adventure that takes you deep into a peaceful network of winding mangrove waterways. Glide through narrow natural tunnels formed by arching mangrove trees, where calm waters reflect the beauty of untouched nature all around you.",
    icon: "🏝️"
  },
  {
    title: "Custom Private Tour",
    description:
      "Build your own experience. Perfect for families, groups, or travelers with specific interests.",
    icon: "🎯"
  },
];

export default function Tours({ fullPage = false, onBack }: { fullPage?: boolean; onBack?: () => void }) {
  return (
    <section id="tours" className={fullPage ? "w-full" : "max-w-7xl mx-auto px-4 py-24"}>
      <div className={fullPage ? "max-w-7xl mx-auto px-4 pb-12 md:pb-4" : ""}>
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
            Tours in Roatan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Choose from our curated island experiences or create your own adventure
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div
              key={tour.title}
              className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-cyan-300 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{tour.icon}</div>
              
              <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-cyan-600 transition-colors duration-300 min-h-16">
                {tour.title}
              </h3>

              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {tour.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
