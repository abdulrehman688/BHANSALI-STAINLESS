"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email address"),
  phone: z
    .string()
    .min(7, "Enter a valid phone number")
    .regex(/^[+\d\s\-()]+$/, "Phone number contains invalid characters"),
  country: z.string().min(1, "Please select your country"),
  productInterest: z.string().min(10, "Please describe the product, grade, size, and quantity you need"),
});

type FormData = z.infer<typeof schema>;

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

const countries = [
  "Saudi Arabia", "UAE", "Qatar", "Kuwait", "Oman", "Bahrain",
  "Iraq", "Jordan", "Egypt", "Turkey", "Other",
];

const productOptions = [
  "SS 304 Flanges",
  "SS 316 Flanges",
  "SS 316L Flanges",
  "Mixed Grade (304 + 316)",
  "Custom Grade / Specification",
];

export default function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    setServerError("");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Server error");

      // Fire GA4 event via GTM dataLayer
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "form_submission",
        event_category: "enquiry",
        event_label: data.productInterest.slice(0, 50),
        user_country: data.country,
      });

      setSubmitted(true);
      reset();
    } catch {
      setServerError("Something went wrong. Please call or WhatsApp us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="enquiry" className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left info */}
          <div className="lg:col-span-2">
            <div className="inline-block bg-blue-50 text-[#1565C0] text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
              Contact Sales
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0D2353] mb-4">
              Send an Enquiry
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Our export team responds within 4 business hours with pricing, availability, and technical details.
            </p>

            {/* Direct contact options */}
            <div className="space-y-4">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-sm transition-all group"
              >
                <div className="w-11 h-11 bg-[#1565C0] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-semibold">Call Direct</div>
                  <div className="font-semibold text-[#0D2353] group-hover:text-[#1565C0] transition-colors">+91 98765 43210</div>
                </div>
              </a>

              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%20need%20a%20quote%20for%20stainless%20steel%20flanges"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-green-300 hover:shadow-sm transition-all group"
              >
                <div className="w-11 h-11 bg-[#25D366] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-semibold">WhatsApp (fastest)</div>
                  <div className="font-semibold text-[#0D2353] group-hover:text-green-600 transition-colors">+91 98765 43210</div>
                </div>
              </a>

              <a
                href="mailto:export@bhansali-stainless.com"
                className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-sm transition-all group"
              >
                <div className="w-11 h-11 bg-red-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-semibold">Email</div>
                  <div className="font-semibold text-[#0D2353] group-hover:text-[#1565C0] transition-colors text-sm">
                    export@bhansali-stainless.com
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                <div className="flex justify-center mb-4">
                  <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 13l3 3 7-7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Enquiry Received!</h3>
                <p className="text-green-700 text-sm">
                  Thank you. Our export team will respond within 4 business hours with pricing and availability.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-[#1565C0] text-sm font-semibold underline"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="bg-gray-50 rounded-2xl border border-gray-200 p-6 sm:p-8"
                aria-label="Product enquiry form"
              >
                <h3 className="text-lg font-bold text-[#0D2353] mb-6">Enquiry / Lead Capture Form</h3>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Ahmed Al-Rashid"
                      autoComplete="name"
                      {...register("name")}
                      className={`w-full border rounded-lg px-3 py-2.5 text-sm bg-white transition-colors ${
                        errors.name ? "border-red-400" : "border-gray-300"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1" role="alert">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="ahmed@company.com"
                      autoComplete="email"
                      {...register("email")}
                      className={`w-full border rounded-lg px-3 py-2.5 text-sm bg-white transition-colors ${
                        errors.email ? "border-red-400" : "border-gray-300"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1" role="alert">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Phone / WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+966 50 123 4567"
                      autoComplete="tel"
                      {...register("phone")}
                      className={`w-full border rounded-lg px-3 py-2.5 text-sm bg-white transition-colors ${
                        errors.phone ? "border-red-400" : "border-gray-300"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1" role="alert">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Country */}
                  <div>
                    <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="country"
                      {...register("country")}
                      className={`w-full border rounded-lg px-3 py-2.5 text-sm bg-white transition-colors ${
                        errors.country ? "border-red-400" : "border-gray-300"
                      }`}
                    >
                      <option value="">Select country</option>
                      {countries.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                    {errors.country && (
                      <p className="text-red-500 text-xs mt-1" role="alert">{errors.country.message}</p>
                    )}
                  </div>
                </div>

                {/* Product interest */}
                <div className="mb-6">
                  <label htmlFor="productInterest" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Product Interest: Grade, Size, Quantity <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="productInterest"
                    rows={4}
                    placeholder="e.g. SS 316 Weld Neck Flanges, 6 inch, 150#, 500 pieces. Delivery to Jebel Ali, UAE."
                    {...register("productInterest")}
                    className={`w-full border rounded-lg px-3 py-2.5 text-sm bg-white transition-colors resize-none ${
                      errors.productInterest ? "border-red-400" : "border-gray-300"
                    }`}
                  />
                  {errors.productInterest && (
                    <p className="text-red-500 text-xs mt-1" role="alert">{errors.productInterest.message}</p>
                  )}
                </div>

                {serverError && (
                  <p className="text-red-500 text-sm mb-4 p-3 bg-red-50 rounded-lg border border-red-200" role="alert">
                    {serverError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#1565C0] hover:bg-[#0D47A1] disabled:opacity-60 text-white font-bold py-3.5 rounded-lg text-sm transition-colors flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Enquiry
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-400 text-center mt-3">
                  By submitting you agree we may contact you about your enquiry. We respect your privacy.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
