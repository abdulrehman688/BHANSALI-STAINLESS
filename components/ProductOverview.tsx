"use client";
import { useEffect, useRef } from "react";

const WeldNeckIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full" aria-hidden="true">
    <rect x="16" y="48" width="32" height="6" rx="2" fill="#1565C0" fillOpacity="0.15" stroke="#1565C0" strokeWidth="2"/>
    <path d="M24 48 L20 28 M40 48 L44 28" stroke="#1565C0" strokeWidth="2" strokeLinecap="round"/>
    <rect x="20" y="22" width="24" height="6" rx="1.5" fill="#1565C0" fillOpacity="0.2" stroke="#1565C0" strokeWidth="2"/>
    <rect x="26" y="10" width="12" height="12" rx="2" fill="#1565C0" fillOpacity="0.3" stroke="#1565C0" strokeWidth="2"/>
    <circle cx="20" cy="51" r="2" fill="#1565C0"/>
    <circle cx="32" cy="51" r="2" fill="#1565C0"/>
    <circle cx="44" cy="51" r="2" fill="#1565C0"/>
  </svg>
);

const SlipOnIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full" aria-hidden="true">
    <circle cx="32" cy="32" r="22" stroke="#1565C0" strokeWidth="2.5"/>
    <circle cx="32" cy="32" r="14" stroke="#1565C0" strokeWidth="2"/>
    <rect x="10" y="29" width="44" height="6" rx="1.5" fill="#1565C0" fillOpacity="0.1" stroke="#1565C0" strokeWidth="1.5"/>
    <circle cx="14" cy="32" r="2.5" fill="#1565C0"/>
    <circle cx="50" cy="32" r="2.5" fill="#1565C0"/>
    <circle cx="32" cy="14" r="2.5" fill="#1565C0"/>
    <circle cx="32" cy="50" r="2.5" fill="#1565C0"/>
  </svg>
);

const BlindIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full" aria-hidden="true">
    <circle cx="32" cy="32" r="22" stroke="#1565C0" strokeWidth="2.5"/>
    <circle cx="32" cy="32" r="22" fill="#1565C0" fillOpacity="0.08"/>
    <circle cx="32" cy="32" r="14" fill="#1565C0" fillOpacity="0.12" stroke="#1565C0" strokeWidth="1.5" strokeDasharray="3 2"/>
    <rect x="10" y="29" width="44" height="6" rx="1.5" fill="#1565C0" fillOpacity="0.15" stroke="#1565C0" strokeWidth="1.5"/>
    <circle cx="14" cy="32" r="2.5" fill="#1565C0"/>
    <circle cx="50" cy="32" r="2.5" fill="#1565C0"/>
    <circle cx="32" cy="14" r="2.5" fill="#1565C0"/>
    <circle cx="32" cy="50" r="2.5" fill="#1565C0"/>
    <line x1="26" y1="26" x2="38" y2="38" stroke="#1565C0" strokeWidth="2" strokeLinecap="round"/>
    <line x1="38" y1="26" x2="26" y2="38" stroke="#1565C0" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const SocketWeldIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full" aria-hidden="true">
    <circle cx="32" cy="32" r="18" stroke="#1565C0" strokeWidth="2.5"/>
    <circle cx="32" cy="32" r="10" stroke="#1565C0" strokeWidth="1.5"/>
    <path d="M32 14 L32 50" stroke="#1565C0" strokeWidth="5" strokeLinecap="round"/>
    <path d="M23 14 L41 14" stroke="#1565C0" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M25 50 L39 50" stroke="#1565C0" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2"/>
    <circle cx="14" cy="32" r="2.5" fill="#1565C0"/>
    <circle cx="50" cy="32" r="2.5" fill="#1565C0"/>
  </svg>
);

const LapJointIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full" aria-hidden="true">
    <circle cx="32" cy="32" r="20" stroke="#1565C0" strokeWidth="2.5"/>
    <circle cx="32" cy="32" r="11" stroke="#1565C0" strokeWidth="2"/>
    <path d="M8 29 L56 29 L56 35 L8 35 Z" fill="#1565C0" fillOpacity="0.12" stroke="#1565C0" strokeWidth="1.5"/>
    <path d="M4 24 L4 40 M60 24 L60 40" stroke="#1565C0" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="14" cy="22" r="2.5" fill="#1565C0"/>
    <circle cx="50" cy="22" r="2.5" fill="#1565C0"/>
    <circle cx="14" cy="42" r="2.5" fill="#1565C0"/>
    <circle cx="50" cy="42" r="2.5" fill="#1565C0"/>
  </svg>
);

const ThreadedIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full" aria-hidden="true">
    <circle cx="32" cy="32" r="20" stroke="#1565C0" strokeWidth="2.5"/>
    <path d="M14 26 Q20 28 26 26 Q32 24 38 26 Q44 28 50 26" stroke="#1565C0" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M14 30 Q20 32 26 30 Q32 28 38 30 Q44 32 50 30" stroke="#1565C0" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M14 34 Q20 36 26 34 Q32 32 38 34 Q44 36 50 34" stroke="#1565C0" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M14 38 Q20 40 26 38 Q32 36 38 38 Q44 40 50 38" stroke="#1565C0" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="14" cy="20" r="2.5" fill="#1565C0"/>
    <circle cx="50" cy="20" r="2.5" fill="#1565C0"/>
    <circle cx="14" cy="44" r="2.5" fill="#1565C0"/>
    <circle cx="50" cy="44" r="2.5" fill="#1565C0"/>
  </svg>
);

