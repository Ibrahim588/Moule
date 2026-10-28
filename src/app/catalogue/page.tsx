"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, Search, MessageCircle, ArrowLeft, Filter } from "lucide-react";
import { occasionCollections, featuredHospitalityItems } from "@/data/catalogue";
import OccasionCard from "@/components/OccasionCard";
import { buildWhatsAppInquiryUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/Icons";

const categories = [
  { id: "all", label: "جميع المناسبات" },
  { id: "weddings", label: "ضيافات الأفراح" },
  { id: "engagement", label: "الخطوبة والملْكة" },
  { id: "reception", label: "استقبال المواليد" },
  { id: "gifts", label: "الهدايا والتغليف" },
  { id: "corporate", label: "الشركات والخاصة" },
  { id: "seasonal", label: "المواسم والأعياد" },
];

export default function CataloguePage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCollections = occasionCollections.filter((col) => {
    const matchesCategory = selectedCategory === "all" || col.category === selectedCategory;
    const matchesSearch =
      col.titleAr.includes(searchQuery) ||
      col.shortDescAr.includes(searchQuery) ||
      col.titleEn.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      
      {/* Page Title & Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-moule-champagne/20 border border-moule-champagne/30 text-moule-espresso text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-moule-champagne" />
          <span>كتالوج المناسبات والضيافة</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-moule-espresso">
          مجموعات متكاملة لكل لحظة مميزة
        </h1>
        <p className="text-xs sm:text-sm text-moule-espresso/70 leading-relaxed">
          تصفحوا تشكيلات صواني الضيافة وتنسيقات المناسبات الفاخرة المتاحة للطلب والتخصيص في مدينة جدة.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-6 bg-white p-6 rounded-3xl border border-moule-beige shadow-sm">
        
        {/* Search input */}
        <div className="relative max-w-md mx-auto">
          <Search className="w-4 h-4 text-moule-espresso/40 absolute right-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ابحث عن مناسبة، صواني، زواج، استقبال مواليد..."
            className="w-full pr-11 pl-4 py-3 rounded-full border border-moule-beige text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-moule-champagne/50 bg-moule-sand/30"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap pt-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  isSelected
                    ? "bg-moule-espresso text-moule-ivory shadow-sm"
                    : "bg-moule-sand/60 text-moule-espresso/80 hover:bg-moule-beige/60"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results grid */}
      {filteredCollections.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCollections.map((col) => (
            <OccasionCard key={col.slug} collection={col} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-3xl border border-moule-beige space-y-4">
          <p className="text-sm text-moule-espresso/70">
            لم نجد نتائج تطابق بحثك الحالي.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="text-xs font-bold text-moule-espresso underline hover:text-moule-champagne"
          >
            إعادة تعيين خيارات التصفية
          </button>
        </div>
      )}

      {/* Section for Individual Hospitality Items */}
      <div id="hospitality-items" className="pt-16 border-t border-moule-beige/80 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest text-moule-champagne font-bold">
            تفاصيل إضافية
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-moule-espresso">
            أصناف وتقديمات الصواني الفردية
          </h2>
          <p className="text-xs text-moule-espresso/70">
            نماذج لصواني الشوكولاتة والتوزيعات التي يمكن إضافتها لأي مناسبة.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredHospitalityItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-moule-beige flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-moule-sand">
                  <img
                    src={item.image}
                    alt={item.titleAr}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <span className="absolute top-3 right-3 bg-white/90 text-[10px] font-semibold text-moule-espresso px-2 py-0.5 rounded-full">
                    {item.categoryAr}
                  </span>
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="text-sm font-serif font-bold text-moule-espresso">
                    {item.titleAr}
                  </h3>
                  <p className="text-xs text-moule-espresso/70 line-clamp-2">
                    {item.descriptionAr}
                  </p>
                  <p className="text-[11px] text-moule-espresso/60 pt-1">
                    الحد الأدنى: {item.minimumOrderQuantityAr}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0 border-t border-moule-beige/40 flex items-center justify-between">
                <span className="text-xs font-semibold text-moule-champagne">
                  {item.priceDisplayAr}
                </span>
                <a
                  href={buildWhatsAppInquiryUrl({ itemTitle: item.titleAr })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full bg-moule-sand text-moule-espresso text-xs font-medium hover:bg-moule-champagne/20 transition-colors inline-flex items-center gap-1"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-moule-champagne" />
                  <span>طلب</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quote Banner */}
      <div className="p-8 sm:p-12 rounded-3xl bg-moule-sand/70 border border-moule-beige text-center space-y-4">
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-moule-espresso">
          هل تحتاجون لتنسيق صواني وثيم خاص لمناسبتكم في جدة؟
        </h3>
        <p className="text-xs sm:text-sm text-moule-espresso/70 max-w-xl mx-auto">
          فريقنا جاهز لتصميم وتركيب صواني متناغمة تماماً مع ألوان ديكور مناسبتكم.
        </p>
        <div className="pt-2">
          <Link
            href="/quote"
            className="px-8 py-3.5 rounded-full bg-moule-espresso text-moule-ivory font-semibold text-xs hover:bg-moule-espresso/90 inline-flex items-center gap-2 shadow-sm"
          >
            <span>طلب عرض سعر مفصل</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

    </div>
  );
}

