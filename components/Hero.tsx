import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Fixed background image */}
      <div className="fixed inset-0 w-full h-screen -z-10">
        <Image
          src="/gallery/4.jpg"
          alt="Roatan island"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay text/buttons */}
      <div className="absolute inset-0 flex flex-col items-center justify-between text-center px-4 pt-20 md:pt-40 pb-64 md:pb-40">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
            Explore Roatan with a Local
          </h1>

          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-white/90 drop-shadow-lg font-light">
            Private island tours, beaches, snorkeling, and hidden gems — at your pace.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Contact / Reserve
          </a>

          <a
            href="https://wa.me/50494759603"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 backdrop-blur-sm hover:shadow-lg transition-all duration-200"
          >
            WhatsApp Me
          </a>
        </div>
      </div>
    </section>
  );
}
