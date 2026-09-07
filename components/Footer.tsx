export default function Footer() {
  return (
    <footer className="bg-[#0D2353] text-white pt-20 pb-4">
      <div className="container-custom">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 bg-[#1565C0] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7" aria-hidden="true">
                  <circle cx="20" cy="20" r="14" stroke="white" strokeWidth="2.5"/>
                  <circle cx="20" cy="20" r="7" stroke="white" strokeWidth="2"/>
                  <circle cx="20" cy="6.5" r="2" fill="white"/>
                  <circle cx="33.5" cy="20" r="2" fill="white"/>
                  <circle cx="20" cy="33.5" r="2" fill="white"/>
                  <circle cx="6.5" cy="20" r="2" fill="white"/>
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-base leading-tight">BHANSALI</div>
                <div className="text-blue-300 text-xs font-semibold tracking-widest">STAINLESS</div>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-5">
              B2B stainless steel flange exporter with 20+ years of experience serving the GCC and Middle East markets.
            </p>
            <div className="flex items-center gap-2 text-xs text-blue-300">
              <svg className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              ISO 9001:2015 Certified
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-bold text-white mb-5 uppercase tracking-wider">Products</h3>
            <ul className="space-y-2.5 text-sm text-blue-200">
              {["Weld Neck Flanges", "Slip-On Flanges", "Blind Flanges", "Socket Weld Flanges", "Lap Joint Flanges", "Threaded Flanges"].map((p) => (
                <li key={p}>
                  <a href="#products" className="hover:text-white transition-colors">{p}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Grades */}
          <div>
            <h3 className="text-sm font-bold text-white mb-5 uppercase tracking-wider">Grades and Standards</h3>
            <ul className="space-y-2.5 text-sm text-blue-200">
              {["SS 304 / ASTM A182 F304", "SS 316 / ASTM A182 F316", "SS 316L / ASTM A182 F316L", "ASME B16.5", "ASME B16.47", "ISO 9001:2015"].map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-white mb-5 uppercase tracking-wider">Contact</h3>
            <div className="space-y-4 text-sm text-blue-200">
              <div>
                <div className="text-white font-semibold mb-0.5">Export Office</div>
                <div>Mumbai, Maharashtra, India</div>
              </div>
              <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-white transition-colors">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 98765 43210
              </a>
              <a href="mailto:export@bhansali-stainless.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                export@bhansali-stainless.com
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white text-xs font-semibold px-4 py-2.5 rounded-lg hover:bg-[#20b959] transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-blue-300">
          <p>© {new Date().getFullYear()} Bhansali Stainless. All rights reserved.</p>
          <p>Stainless Steel Flange Exporters in Mumbai, India</p>
        </div>
      </div>
    </footer>
  );
}
