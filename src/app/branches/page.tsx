import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  ExternalLink, 
  ShieldCheck, 
  Clock, 
  Instagram, 
  Sparkles,
  AlertCircle
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { buildWhatsAppInquiryUrl } from "@/lib/whatsapp";
import { WhatsAppIcon, TikTokIcon } from "@/components/Icons";

export const metadata = {
  title: "الفروع والموقع في جدة | موليه للضيافة الفاخرة",
  description: "تعرفوا على فروع موليه بجدة، زيارة معرضنا بحي الفيصلية، والتواصل مع مستشاري الحفلات والمناسبات.",
};

export default function BranchesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* Title */}
      <div className="text-center max-w-xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-moule-champagne/20 text-moule-espresso text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-moule-champagne" />
          <span>مواقعنا بمدينة جدة</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-moule-espresso">
          فروع موليه وتفاصيل التواصل
        </h1>
        <p className="text-xs sm:text-sm text-moule-espresso/70 leading-relaxed">
          نسعد باستقبالكم في فرعنا المعتمد بحي الفيصلية، أو خدمتكم عبر الهاتف والواتساب لتنسيق وتجهيز كافة المناسبات.
        </p>
      </div>

      {/* Branches Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {siteConfig.branches.map((branch) => (
          <div
            key={branch.id}
            className={`rounded-3xl p-8 border flex flex-col justify-between transition-all ${
              branch.isVerified
                ? "bg-white border-moule-beige shadow-luxury"
                : "bg-moule-sand/40 border-dashed border-moule-beige"
            }`}
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-moule-champagne">
                  {branch.cityAr}
                </span>
                {branch.isVerified ? (
                  <span className="inline-flex items-center gap-1 text-[11px] bg-green-100 text-green-800 font-semibold px-2.5 py-1 rounded-full">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>فرع معتمد ومثبت</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-[11px] bg-amber-100 text-amber-800 font-semibold px-2.5 py-1 rounded-full">
                    <Clock className="w-3.5 h-3.5" />
                    <span>قيد اعتماد العنوان الدقيق</span>
                  </span>
                )}
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-moule-espresso">
                  {branch.nameAr}
                </h2>
                <p className="text-xs text-moule-champagne font-sans mt-0.5">
                  {branch.nameEn}
                </p>
              </div>

              <div className="space-y-2 text-xs text-moule-espresso/80">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-moule-champagne shrink-0 mt-0.5" />
                  <p className="leading-relaxed">{branch.addressAr}</p>
                </div>
                {branch.workingHoursAr && (
                  <div className="flex items-start gap-2 text-moule-espresso/70 pt-1">
                    <Clock className="w-4 h-4 text-moule-champagne shrink-0 mt-0.5" />
                    <p className="leading-relaxed">{branch.workingHoursAr}</p>
                  </div>
                )}
              </div>

              {/* Google Maps Link (only for verified branch) */}
              {branch.isVerified && branch.googleMapsUrl && (
                <div className="pt-2">
                  <a
                    href={branch.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-moule-espresso hover:text-moule-champagne underline"
                  >
                    <MapPin className="w-4 h-4 text-moule-champagne" />
                    <span>فتح موقع الفرع على خرائط Google (Directions)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}

              {/* Note for unverified branch */}
              {!branch.isVerified && (
                <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200 text-[11px] text-amber-900 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-600" />
                  <p>
                    العنوان الدقيق وموقع الخريطة لفرع حي الريان قيد المراجعة والاعتماد مع إدارة موليه قبل النشر النهائي للعامة.
                  </p>
                </div>
              )}
            </div>

            {/* Branch Contact Buttons */}
            <div className="pt-8 border-t border-moule-beige/60 flex flex-col sm:flex-row gap-3 mt-6">
              <a
                href={buildWhatsAppInquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-moule-espresso text-moule-ivory text-xs font-semibold flex items-center justify-center gap-2 hover:bg-moule-espresso/90 shadow-sm"
              >
                <WhatsAppIcon className="w-4 h-4 text-moule-champagne" />
                <span>واتساب الفرع</span>
              </a>
              <a
                href={`tel:${branch.phone.replace(/\s+/g, "")}`}
                className="py-3 px-5 rounded-xl border border-moule-beige bg-white text-xs font-semibold text-moule-espresso flex items-center justify-center gap-2 hover:bg-moule-sand"
              >
                <Phone className="w-3.5 h-3.5 text-moule-champagne" />
                <span dir="ltr">{branch.phone}</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Social Media & Official Direct Channels */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-moule-beige shadow-sm space-y-6">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-moule-espresso text-center">
          القنوات الرسمية المعتمدة لعلامة موليه
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="p-6 rounded-2xl bg-moule-sand/40 border border-moule-beige space-y-2">
            <span className="text-xs font-bold text-moule-champagne">الهاتف الموحد</span>
            <p className="text-base font-bold text-moule-espresso" dir="ltr">
              {siteConfig.phone}
            </p>
            <p className="text-[11px] text-moule-espresso/60">مكالمات مباشرة واستفسارات المناسبات</p>
          </div>

          <div className="p-6 rounded-2xl bg-moule-sand/40 border border-moule-beige space-y-2">
            <span className="text-xs font-bold text-moule-champagne">إنستغرام</span>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-bold text-moule-espresso hover:text-moule-champagne block"
            >
              @moule.official
            </a>
            <p className="text-[11px] text-moule-espresso/60">يوميات الأعمال وصواني الأفراح</p>
          </div>

          <div className="p-6 rounded-2xl bg-moule-sand/40 border border-moule-beige space-y-2">
            <span className="text-xs font-bold text-moule-champagne flex items-center justify-center gap-1.5">
              <TikTokIcon className="w-3.5 h-3.5" />
              <span>تيك توك</span>
            </span>
            <a
              href={siteConfig.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-bold text-moule-espresso hover:text-moule-champagne block"
            >
              @moule.official
            </a>
            <p className="text-[11px] text-moule-espresso/60">كواليس التجهيز والتغليف</p>
          </div>
        </div>
      </div>

    </div>
  );
}

