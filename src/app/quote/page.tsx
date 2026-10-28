"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { 
  Sparkles, 
  MessageCircle, 
  Copy, 
  Check, 
  AlertCircle, 
  ShieldCheck, 
  CalendarDays, 
  HelpCircle,
  FileText
} from "lucide-react";
import { QuoteFormData } from "@/types";
import { buildWhatsAppQuotationUrl, generateQuoteTextSummary } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/Icons";

function QuotationFormContent() {
  const searchParams = useSearchParams();
  const prefilledService = searchParams.get("service") || "";

  const [formData, setFormData] = useState<QuoteFormData>({
    customerName: "",
    phone: "",
    occasionType: "ضيافة أفراح / زواج",
    eventDate: "",
    guestCount: "",
    serviceType: prefilledService || "ضيافة متكاملة (صواني تقديم وتوزيعات)",
    locationCity: "جدة",
    budgetRange: "",
    notes: "",
    referenceLinks: "",
  });

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({
        ...prev,
        serviceType: `مجموعة ${prefilledService}`,
      }));
    }
  }, [prefilledService]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Saudi phone validation regex: accepts 05xxxxxxxx, +9665xxxxxxxx, 9665xxxxxxxx, 5xxxxxxxx
  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.customerName.trim()) {
      newErrors.customerName = "يرجى كتابة الاسم الكريم.";
    }

    const cleanPhone = formData.phone.replace(/[\s\-\(\)]/g, "");
    const saudiPhoneRegex = /^(05|5|\+9665|009665|9665)[0-9]{8}$/;

    if (!cleanPhone) {
      newErrors.phone = "يرجى إدخال رقم الجوال للتواصل وتأكيد العرض.";
    } else if (!saudiPhoneRegex.test(cleanPhone)) {
      newErrors.phone = "يرجى كتابة رقم جوال سعودي صالح (مثال: 0598011116).";
    }

    if (!formData.occasionType) {
      newErrors.occasionType = "يرجى تحديد نوع المناسبة.";
    }

    if (!formData.eventDate) {
      newErrors.eventDate = "يرجى اختيار تاريخ المناسبة التقريبي.";
    } else {
      const selectedDate = new Date(formData.eventDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.eventDate = "يرجى اختيار تاريخ في الحاضر أو المستقبل.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const whatsappUrl = buildWhatsAppQuotationUrl(formData);
    setSubmittedUrl(whatsappUrl);

    // Open WhatsApp in safe new window
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setIsSubmitting(false);
  };

  const handleCopySummary = () => {
    const summary = generateQuoteTextSummary(formData);
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-moule-champagne/20 border border-moule-champagne/30 text-moule-espresso text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-moule-champagne" />
          <span>خدمة التنسيق والتسعير المخصص</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-moule-espresso">
          طلب عرض سعر وتنسيق مناسبة
        </h1>
        <p className="text-xs sm:text-sm text-moule-espresso/70 leading-relaxed">
          شاركونا تفاصيل مناسبتكم الكريمة في جدة، وسيقوم فريق موليه بمراجعة التفاصيل ومراسلتكم بالخيارات والأسعار عبر واتساب.
        </p>
      </div>

      {/* Main Form Box */}
      <div className="bg-white rounded-3xl border border-moule-beige p-6 sm:p-10 shadow-luxury space-y-8">
        
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Row 1: Name and Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-moule-espresso">
                الاسم الكريم <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.customerName}
                onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                placeholder="مثال: سارة الأحمد / فيصل الغامدي"
                className={`w-full px-4 py-3 rounded-2xl border text-xs sm:text-sm bg-moule-sand/20 focus:outline-none focus:ring-2 ${
                  errors.customerName ? "border-red-400 focus:ring-red-300" : "border-moule-beige focus:ring-moule-champagne/50"
                }`}
              />
              {errors.customerName && (
                <p className="text-red-500 text-[11px] font-medium">{errors.customerName}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-moule-espresso">
                رقم الجوال (سعودي) <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                dir="ltr"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="0598011116"
                className={`w-full px-4 py-3 rounded-2xl border text-xs sm:text-sm bg-moule-sand/20 focus:outline-none focus:ring-2 text-right ${
                  errors.phone ? "border-red-400 focus:ring-red-300" : "border-moule-beige focus:ring-moule-champagne/50"
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-[11px] font-medium">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Row 2: Occasion Type and Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-moule-espresso">
                نوع المناسبة <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.occasionType}
                onChange={(e) => setFormData({ ...formData, occasionType: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl border border-moule-beige text-xs sm:text-sm bg-moule-sand/20 focus:outline-none focus:ring-2 focus:ring-moule-champagne/50 text-moule-espresso"
              >
                <option value="ضيافة أفراح / زواج">ضيافة أفراح / زواج</option>
                <option value="حفل خطوبة أو ملْكة">حفل خطوبة أو ملْكة</option>
                <option value="استقبال مولود (مستشفى / منزل)">استقبال مولود (مستشفى / منزل)</option>
                <option value="توزيعات وهدايا خاصة">توزيعات وتغليف هدايا خاصة</option>
                <option value="مناسبة شركات أو افتتاح">مناسبة شركات وافتتاح</option>
                <option value="مناسبة موسمية أو عيد">مناسبة موسمية أو عيد</option>
                <option value="أخرى">أخرى (مخصصة)</option>
              </select>
              {errors.occasionType && (
                <p className="text-red-500 text-[11px] font-medium">{errors.occasionType}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-moule-espresso">
                تاريخ المناسبة التقريبي <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                value={formData.eventDate}
                onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                className={`w-full px-4 py-3 rounded-2xl border text-xs sm:text-sm bg-moule-sand/20 focus:outline-none focus:ring-2 ${
                  errors.eventDate ? "border-red-400 focus:ring-red-300" : "border-moule-beige focus:ring-moule-champagne/50"
                }`}
              />
              {errors.eventDate && (
                <p className="text-red-500 text-[11px] font-medium">{errors.eventDate}</p>
              )}
            </div>
          </div>

          {/* Row 3: Guest count & Service Type & Location */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-moule-espresso">
                عدد الضيوف أو الكمية التقريبية
              </label>
              <input
                type="text"
                value={formData.guestCount}
                onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                placeholder="مثال: 150 - 200 ضيف"
                className="w-full px-4 py-3 rounded-2xl border border-moule-beige text-xs sm:text-sm bg-moule-sand/20 focus:outline-none focus:ring-2 focus:ring-moule-champagne/50"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-moule-espresso">
                نوع الضيافة أو التغليف
              </label>
              <input
                type="text"
                value={formData.serviceType}
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                placeholder="مثال: صواني شوكولاتة وتوزيعات"
                className="w-full px-4 py-3 rounded-2xl border border-moule-beige text-xs sm:text-sm bg-moule-sand/20 focus:outline-none focus:ring-2 focus:ring-moule-champagne/50"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-moule-espresso">
                المدينة أو القاعة بجدة
              </label>
              <input
                type="text"
                value={formData.locationCity}
                onChange={(e) => setFormData({ ...formData, locationCity: e.target.value })}
                placeholder="مثال: جدة — قاعة ليلتي"
                className="w-full px-4 py-3 rounded-2xl border border-moule-beige text-xs sm:text-sm bg-moule-sand/20 focus:outline-none focus:ring-2 focus:ring-moule-champagne/50"
              />
            </div>
          </div>

          {/* Row 4: Budget & Reference Link */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-moule-espresso">
                الميزانية التقريبية (اختياري)
              </label>
              <input
                type="text"
                value={formData.budgetRange}
                onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                placeholder="مثال: 5,000 - 8,000 ر.س"
                className="w-full px-4 py-3 rounded-2xl border border-moule-beige text-xs sm:text-sm bg-moule-sand/20 focus:outline-none focus:ring-2 focus:ring-moule-champagne/50"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-moule-espresso">
                رابط صورة أو فكرة ثيم مرجعية (اختياري)
              </label>
              <input
                type="text"
                value={formData.referenceLinks}
                onChange={(e) => setFormData({ ...formData, referenceLinks: e.target.value })}
                placeholder="رابط Pinterest أو صورة من إنستغرام"
                className="w-full px-4 py-3 rounded-2xl border border-moule-beige text-xs sm:text-sm bg-moule-sand/20 focus:outline-none focus:ring-2 focus:ring-moule-champagne/50"
              />
            </div>
          </div>

          {/* Additional Notes */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-moule-espresso">
              تفاصيل إضافية (ألوان الثيم، تفضيلات التقديم، أي طلبات خاصة)
            </label>
            <textarea
              rows={3}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="اكتبوا لنا أي تفاصيل ترغبون في إبرازها..."
              className="w-full px-4 py-3 rounded-2xl border border-moule-beige text-xs sm:text-sm bg-moule-sand/20 focus:outline-none focus:ring-2 focus:ring-moule-champagne/50"
            />
          </div>

          {/* Important Information Notice */}
          <div className="p-4 rounded-2xl bg-moule-sand/60 border border-moule-beige/80 text-xs text-moule-espresso/75 space-y-1.5">
            <div className="flex items-center gap-1.5 font-bold text-moule-espresso">
              <AlertCircle className="w-4 h-4 text-moule-champagne" />
              <span>كيف تتم معالجة الطلب؟</span>
            </div>
            <p className="leading-relaxed">
              عند النقر على «إرسال وتجهيز الطلب عبر واتساب»، سيتم فتح تطبيق واتساب متضمناً ملخص التفاصيل التي أدخلتموها. يرجى الضغط على زر الإرسال داخل واتساب لتصلنا الرسالة. في حال تعذر فتح واتساب، يمكنكم استخدام زر «نسخ الملخص» ومراستلنا مباشرة.
            </p>
          </div>

          {/* Submit Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:flex-1 py-4 px-8 rounded-full bg-moule-espresso text-moule-ivory font-semibold text-xs sm:text-sm hover:bg-moule-espresso/90 flex items-center justify-center gap-2 shadow-luxury transition-all disabled:opacity-50"
            >
              <WhatsAppIcon className="w-4 h-4 text-moule-champagne" />
              <span>إرسال وتجهيز الطلب عبر واتساب</span>
            </button>

            <button
              type="button"
              onClick={handleCopySummary}
              className="w-full sm:w-auto py-4 px-6 rounded-full border border-moule-beige bg-white text-moule-espresso font-semibold text-xs hover:bg-moule-sand flex items-center justify-center gap-2 transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-green-700">تم نسخ الملخص!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-moule-champagne" />
                  <span>نسخ ملخص البيانات</span>
                </>
              )}
            </button>
          </div>

        </form>

        {/* Fallback Display if WhatsApp does not open automatically */}
        {submittedUrl && (
          <div className="pt-6 border-t border-moule-beige/80 text-center space-y-2 animate-in fade-in">
            <p className="text-xs text-moule-espresso/80">
              إذا لم يفتح تطبيق واتساب على جهازك تلقائياً، يمكنك الضغط على الرابط المباشر أدناه:
            </p>
            <a
              href={submittedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-moule-espresso hover:text-moule-champagne underline"
            >
              <span>فتح محادثة واتساب يدوياً ومتابعة الطلب</span>
              <span>←</span>
            </a>
          </div>
        )}

      </div>

      {/* Trust reassurance badge */}
      <div className="flex items-center justify-center gap-2 text-xs text-moule-espresso/70">
        <ShieldCheck className="w-4 h-4 text-moule-champagne" />
        <span>بياناتكم محفوفة بالخصوصية التامة وتُستخدم فقط للتواصل المباشر مع مستشاري موليه.</span>
      </div>

    </div>
  );
}

export default function QuotePage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-xs">جاري تجهيز نموذج طلب السعر...</div>}>
      <QuotationFormContent />
    </Suspense>
  );
}