const flangeTypes = [
  {
    name: "Weld Neck Flanges",
    Icon: WeldNeckIcon,
    desc: "Long tapered hub provides excellent stress distribution, ideal for high-pressure and high-temperature service.",
    sizeRange: '1/2" to 48"',
    pressureClass: "150# to 2500#",
    standard: "ASME B16.5, B16.47",
    tag: "High Pressure",
    tagColor: "bg-blue-100 text-blue-700",
    uses: "Oil and Gas · Petrochemical · Power",
  },
  {
    name: "Slip-On Flanges",
    Icon: SlipOnIcon,
    desc: "Slides over the pipe and is welded inside and outside. Easy alignment makes it popular for low-pressure piping.",
    sizeRange: '1/2" to 48"',
    pressureClass: "150# to 1500#",
    standard: "ASME B16.5",
    tag: "Easy Install",
    tagColor: "bg-green-100 text-green-700",
    uses: "Water Treatment · HVAC · Chemical",
  },
  {
    name: "Blind Flanges",
    Icon: BlindIcon,
    desc: "Used to blank off the ends of piping systems and pressure vessel openings. Excellent structural strength.",
    sizeRange: '1/2" to 60"',
    pressureClass: "150# to 2500#",
    standard: "ASME B16.5, B16.47",
    tag: "Line Termination",
    tagColor: "bg-purple-100 text-purple-700",
    uses: "Pipeline Isolation · Pressure Testing",
  },
  {
    name: "Socket Weld Flanges",
    Icon: SocketWeldIcon,
    desc: "Pipe is inserted into the socket bore, then fillet welded. Designed for small-bore, high-pressure piping.",
    sizeRange: '1/2" to 3"',
    pressureClass: "150# to 2500#",
    standard: "ASME B16.5",
    tag: "Small Bore",
    tagColor: "bg-orange-100 text-orange-700",
    uses: "Hydraulic · High Pressure · Small Bore",
  },
  {
    name: "Lap Joint Flanges",
    Icon: LapJointIcon,
    desc: "Used with a stub end fitting, allowing free rotation for bolt-hole alignment. Ideal for frequent dismantling.",
    sizeRange: '1/2" to 24"',
    pressureClass: "150# to 1500#",
    standard: "ASME B16.5",
    tag: "Dismantling Friendly",
    tagColor: "bg-teal-100 text-teal-700",
    uses: "Inspection Lines · Budget-Friendly Alloy",
  },
  {
    name: "Threaded Flanges",
    Icon: ThreadedIcon,
    desc: "Screwed onto the pipe without welding. Preferred in environments where welding is restricted or hazardous.",
    sizeRange: '1/2" to 4"',
    pressureClass: "150# to 2500#",
    standard: "ASME B16.5",
    tag: "No Welding",
    tagColor: "bg-red-100 text-red-700",
    uses: "Flammable Areas · Air and Water Lines",
  },
];

export default function ProductOverview() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
          }
        });
      },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" ref={ref} className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-14 reveal">
          <div className="inline-block bg-blue-50 text-[#1565C0] text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Product Range
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0D2353] mb-4">
            Stainless Steel Flange Types
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
            We supply all standard flange types in grades 304, 316, and 316L. All products comply with ASME, ASTM, and ISO standards with complete traceability documentation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {flangeTypes.map((item, i) => (
            <article
              key={item.name}
              className={`reveal reveal-delay-${(i % 3) + 1} bg-white rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col`}
            >
              {/* Card header with icon */}
              <div className="px-6 pt-8 pb-5 flex flex-col items-center text-center border-b border-gray-100">
                <div className="w-20 h-20 mb-4 opacity-90 group-hover:opacity-100 transition-opacity">
                  <item.Icon />
                </div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${item.tagColor}`}>
                  {item.tag}
                </span>
                <h3 className="font-bold text-[#0D2353] text-base group-hover:text-[#1565C0] transition-colors">
                  {item.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mt-2">{item.desc}</p>
              </div>

              {/* Card body with specs */}
              <div className="px-6 py-5 flex-1 flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs text-gray-400 font-medium mb-0.5">Size Range</div>
                    <div className="text-sm font-semibold text-[#0D2353]">{item.sizeRange}</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs text-gray-400 font-medium mb-0.5">Pressure Class</div>
                    <div className="text-sm font-semibold text-[#0D2353]">{item.pressureClass}</div>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-3">
                  <div className="text-xs text-gray-400 font-medium mb-0.5">Standard</div>
                  <div className="text-sm font-semibold text-[#1565C0]">{item.standard}</div>
                </div>
                <div className="mt-auto pt-1">
                  <div className="text-xs text-gray-400 font-medium mb-1">Common Applications</div>
                  <div className="text-xs text-gray-600">{item.uses}</div>
                </div>
              </div>

              {/* Card footer CTA */}
              <div className="px-6 pb-6">
                <a
                  href="#enquiry"
                  className="block text-center text-[#1565C0] border border-[#1565C0] hover:bg-[#1565C0] hover:text-white text-sm font-semibold py-2.5 rounded-lg transition-colors"
                >
                  Request Quote
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center reveal">
          <a
            href="#enquiry"
            className="inline-flex items-center gap-2 bg-[#1565C0] text-white px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-[#0D47A1] transition-colors shadow-lg shadow-blue-200"
          >
            Request Catalogue and Price List
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
