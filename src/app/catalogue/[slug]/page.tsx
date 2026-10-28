import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  ArrowLeft, 
  MessageCircle, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  Calendar, 
  Share2, 
  ShieldCheck 
} from "lucide-react";
import { occasionCollections } from "@/data/catalogue";
import { buildWhatsAppInquiryUrl } from "@/lib/whatsapp";
import OccasionCard from "@/components/OccasionCard";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return occasionCollections.map((col) => ({
    slug: col.slug,
  }));
}

export function generateMetadata({ params }: Props) {
  const collection = occasionCollections.find((c) => c.slug === params.slug);
  if (!collection) return {};

  return {
    title: `${collection.titleAr} — موليه للضيافة الفاخرة جدة`,
    description: collection.shortDescAr,
    openGraph: {
      title: `${collection.titleAr} | موليه (Moule)`,
      description: collection.fullDescAr,
      images: [{ url: collection.coverImage }],
    },
  };
}

export default function CollectionDetailPage({ params }: Props) {
  const collection = occasionCollections.find((c) => c.slug === params.slug);

  if (!collection) {
    notFound();
  }

  const relatedCollections = occasionCollections
    .filter((c) => c.slug !== collection.slug)
    .slice(0, 3);

  const whatsappInquiryUrl = buildWhatsAppInquiryUrl({
    collectionTitle: collection.titleAr,
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* Breadcrumb Navigation */}
      <nav aria-label="مسار التنقل" className="flex items-center gap-2 text-xs text-moule-espresso/60">
        <Link href="/" className="hover:text-moule-espresso">
          الرئيسية
        </Link>
        <span>/</span>
        <Link href="/catalogue" className="hover:text-moule-espresso">
          الكتالوج والمناسبات
        </Link>
        <span>/</span>
        <span className="text-moule-espresso font-semibold">
          {collection.titleAr}
        </span>
      </nav>

      {/* Main Showcase Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Gallery / Images (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative rounded-3xl overflow-hidden shadow-luxury bg-moule-sand aspect-[4/3]">
            <img
              src={collection.coverImage}
              alt={collection.titleAr}
              className="w-full h-full object-cover"
            />
            <span className="absolute top-4 right-4 bg-moule-ivory/90 backdrop-blur-sm px-3.5 py-1 rounded-full text-xs font-semibold text-moule-espresso">
              {collection.titleEn}
            </span>
          </div>

          {/* Sub-gallery thumbnails */}
          {collection.galleryImages.length > 1 && (
            <div className="grid grid-cols-3 gap-3">
              {collection.galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  className="relative rounded-2xl overflow-hidden aspect-video bg-moule-sand border border-moule-beige"
                >
                  <img
                    src={img}
                    alt={`${collection.titleAr} - ${idx + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Details & CTA Box (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-moule-champagne">
              مجموعة مناسبة خاصة
            </span>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-moule-espresso">
              {collection.titleAr}
            </h1>
            <p className="text-xs sm:text-sm text-moule-espresso/80 leading-relaxed font-light">
              {collection.fullDescAr}
            </p>
          </div>

          {/* Pricing & Lead Time Notice */}
          <div className="p-4 rounded-2xl bg-white border border-moule-beige/80 space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-moule-espresso">مؤشر السعر:</span>
              <span className="text-moule-champagne font-bold">{collection.pricingAr}</span>
            </div>
            <div className="flex items-start gap-2 text-moule-espresso/70 pt-1 border-t border-moule-beige/40">
              <Clock className="w-3.5 h-3.5 text-moule-champagne shrink-0 mt-0.5" />
              <span>{collection.minimumLeadTimeAr}</span>
            </div>
          </div>

          {/* Featured elements */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-moule-espresso">
              ما تتضمنه هذه المجموعة
            </h3>
            <ul className="space-y-2 text-xs text-moule-espresso/80">
              {collection.featuredItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-moule-champagne shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Customization notes */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-moule-espresso">
              خيارات التخصيص والمواءمة
            </h3>
            <ul className="space-y-2 text-xs text-moule-espresso/80">
              {collection.customizationNotes.map((note, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-moule-champagne shrink-0 mt-0.5" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 space-y-3">
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-full bg-moule-espresso text-moule-ivory font-semibold text-xs sm:text-sm hover:bg-moule-espresso/90 flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 text-moule-champagne" />
              <span>طلب تفاصيل وحجز المجموعة عبر واتساب</span>
            </a>

            <Link
              href={`/quote?service=${encodeURIComponent(collection.titleAr)}`}
              className="w-full py-3 px-6 rounded-full border border-moule-beige bg-white text-moule-espresso font-semibold text-xs hover:bg-moule-sand text-center block transition-all"
            >
              طلب تسعير مخصص لعدد ضيوف محدد
            </Link>
          </div>

          {/* Trust guarantee */}
          <div className="p-3.5 rounded-xl bg-moule-sand/60 border border-moule-beige/50 text-[11px] text-moule-espresso/70 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-moule-champagne shrink-0" />
            <span>تأكيد الحجوزات والتواريخ يتم بالتنسيق المباشر مع مستشاري موليه بجدة.</span>
          </div>
        </div>
      </div>

      {/* Related Collections */}
      <div className="pt-16 border-t border-moule-beige/80 space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-moule-espresso">
            مجموعات مناسبات أخرى قد تهمكم
          </h2>
          <Link
            href="/catalogue"
            className="text-xs font-bold text-moule-espresso hover:text-moule-champagne inline-flex items-center gap-1"
          >
            <span>الكتالوج</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedCollections.map((col) => (
            <OccasionCard key={col.slug} collection={col} />
          ))}
        </div>
      </div>

    </div>
  );
}

