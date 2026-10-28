import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { OccasionCollection } from "@/types";
import { buildWhatsAppInquiryUrl } from "@/lib/whatsapp";

export default function OccasionCard({ collection }: { collection: OccasionCollection }) {
  return (
    <article className="group bg-white rounded-3xl overflow-hidden border border-moule-beige/80 hover:border-moule-champagne/80 hover:shadow-hover transition-all duration-300 flex flex-col h-full">
      {/* Image container */}
      <div className="relative h-72 sm:h-80 overflow-hidden bg-moule-sand">
        <img
          src={collection.coverImage}
          alt={collection.titleAr}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-moule-espresso/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {collection.isPopular && (
          <span className="absolute top-4 right-4 bg-moule-champagne text-moule-espresso font-semibold text-[11px] px-3 py-1 rounded-full shadow-sm">
            الأكثر طلباً
          </span>
        )}

        <div className="absolute bottom-4 right-4 left-4 text-white">
          <span className="text-[11px] tracking-wider uppercase text-moule-champagne font-medium">
            {collection.titleEn}
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-bold drop-shadow-sm">
            {collection.titleAr}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        <p className="text-xs sm:text-sm text-moule-espresso/75 leading-relaxed">
          {collection.shortDescAr}
        </p>

        {/* Feature bullet list */}
        <div className="space-y-1.5 pt-2">
          {collection.featuredItems.slice(0, 2).map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-moule-espresso/70">
              <span className="w-1.5 h-1.5 rounded-full bg-moule-champagne shrink-0" />
              <span className="truncate">{item}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-moule-beige/60 flex items-center justify-between gap-2">
          <Link
            href={`/catalogue/${collection.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-moule-espresso hover:text-moule-champagne transition-colors group/link"
          >
            <span>استكشف المجموعة</span>
            <ArrowLeft className="w-3.5 h-3.5 group-hover/link:-translate-x-1 transition-transform" />
          </Link>

          <a
            href={buildWhatsAppInquiryUrl({ collectionTitle: collection.titleAr })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-moule-sand hover:bg-moule-champagne/20 text-moule-espresso text-xs font-medium transition-colors"
            title={`طلب استفسار واتساب عن ${collection.titleAr}`}
          >
            <MessageCircle className="w-3.5 h-3.5 text-moule-champagne" />
            <span className="text-[11px]">استفسار سريع</span>
          </a>
        </div>
      </div>
    </article>
  );
}

