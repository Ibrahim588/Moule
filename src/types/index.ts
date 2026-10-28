export interface OccasionCollection {
  slug: string;
  titleAr: string;
  titleEn: string;
  category: "weddings" | "engagement" | "reception" | "gifts" | "corporate" | "seasonal";
  shortDescAr: string;
  fullDescAr: string;
  coverImage: string;
  galleryImages: string[];
  featuredItems: string[];
  customizationNotes: string[];
  minimumLeadTimeAr: string;
  pricingAr: string;
  isPopular?: boolean;
}

export interface HospitalityItem {
  id: string;
  titleAr: string;
  collectionSlug: string;
  categoryAr: string;
  descriptionAr: string;
  image: string;
  customizationOptions: string[];
  minimumOrderQuantityAr: string;
  priceDisplayAr: string;
  servingStyleAr: string;
}

export interface BranchInfo {
  id: string;
  nameAr: string;
  nameEn: string;
  cityAr: string;
  neighborhoodAr: string;
  addressAr: string;
  isVerified: boolean;
  googleMapsUrl?: string;
  phone: string;
  whatsapp: string;
  workingHoursAr?: string;
}

export interface QuoteFormData {
  customerName: string;
  phone: string;
  occasionType: string;
  eventDate: string;
  guestCount: string;
  serviceType: string;
  locationCity: string;
  budgetRange?: string;
  notes?: string;
  referenceLinks?: string;
}

