export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-200 mt-0">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
              Splash Tours
            </h3>
            <p className="text-gray-400 text-sm">
              Authentic island experiences with a local perspective. Explore Roatan like never before.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#tours" className="hover:text-cyan-400 transition-colors">Tours</a></li>
              <li><a href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing</a></li>
              <li><a href="#gallery" className="hover:text-cyan-400 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <span className="text-base">📍</span>
                <span>Roatan, Honduras</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-base">💬</span>
                <a href="https://wa.me/50494759603" className="hover:text-cyan-400 transition-colors">WhatsApp Us</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-base">✉️</span>
                <a href="mailto:splashtours504@gmail.com" className="hover:text-cyan-400 transition-colors">splashtours504@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} Splash Tours. All rights reserved.</p>
          <p>Crafted for island lovers & adventure seekers 🌊</p>
        </div>
      </div>
    </footer>
  );
}
