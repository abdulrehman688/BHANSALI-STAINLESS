"use client";
import { motion } from "framer-motion";

const FlangeIcons: Record<string, React.ReactNode> = {
  "Weld Neck": (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
      <circle cx="24" cy="30" r="12" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="24" cy="30" r="5" stroke="currentColor" strokeWidth="2" />
      <rect x="14" y="8" width="20" height="4" rx="1" stroke="currentColor" strokeWidth="2" />
      <path d="M19 12 L17 18 M29 12 L31 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="30" r="1.5" fill="currentColor" />
      <circle cx="36" cy="30" r="1.5" fill="currentColor" />
      <circle cx="24" cy="42" r="1.5" fill="currentColor" />
    </svg>
  ),
  "Slip-On": (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2" />
      <rect x="8" y="21" width="32" height="6" rx="1" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="24" r="1.5" fill="currentColor" />
      <circle cx="36" cy="24" r="1.5" fill="currentColor" />
    </svg>
  ),
  "Blind": (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="24" cy="24" r="16" fill="currentColor" fillOpacity="0.1" />
      <rect x="8" y="21" width="32" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="24" r="1.5" fill="currentColor" />
      <circle cx="36" cy="24" r="1.5" fill="currentColor" />
      <circle cx="24" cy="12" r="1.5" fill="currentColor" />
      <circle cx="24" cy="36" r="1.5" fill="currentColor" />
    </svg>
  ),
  "Socket Weld": (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
      <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2.5" />
      <path d="M24 10 L24 38" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M18 10 L30 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="12" cy="24" r="1.5" fill="currentColor" />
      <circle cx="36" cy="24" r="1.5" fill="currentColor" />
    </svg>
  ),
  "Lap Joint": (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
      <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="24" cy="24" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="M10 24 L38 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M8 20 L8 28 M40 20 L40 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  "Threaded": (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
      <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2.5" />
      <path d="M14 20 Q18 22 22 20 Q26 18 30 20 Q34 22 36 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M14 24 Q18 26 22 24 Q26 22 30 24 Q34 26 36 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M14 28 Q18 30 22 28 Q26 26 30 28 Q34 30 36 28" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="24" r="1.5" fill="currentColor" />
      <circle cx="36" cy="24" r="1.5" fill="currentColor" />
    </svg>
  ),
};

const flangeTypes = [
  { name: "Weld Neck", desc: "High pressure" },
  { name: "Slip-On", desc: "Easy fit" },
  { name: "Blind", desc: "Line closure" },
  { name: "Socket Weld", desc: "Small bore" },
  { name: "Lap Joint", desc: "Dismantling" },
  { name: "Threaded", desc: "No welding" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-12 lg:pt-16 pb-4"
      style={{ background: "linear-gradient(135deg, #0D2353 0%, #1565C0 60%, #1976D2 100%)" }}
      aria-label="Stainless Steel Flanges hero"
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-yellow-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              ISO 9001:2015 Certified Exporter
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              Stainless Steel
              <br />
              <span className="text-yellow-300">Flanges</span> for B2B Export
            </h1>

            <p className="text-blue-100 text-base lg:text-lg mb-3 leading-relaxed max-w-lg font-medium">
              Grade 304 · 316 · 316L · ASTM A182 · ASME B16.5
            </p>
            <p className="text-blue-200 text-sm mb-10 max-w-md leading-relaxed">
              Trusted supplier for Saudi Arabia, UAE, Qatar, Kuwait and the wider GCC. Competitive FOB pricing, full MTR documentation, and 7-21 day delivery.
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              <a
                href="#enquiry"
                className="bg-yellow-400 hover:bg-yellow-300 text-[#0D2353] font-bold px-7 py-3.5 rounded-lg text-sm transition-colors flex items-center gap-2 shadow-lg shadow-yellow-400/20"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Request a Quote
              </a>
              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%20need%20a%20quote%20for%20stainless%20steel%20flanges"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20b959] text-white font-semibold px-7 py-3.5 rounded-lg text-sm transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
              <a
                href="tel:+919876543210"
                className="border border-white/30 hover:border-white/60 text-white font-semibold px-7 py-3.5 rounded-lg text-sm transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap gap-8 border-t border-white/15 pt-8"
            >
              {[
                { num: "20+", label: "Years Export" },
                { num: "30+", label: "Countries" },
                { num: "500+", label: "Flange Types" },
                { num: "24h", label: "Quote Time" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-yellow-300">{stat.num}</div>
                  <div className="text-xs text-blue-200 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right product grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:grid grid-cols-3 gap-3"
            aria-label="Flange product types"
          >
            {flangeTypes.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                className="bg-white/10 border border-white/20 rounded-xl p-5 text-center hover:bg-white/18 transition-colors cursor-default group"
              >
                <div className="flex justify-center mb-3 text-blue-200 group-hover:text-white transition-colors">
                  {FlangeIcons[item.name]}
                </div>
                <div className="text-white font-semibold text-sm">{item.name}</div>
                <div className="text-blue-300 text-xs mt-1">{item.desc}</div>
              </motion.div>
            ))}

            <motion.a
              href="#products"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.82, duration: 0.4 }}
              className="col-span-3 bg-yellow-400 hover:bg-yellow-300 text-[#0D2353] rounded-xl p-4 text-center font-bold text-sm transition-colors flex items-center justify-center gap-2"
            >
              View All Products
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>

      <div className="bg-[#0D2353]/60 border-t border-white/10 py-4">
        <div className="container-custom flex flex-wrap items-center justify-center gap-6 text-xs text-blue-200">
          {["ASTM A182", "ISO 9001:2015", "ASME B16.5", "SGS Inspected", "PED 2014/68/EU"].map((cert) => (
            <div key={cert} className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {cert}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
