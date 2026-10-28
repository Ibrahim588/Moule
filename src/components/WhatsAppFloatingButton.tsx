"use client";

import { MessageCircle } from "lucide-react";
import { buildWhatsAppInquiryUrl } from "@/lib/whatsapp";

export default function WhatsAppFloatingButton() {
  return (
    <aside aria-label="محادثة واتساب سريعة">
      <a
        href={buildWhatsAppInquiryUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل مباشر عبر واتساب مع فريق موليه"
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2.5 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 group border-2 border-white/40"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-xs font-bold hidden sm:inline-block">
          استفسار واتساب
        </span>
      </a>
    </aside>
  );
}

