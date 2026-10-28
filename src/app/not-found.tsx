import Link from "next/link";
import { ArrowLeft, Home, MessageCircle } from "lucide-react";
import { buildWhatsAppInquiryUrl } from "@/lib/whatsapp";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <span className="text-5xl sm:text-6xl font-serif font-bold text-moule-champagne block">
          404
        </span>
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-moule-espresso">
          الصفحة المطلوبة غير موجودة
        </h1>
        <p className="text-xs sm:text-sm text-moule-espresso/70 leading-relaxed font-light">
          نعتذر، يبدو أن الرابط الذي طلبتموه قد تغير أو تم نقله. يسعدنا اصطحابكم إلى صفحتنا الرئيسية أو تصفح كتالوج المناسبات الفاخرة.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-moule-espresso text-moule-ivory font-semibold text-xs hover:bg-moule-espresso/90 inline-flex items-center justify-center gap-2"
          >
            <Home className="w-3.5 h-3.5 text-moule-champagne" />
            <span>العودة للرئيسية</span>
          </Link>
          <a
            href={buildWhatsAppInquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-full border border-moule-beige bg-white text-moule-espresso font-semibold text-xs hover:bg-moule-sand inline-flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-3.5 h-3.5 text-moule-champagne" />
            <span>مساعدة عبر واتساب</span>
          </a>
        </div>
      </div>
    </div>
  );
}

