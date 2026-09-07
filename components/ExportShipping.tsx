"use client";
import { useEffect, useRef } from "react";

const countries = [
  "Saudi Arabia", "UAE", "Qatar", "Kuwait", "Oman", "Bahrain",
  "Iraq", "Jordan", "Egypt", "Turkey", "South Africa", "USA",
];

const ShipIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);
const ClockIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const PayIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>
);
const DocIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const shippingInfo = [
  {
    title: "Shipping Terms",
    items: ["FOB Mumbai (Nhava Sheva)", "CIF Jebel Ali, Dammam, Shuwaikh", "Ex-Works (EXW)", "DAP / DDP on request"],
    Icon: ShipIcon,
  },
  {
    title: "Lead Times",
    items: ["Stock items: 5-7 working days", "Standard orders: 7-14 working days", "Special/custom orders: 14-21 days", "Emergency orders: discuss with sales"],
    Icon: ClockIcon,
  },
  {
    title: "Payment Terms",
    items: ["30% advance + 70% before shipment", "Letter of Credit (LC at sight)", "TT (Wire transfer / SWIFT)", "Usance LC: 30-90 days (project orders)"],
    Icon: PayIcon,
  },
  {
    title: "Documentation",
    items: ["Commercial Invoice and Packing List", "Certificate of Origin (COO)", "Mill Test Certificate (MTC)", "Bill of Lading / AWB"],
    Icon: DocIcon,
  },
];

export default function ExportShipping() {
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
    <section id="export" ref={ref} className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-10 reveal">
          <div className="inline-block bg-blue-50 text-[#1565C0] text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            Export & Shipping
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0D2353] mb-3">
            Global Export: Middle East Focus
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            We specialize in exporting stainless steel flanges to GCC and Middle East markets with competitive pricing and full documentation support.
          </p>
        </div>

        {/* Countries */}
        <div className="reveal mb-10">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider text-center mb-4">
            Countries We Export To
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {countries.map((c) => (
              <span
                key={c}
                className="flex items-center gap-1.5 bg-white border border-gray-200 text-gray-700 text-sm px-3 py-1.5 rounded-full"
              >
                <svg className="w-3.5 h-3.5 text-[#1565C0]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Shipping details grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {shippingInfo.map((info, i) => (
            <div
              key={info.title}
              className={`reveal reveal-delay-${(i % 2) + 1} bg-white rounded-xl border border-gray-200 overflow-hidden`}
            >
              <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
                <div className="w-5 h-5 text-[#1565C0] flex-shrink-0">
                  <info.Icon />
                </div>
                <h3 className="font-bold text-[#0D2353] text-base">{info.title}</h3>
              </div>
              <ul className="p-5 space-y-2.5">
                {info.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-[#1565C0] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* MOQ note */}
        <div className="reveal mt-8 bg-blue-50 border border-blue-200 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-8 h-8 text-[#1565C0] flex-shrink-0">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <div className="flex-1">
            <div className="font-bold text-[#0D2353] mb-1">Minimum Order Quantity</div>
            <p className="text-gray-600 text-sm">
              MOQ is 25 kg for most standard sizes. No minimum for urgent or sample orders; contact our export desk directly. Large volume orders receive preferential pricing.
            </p>
          </div>
          <a
            href="#enquiry"
            className="flex-shrink-0 bg-[#1565C0] text-white px-5 py-2.5 rounded text-sm font-semibold hover:bg-[#0D47A1] transition-colors whitespace-nowrap"
          >
            Get FOB Price
          </a>
        </div>
      </div>
    </section>
  );
}
