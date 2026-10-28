import { BranchInfo } from "@/types";

export const siteConfig = {
  brandNameAr: "موليه",
  brandNameEn: "Moule",
  fullBrandTitle: "Moule | موليه",
  taglineAr: "تفاصيل تليق بأجمل مناسباتكم",
  taglineEn: "Refined Hospitality & Occasions",
  descriptionAr: "العلامة الرائدة بجدة في ضيافات الأفراح، تنظيم مناسبات الملكة والاستقبال، وتنسيق الهدايا والتغليف الفاخر بأعلى معايير الإتقان.",
  descriptionEn: "Jeddah's premier destination for luxury wedding hospitality, refined occasion catering, and bespoke gift packaging.",
  
  // Official Contact Information
  phone: "+966 59 801 1116",
  phoneRaw: "+966598011116",
  whatsappNumber: "966598011116",
  email: "inquiries@moule.com.sa", // للمراسلات الإدارية الرسمية
  
  // Official Verified Social Media
  social: {
    instagram: "https://www.instagram.com/moule.official/",
    tiktok: "https://www.tiktok.com/@moule.official",
    googleMapsVerified: "https://www.google.com/maps?cid=3115813301661985481",
  },

  // Owner Supplied Business Metrics (Easily editable and flagged)
  ownerSuppliedRating: {
    score: 4.8,
    totalReviews: 473,
    provider: "Google Reviews / تقييمات العملاء",
    isVerifiedByOwner: true,
    verificationNoteAr: "تقييمات مجمعة مسجلة للعلامة التجارية في مدينة جدة",
  },

  // Seasonal Announcement Bar
  announcement: {
    isEnabled: true,
    textAr: "نستقبل الآن حجوزات وتنسيقات مناسبات وأفراح الموسم — احجزوا موعدكم مبكراً لضمان توفر التواريخ المطلوبة",
    ctaTextAr: "طلب عرض سعر",
    link: "/quote",
  },

  // Branches
  branches: [
    {
      id: "al-faisaliyah",
      nameAr: "فرع الفيصلية (الفرع المعتمد)",
      nameEn: "Al-Faisaliyah Branch (Main)",
      cityAr: "جدة، المملكة العربية السعودية",
      neighborhoodAr: "حي الفيصلية",
      addressAr: "حي الفيصلية، جدة — المملكة العربية السعودية",
      isVerified: true,
      googleMapsUrl: "https://www.google.com/maps?cid=3115813301661985481",
      phone: "+966 59 801 1116",
      whatsapp: "966598011116",
      workingHoursAr: "يومياً من 10:00 صباحاً حتى 11:00 مساءً (يرجى التحقق من المواعيد الخاصة بشهر رمضان والمواسم)",
    },
    {
      id: "al-rayyan",
      nameAr: "فرع الريان",
      nameEn: "Al-Rayyan Branch",
      cityAr: "جدة، المملكة العربية السعودية",
      neighborhoodAr: "حي الريان",
      addressAr: "حي الريان، جدة — (قيد تأكيد العنوان الدقيق وموقع الخريطة من إدارة موليه قبل النشر النهائي)",
      isVerified: false, // لم يتم اعتماده كعنوان نهائي
      phone: "+966 59 801 1116",
      whatsapp: "966598011116",
      workingHoursAr: "يرجى التواصل المسبق عبر الواتساب لتأكيد الاستقبال",
    },
  ] as BranchInfo[],
};

