"use client";

import * as fbq from "@/lib/metaPixel";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918851253661"
      onClick={() =>
        fbq.event("Contact", {
          content_name: "WhatsApp Click",
        })
      }
    >
      Chat on WhatsApp
    </a>
    
  );
}
