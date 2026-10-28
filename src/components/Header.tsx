"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle, Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { buildWhatsAppInquiryUrl } from "@/lib/whatsapp";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "الرئيسية", href: "/" },
    { label: "المناسبات", href: "/catalogue" },
    { label: "كتالوج الضيافة", href: "/catalogue#hospitality-items" },
    { label: "التغليف والهدايا", href: "/catalogue/packaging-and-gifting" },
    { label: "اطلب عرض سعر", href: "/quote" },
    { label: "الفروع والموقع", href: "/branches" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-moule-ivory/95 backdrop-blur-md border-b border-moule-beige/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Wordmark */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <span className="text-2xl sm:text-3xl font-serif tracking-widest uppercase font-bold text-moule-espresso group-hover:text-moule-champagne transition-colors">
              MOULE
            </span>
            <span className="text-xl sm:text-2xl font-light text-moule-champagne">|</span>
            <span className="text-xl sm:text-2xl font-semibold text-moule-espresso">موليه</span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative py-1.5 ${
                    isActive
                      ? "text-moule-espresso font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-moule-champagne"
                      : "text-moule-espresso/75 hover:text-moule-espresso hover:after:scale-x-100 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-moule-champagne/60 after:scale-x-0 after:transition-transform"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons (Phone, WhatsApp) */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Direct Phone link */}
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center gap-1.5 text-xs text-moule-espresso/80 hover:text-moule-espresso px-2.5 py-1.5 rounded-full hover:bg-moule-beige/40 transition-colors"
              title="اتصل مباشرة بفريق موليه"
            >
              <Phone className="w-3.5 h-3.5 text-moule-champagne" />
              <span dir="ltr" className="font-sans">{siteConfig.phone}</span>
            </a>

            {/* Primary WhatsApp Action */}
            <a
              href={buildWhatsAppInquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-moule-espresso text-moule-ivory px-4 py-2 rounded-full text-xs font-semibold hover:bg-moule-espresso/90 hover:shadow-md transition-all border border-moule-espresso"
            >
              <MessageCircle className="w-4 h-4 text-moule-champagne" />
              <span>محادثة واتساب</span>
            </a>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex items-center lg:hidden gap-2">
            <a
              href={buildWhatsAppInquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-moule-espresso bg-moule-beige/50 rounded-full"
              aria-label="واتساب سريع"
            >
              <MessageCircle className="w-5 h-5 text-moule-champagne" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-moule-espresso hover:text-moule-champagne rounded-lg focus:outline-none"
              aria-label={mobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة الرئيسية"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-moule-beige bg-moule-ivory/98 px-5 py-6 shadow-xl animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-moule-espresso hover:text-moule-champagne py-1 border-b border-moule-beige/40 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-moule-champagne text-xs">←</span>
              </Link>
            ))}
          </nav>

          <div className="pt-6 mt-4 flex flex-col gap-3">
            <a
              href={buildWhatsAppInquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-moule-espresso text-moule-ivory py-3 rounded-xl text-sm font-semibold shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-moule-champagne" />
              <span>استفسار فوري عبر واتساب</span>
            </a>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center justify-center gap-2 border border-moule-beige bg-white py-2.5 rounded-xl text-xs text-moule-espresso font-medium"
            >
              <Phone className="w-4 h-4 text-moule-champagne" />
              <span dir="ltr">اتصال مباشر: {siteConfig.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

