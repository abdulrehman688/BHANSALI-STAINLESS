"use client";
import { useEffect, useRef } from "react";

const specs = [
  { param: "Flange Standard", ss304: "ASTM A182 F304", ss316: "ASTM A182 F316", ss316l: "ASTM A182 F316L" },
  { param: "Dimensional Standard", ss304: "ASME B16.5 / B16.47", ss316: "ASME B16.5 / B16.47", ss316l: "ASME B16.5 / B16.47" },
  { param: "Size Range", ss304: '½" – 48"', ss316: '½" – 48"', ss316l: '½" – 48"' },
  { param: "Pressure Class", ss304: "150# – 2500#", ss316: "150# – 2500#", ss316l: "150# – 2500#" },
  { param: "Flange Face Types", ss304: "RF / FF / RTJ", ss316: "RF / FF / RTJ", ss316l: "RF / FF / RTJ" },
  { param: "Tensile Strength", ss304: "515 MPa min", ss316: "515 MPa min", ss316l: "485 MPa min" },
  { param: "Yield Strength", ss304: "205 MPa min", ss316: "205 MPa min", ss316l: "170 MPa min" },
  { param: "Max Temp (cont.)", ss304: "815°C", ss316: "815°C", ss316l: "815°C" },
  { param: "Chloride Resistance", ss304: "Moderate", ss316: "High", ss316l: "High" },
  { param: "Weldability", ss304: "Good", ss316: "Good", ss316l: "Excellent" },
  { param: "Surface Finish", ss304: "2B / BA / No.4 / No.8", ss316: "2B / BA / No.4 / No.8", ss316l: "2B / BA / No.4 / No.8" },
  { param: "Lead Time (stock)", ss304: "7–10 days", ss316: "7–14 days", ss316l: "10–21 days" },
];

export default function SpecsTable() {
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
    <section id="specifications" ref={ref} className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-10 reveal">
          <div className="inline-block bg-blue-50 text-[#1565C0] text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            Technical Data
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0D2353] mb-3">
            Technical Specifications
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            Comparative specification data across all three grades. All values are per ASTM/ASME standards.
          </p>
        </div>

        <div className="reveal overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <table className="specs-table w-full" aria-label="Stainless steel flange technical specifications">
            <thead>
              <tr>
                <th className="min-w-[180px]">Parameter</th>
                <th>SS 304</th>
                <th>
                  SS 316
                  <span className="ml-2 inline-block bg-yellow-400 text-[#0D2353] text-[9px] font-bold px-1.5 py-0.5 rounded-full align-middle">
                    Popular
                  </span>
                </th>
                <th>SS 316L</th>
              </tr>
            </thead>
            <tbody>
              {specs.map((row, i) => (
                <tr key={row.param}>
                  <td className="font-semibold text-[#0D2353]">{row.param}</td>
                  <td>{row.ss304}</td>
                  <td className="font-medium text-[#1565C0]">{row.ss316}</td>
                  <td>{row.ss316l}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-gray-400 mt-4 text-center reveal">
          All specifications are indicative. Exact values depend on heat treatment and specific product dimensions. Request MTC for verified data.
        </p>

        <div className="mt-8 grid sm:grid-cols-3 gap-4 reveal">
          {[
            { label: "Pressure Classes Available", value: "150# to 2500#" },
            { label: "Size Range", value: '½" to 48" NB' },
            { label: "Custom Specs", value: "On request" },
          ].map((item) => (
            <div key={item.label} className="bg-white border border-gray-200 rounded-xl p-5 text-center">
              <div className="text-xl font-bold text-[#1565C0]">{item.value}</div>
              <div className="text-gray-500 text-xs mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
