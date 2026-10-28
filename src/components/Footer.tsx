import Link from "next/link";
import { Instagram, MapPin, Phone, MessageCircle, ArrowUpRight, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { buildWhatsAppInquiryUrl } from "@/lib/whatsapp";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const verifiedBranch = siteConfig.branches.find((b) => b.isVerified);

  return (
    <footer className="bg-moule-espresso text-moule-ivory border-t border-moule-champagne/20">
      {/* Upper Footer: Newsletter / Quote banner */}
      <div className="border-b border-moule-ivory/10 py-12 px-4 sm:px-6 lg:px-8 bg-black/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-right space-y-1">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-moule-ivory">
              هل لديكم مناسبة قادمة في جدة؟
            </h3>
            <p className="text-xs sm:text-sm text-moule-ivory/70">
              يسعد فريق موليه بتنسيق كافة تفاصيل الضيافة والتغليف لتليق بضيوفكم ومقام مناسبتكم.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <Link
              href="/quote"
              className="px-6 py-2.5 rounded-full bg-moule-champagne text-moule-espresso font-semibold text-xs hover:bg-moule-champagne/90 transition-colors shadow-sm"
            >
              اطلبوا عرض سعر مفصل
            </Link>
            <a
              href={buildWhatsAppInquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full border border-moule-champagne/50 text-moule-ivory text-xs font-medium hover:bg-white/10 transition-colors inline-flex items-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5 text-moule-champagne" />
              <span>محادثة واتساب سريعة</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Column (2 cols wide on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-serif tracking-widest font-bold text-moule-ivory">
                MOULE
              </span>
              <span className="text-xl text-moule-champagne">|</span>
              <span className="text-2xl font-semibold text-moule-ivory">موليه</span>
            </div>
            <p className="text-xs sm:text-sm text-moule-ivory/75 leading-relaxed max-w-md">
              {siteConfig.descriptionAr}
            </p>

            {/* Social channels */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-moule-ivory/10 flex items-center justify-center text-moule-champagne hover:bg-moule-champagne hover:text-moule-espresso transition-all"
                aria-label="Instagram @moule.official"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-moule-ivory/10 flex items-center justify-center text-moule-champagne hover:bg-moule-champagne hover:text-moule-espresso transition-all font-bold text-xs"
                aria-label="TikTok @moule.official"
              >
                <span>TT</span>
              </a>
              <a
                href={buildWhatsAppInquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-moule-ivory/10 flex items-center justify-center text-moule-champagne hover:bg-moule-champagne hover:text-moule-espresso transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-moule-champagne">
              تصفح الموقع
            </h4>
            <ul className="space-y-2 text-xs text-moule-ivory/80">
              <li>
                <Link href="/" className="hover:text-moule-champagne transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/catalogue" className="hover:text-moule-champagne transition-colors">
                  كتالوج المناسبات
                </Link>
              </li>
              <li>
                <Link href="/catalogue#hospitality-items" className="hover:text-moule-champagne transition-colors">
                  أصناف الضيافة
                </Link>
              </li>
              <li>
                <Link href="/catalogue/packaging-and-gifting" className="hover:text-moule-champagne transition-colors">
                  الهدايا والتغليف
                </Link>
              </li>
              <li>
                <Link href="/quote" className="hover:text-moule-champagne transition-colors">
                  اطلب عرض سعر
                </Link>
              </li>
              <li>
                <Link href="/branches" className="hover:text-moule-champagne transition-colors">
                  الفروع والموقع
                </Link>
              </li>
            </ul>
          </div>

          {/* Occasion Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-moule-champagne">
              مجموعات الضيافة
            </h4>
            <ul className="space-y-2 text-xs text-moule-ivory/80">
              <li>
                <Link href="/catalogue/wedding-hospitality" className="hover:text-moule-champagne transition-colors">
                  ضيافات الأفراح الكبرى
                </Link>
              </li>
              <li>
                <Link href="/catalogue/engagement-melka" className="hover:text-moule-champagne transition-colors">
                  حفلات الملكة والخطوبة
                </Link>
              </li>
              <li>
                <Link href="/catalogue/newborn-receptions" className="hover:text-moule-champagne transition-colors">
                  استقبال المواليد
                </Link>
              </li>
              <li>
                <Link href="/catalogue/corporate-and-private-events" className="hover:text-moule-champagne transition-colors">
                  مناسبات الشركات
                </Link>
              </li>
              <li>
                <Link href="/catalogue/seasonal-occasions" className="hover:text-moule-champagne transition-colors">
                  المناسبات الموسمية
                </Link>
              </li>
            </ul>
          </div>

          {/* Official Contact & Branches */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-moule-champagne">
              التواصل والمواقع
            </h4>
            <div className="space-y-2.5 text-xs text-moule-ivory/80">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-moule-champagne shrink-0" />
                <a href={`tel:${siteConfig.phoneRaw}`} dir="ltr" className="hover:text-moule-champagne">
                  {siteConfig.phone}
                </a>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-moule-champagne shrink-0 mt-0.5" />
                <span>
                  {verifiedBranch ? verifiedBranch.addressAr : "حي الفيصلية، جدة"}
                </span>
              </p>
              {siteConfig.social.googleMapsVerified && (
                <div className="pt-1">
                  <a
                    href={siteConfig.social.googleMapsVerified}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-moule-champagne hover:underline"
                  >
                    <span>عرض الموقع على Google Maps</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="mt-16 pt-8 border-t border-moule-ivory/10 flex flex-col sm:flex-row items-center justify-between text-xs text-moule-ivory/60 gap-4">
          <p>© {currentYear} موليه | Moule. جميع الحقوق محفوظة لعلامة موليه للضيافة والمناسبات.</p>
          <div className="flex items-center gap-6 text-[11px]">
            <Link href="/branches" className="hover:text-moule-champagne transition-colors">
              الفروع وساعات العمل
            </Link>
            <span className="text-moule-ivory/30">|</span>
            <span>تصميم مخصص للمناسبات الخاصة</span>
            <span className="text-moule-ivory/30">|</span>
            <span>جدة — المملكة العربية السعودية</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

