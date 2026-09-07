import { NextRequest, NextResponse } from "next/server";

// Google Apps Script Web App URL — replace with real one after setup
const GOOGLE_SHEET_URL = process.env.GOOGLE_SHEET_WEBHOOK_URL || "";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, country, productInterest } = body;

    // Basic server-side validation
    if (!name || !email || !phone || !country || !productInterest) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const payload = {
      timestamp: new Date().toISOString(),
      name,
      email,
      phone,
      country,
      productInterest,
      source: "website-enquiry-form",
    };

    // Log locally (always)
    console.log("[ENQUIRY]", JSON.stringify(payload, null, 2));

    // Forward to Google Sheet (if configured)
    if (GOOGLE_SHEET_URL) {
      const sheetRes = await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!sheetRes.ok) {
        console.error("[ENQUIRY] Google Sheet webhook failed:", sheetRes.status);
      }
    }

    return NextResponse.json({ success: true, message: "Enquiry received" });
  } catch (err) {
    console.error("[ENQUIRY] Error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
