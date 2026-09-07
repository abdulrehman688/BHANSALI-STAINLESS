"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const grades = [
  {
    id: "304",
    label: "SS 304",
    tagline: "General Purpose",
    color: "#1565C0",
    composition: [
      { element: "Chromium (Cr)", value: "18.0 – 20.0%" },
      { element: "Nickel (Ni)", value: "8.0 – 10.5%" },
      { element: "Carbon (C) max", value: "0.08%" },
      { element: "Manganese (Mn) max", value: "2.0%" },
      { element: "Silicon (Si) max", value: "1.0%" },
    ],
    properties: [
      { label: "Tensile Strength", value: "515 MPa min" },
      { label: "Yield Strength", value: "205 MPa min" },
      { label: "Elongation", value: "40% min" },
      { label: "Hardness (Brinell)", value: "≤ 201 HB" },
      { label: "Max Operating Temp", value: "870°C (intermittent)" },
    ],
    applications: ["Food processing equipment", "Kitchen appliances", "Architectural trim", "Chemical containers", "Heat exchangers"],
    standard: "ASTM A182 F304",
    note: "Most cost-effective austenitic grade. Excellent formability and weldability.",
    badge: null,
  },
  {
    id: "316",
    label: "SS 316",
    tagline: "Marine & Chemical Grade",
    color: "#0D47A1",
    composition: [
      { element: "Chromium (Cr)", value: "16.0 – 18.0%" },
      { element: "Nickel (Ni)", value: "10.0 – 14.0%" },
      { element: "Molybdenum (Mo)", value: "2.0 – 3.0%" },
      { element: "Carbon (C) max", value: "0.08%" },
      { element: "Manganese (Mn) max", value: "2.0%" },
    ],
    properties: [
      { label: "Tensile Strength", value: "515 MPa min" },
      { label: "Yield Strength", value: "205 MPa min" },
      { label: "Elongation", value: "40% min" },
      { label: "Hardness (Brinell)", value: "≤ 217 HB" },
      { label: "Max Operating Temp", value: "870°C (intermittent)" },
    ],
    applications: ["Marine environments", "Chemical processing", "Pharmaceutical", "Oil & gas", "Desalination plants"],
    standard: "ASTM A182 F316",
    note: "Molybdenum addition provides superior chloride corrosion resistance, preferred for GCC coastal environments.",
    badge: "Most Popular for GCC",
  },
  {
    id: "316L",
    label: "SS 316L",
    tagline: "Low Carbon, Weld Grade",
    color: "#0D2353",
    composition: [
      { element: "Chromium (Cr)", value: "16.0 – 18.0%" },
      { element: "Nickel (Ni)", value: "10.0 – 14.0%" },
      { element: "Molybdenum (Mo)", value: "2.0 – 3.0%" },
      { element: "Carbon (C) max", value: "0.03% (Low C)" },
      { element: "Manganese (Mn) max", value: "2.0%" },
    ],
    properties: [
      { label: "Tensile Strength", value: "485 MPa min" },
      { label: "Yield Strength", value: "170 MPa min" },
      { label: "Elongation", value: "40% min" },
      { label: "Hardness (Brinell)", value: "≤ 217 HB" },
      { label: "Weldability", value: "Excellent (no PWHT)" },
    ],
    applications: ["Pharmaceutical systems", "Food & beverage", "Pressure vessels", "Welded structures", "Medical devices"],
    standard: "ASTM A182 F316L",
    note: "Extra low carbon prevents carbide precipitation during welding. No post-weld heat treatment required.",
    badge: "Best for Welded Applications",
  },
];

export default function GradeVariants() {
  const [active, setActive] = useState("316");
  const ref = useRef<HTMLDivElement>(null);

  const current = grades.find((g) => g.id === active)!;

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
    <section id="grades" ref={ref} className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-10 reveal">
          <div className="inline-block bg-blue-50 text-[#1565C0] text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            Material Grades
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0D2353] mb-3">
            Available Grade Variants
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            Select the right stainless steel grade for your application requirements.
          </p>
        </div>

        {/* Grade tabs */}
        <div className="flex justify-center gap-3 mb-8 reveal">
          {grades.map((g) => (
            <button
              key={g.id}
              onClick={() => setActive(g.id)}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold border-2 transition-all duration-200 ${
                active === g.id
                  ? "border-[#1565C0] bg-[#1565C0] text-white shadow-lg shadow-blue-200"
                  : "border-gray-200 text-gray-600 hover:border-blue-300"
              }`}
            >
              {g.label}
              {g.badge && active !== g.id && (
                <span className="ml-2 text-[10px] bg-yellow-100 text-yellow-700 px-1.5 py-0.5 rounded-full">★</span>
              )}
            </button>
          ))}
        </div>

        {/* Grade detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-3 gap-6"
          >
            {/* Info card */}
            <div className="lg:col-span-1 rounded-xl overflow-hidden border border-gray-200">
              <div className="p-5" style={{ background: current.color }}>
                <div className="text-white/70 text-xs font-semibold uppercase tracking-wider mb-1">
                  {current.tagline}
                </div>
                <div className="text-white text-3xl font-bold mb-1">{current.label}</div>
                <div className="text-white/60 text-xs">{current.standard}</div>
                {current.badge && (
                  <div className="mt-3 inline-block bg-yellow-400 text-[#0D2353] text-xs font-bold px-3 py-1 rounded-full">
                    {current.badge}
                  </div>
                )}
              </div>
              <div className="p-5 bg-gray-50">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{current.note}</p>
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Common Applications</div>
                <ul className="space-y-1.5">
                  {current.applications.map((app) => (
                    <li key={app} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-[#1565C0] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Composition */}
            <div className="rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 border-b border-gray-200 px-5 py-3">
                <h3 className="font-semibold text-[#0D2353] text-sm">Chemical Composition</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {current.composition.map((row) => (
                  <div key={row.element} className="flex justify-between items-center px-5 py-3">
                    <span className="text-sm text-gray-600">{row.element}</span>
                    <span className="text-sm font-semibold text-[#1565C0]">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mechanical properties */}
            <div className="rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 border-b border-gray-200 px-5 py-3">
                <h3 className="font-semibold text-[#0D2353] text-sm">Mechanical Properties</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {current.properties.map((row) => (
                  <div key={row.label} className="flex justify-between items-center px-5 py-3">
                    <span className="text-sm text-gray-600">{row.label}</span>
                    <span className="text-sm font-semibold text-[#0D2353]">{row.value}</span>
                  </div>
                ))}
              </div>
              <div className="px-5 py-4 bg-blue-50">
                <a
                  href="#enquiry"
                  className="block text-center bg-[#1565C0] text-white text-sm font-semibold py-2.5 rounded hover:bg-[#0D47A1] transition-colors"
                >
                  Request {current.label} Quote
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
