const pricing = [
  {
    name: "Water Bike & Beach Adventure Tour",
    price: "$60",
    note: "per person",
    details: [
      "Private transportation",
      "Life jacket provided",
      "Water Bike",
      "Beach time",
    ],
  },
  {
    name: "Mangrove Tunnel Tour",
    price: "$65",
    note: "per person",
    details: [
      "Private transportation",
      "Scenic ride through natural mangrove tunnels",
      "Knowledgeable local guide",
      "Wildlife viewing and photo opportunities",
      "Calm, safe, and friendly experience",
      "Suitable for all ages"
    ],
  },
  {
    name: "2-Tank Scuba Dive Adventure",
    price: "$180",
    note: "per person",
    details: [
      "Private transportation",
      "Two guided scuba dives",
      "Professional dive guide",
      "Full dive equipment",
    ],
  },
  {
    name: "Custom Private Tour",
    price: "Price varies",
    note: "",
    details: [
      "Fully customizable",
      "Families & groups",
      "Flexible timing",
      "Local recommendations",
    ],
  },
];

export default function Pricing({ fullPage = false, onBack }: { fullPage?: boolean; onBack?: () => void }) {
  return (
    <section id="pricing" className={fullPage ? "w-full" : "bg-gradient-to-b from-white to-blue-50 py-24"}>
      <div className={fullPage ? "max-w-7xl mx-auto px-4 pb-12" : "max-w-7xl mx-auto px-4"}>
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
            Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Transparent pricing for unforgettable island experiences
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {pricing.map((plan, idx) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 flex flex-col transition-all duration-300 relative ${
                idx === 1 
                  ? "bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-2xl hover:shadow-2xl md:scale-105 transform" 
                  : "bg-white border border-gray-200 hover:shadow-xl hover:-translate-y-2"
              }`}
            >
              {idx === 1 && (
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 px-6 py-2 rounded-full text-base font-bold shadow-xl">
                  Popular
                </div>
              )}
              <h3 className={`text-2xl font-bold mb-2 ${idx === 1 ? "text-white" : "text-gray-900"}`}>
                {plan.name}
              </h3>

              <div className="mb-6">
                <span className={`text-4xl font-bold ${idx === 1 ? "text-white" : "text-cyan-600"}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ml-2 ${idx === 1 ? "text-blue-100" : "text-gray-500"}`}>
                  {plan.note}
                </span>
              </div>

              <ul className={`space-y-3 mb-8 flex-grow ${idx === 1 ? "text-blue-50" : "text-gray-700"}`}>
                {plan.details.map((detail) => (
                  <li key={detail} className="flex items-start">
                    <span className="mr-3 text-lg">✓</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-auto text-center py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg ${
                  idx === 1
                    ? "bg-white text-cyan-600 hover:bg-blue-50"
                    : "bg-cyan-600 text-white hover:bg-cyan-700"
                }`}
              >
                Request Availability
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
