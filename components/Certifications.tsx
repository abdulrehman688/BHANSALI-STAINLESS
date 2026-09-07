"use client";
import { useEffect, useRef } from "react";

const CertIcon = ({ type }: { type: string }) => {
  const icons: Record<string, React.ReactNode> = {
    astm: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" aria-hidden="true">
        <rect x="3" y="6" width="26" height="20" rx="3" stroke="#1565C0" strokeWidth="2"/>
        <path d="M8 12 L24 12 M8 16 L20 16 M8 20 L16 20" stroke="#1565C0" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    iso: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" aria-hidden="true">
        <circle cx="16" cy="16" r="12" stroke="#1565C0" strokeWidth="2"/>
        <path d="M10 16 L14 20 L22 12" stroke="#1565C0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    asme: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" aria-hidden="true">
        <circle cx="16" cy="16" r="12" stroke="#1565C0" strokeWidth="2"/>
        <circle cx="16" cy="16" r="6" stroke="#1565C0" strokeWidth="1.5"/>
        <circle cx="16" cy="16" r="2" fill="#1565C0"/>
        <circle cx="8" cy="16" r="1.5" fill="#1565C0"/>
        <circle cx="24" cy="16" r="1.5" fill="#1565C0"/>
        <circle cx="16" cy="8" r="1.5" fill="#1565C0"/>
        <circle cx="16" cy="24" r="1.5" fill="#1565C0"/>
      </svg>
    ),
    asme47: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" aria-hidden="true">
        <circle cx="16" cy="16" r="12" stroke="#1565C0" strokeWidth="2"/>
        <circle cx="16" cy="16" r="7" stroke="#1565C0" strokeWidth="1.5"/>
        <circle cx="16" cy="16" r="2.5" fill="#1565C0"/>
        <circle cx="7" cy="16" r="1.5" fill="#1565C0"/>
        <circle cx="25" cy="16" r="1.5" fill="#1565C0"/>
      </svg>
    ),
    ped: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" aria-hidden="true">
        <path d="M16 4 L28 10 L28 18 C28 23 22 28 16 30 C10 28 4 23 4 18 L4 10 Z" stroke="#1565C0" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M11 16 L14.5 19.5 L21 13" stroke="#1565C0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    sgs: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" aria-hidden="true">
        <circle cx="16" cy="14" r="8" stroke="#1565C0" strokeWidth="2"/>
        <path d="M10 22 L6 28 M22 22 L26 28" stroke="#1565C0" strokeWidth="2" strokeLinecap="round"/>
        <path d="M11 14 L14.5 17.5 L21 11" stroke="#1565C0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  };
  return <>{icons[type] ?? icons.iso}</>;
};

const certs = [
  {
    name: "ASTM A182",
    body: "ASTM International",
    desc: "Standard specification for forged or rolled alloy and stainless steel flanges, fittings, valves and parts.",
    iconType: "astm",
  },
  {
    name: "ISO 9001:2015",
    body: "Bureau Veritas",
    desc: "Quality management system certification covering design, manufacturing, inspection, and export processes.",
    iconType: "iso",
  },
  {
    name: "ASME B16.5",
    body: "ASME",
    desc: "Pipe flanges and flanged fittings from NPS 1/2 through NPS 24 for pressure classes 150 through 2500.",
    iconType: "asme",
  },
  {
    name: "ASME B16.47",
    body: "ASME",
    desc: "Large diameter steel flanges NPS 26 through NPS 60 metric/inch standard for large-bore applications.",
    iconType: "asme47",
  },
  {
    name: "PED 2014/68/EU",
    body: "TUV",
    desc: "European Pressure Equipment Directive, required for export to EU member states and compliance markets.",
    iconType: "ped",
  },
  {
    name: "SGS Inspected",
    body: "SGS Group",
    desc: "Third-party pre-shipment inspection available on request. SGS/Bureau Veritas inspection certificates provided.",
    iconType: "sgs",
  },
];

const docItems = [
  "Mill Test Certificate (MTC/MTR)",
  "Certificate of Origin (COO)",
  "Manufacturer's Test Report",
  "Third-Party Inspection Report",
  "Chemical Composition Report",
  "Mechanical Properties Certificate",
  "Packing List & Commercial Invoice",
  "Bill of Lading (BL)",
];

export default function Certifications() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="certifications" ref={ref} className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-10 reveal">
          <div className="inline-block bg-blue-50 text-[#1565C0] text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            Compliance & Quality
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0D2353] mb-3">
            Certifications & Standards
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            All our products comply with international standards. Full documentation and traceability available for every order.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {certs.map((cert, i) => (
            <div
              key={cert.name}
              className={`reveal reveal-delay-${(i % 3) + 1} border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition-all duration-300`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CertIcon type={cert.iconType} />
                </div>
                <div>
                  <div className="font-bold text-[#0D2353] text-base">{cert.name}</div>
                  <div className="text-xs text-[#1565C0] font-semibold mb-2">{cert.body}</div>
                  <p className="text-gray-500 text-sm leading-relaxed">{cert.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Documentation */}
        <div className="reveal bg-[#0D2353] rounded-2xl p-8 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">Full Documentation with Every Order</h3>
              <p className="text-blue-200 text-sm leading-relaxed mb-6">
                We provide complete export documentation for smooth customs clearance in Saudi Arabia, UAE, Qatar, Kuwait, Oman, and all GCC countries.
              </p>
              <a
                href="#enquiry"
                className="inline-flex items-center gap-2 bg-yellow-400 text-[#0D2353] font-bold px-6 py-3 rounded text-sm hover:bg-yellow-300 transition-colors"
              >
                Request Sample Documentation
              </a>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {docItems.map((doc) => (
                <div key={doc} className="flex items-center gap-2 text-sm text-blue-100">
                  <svg className="w-4 h-4 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {doc}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
