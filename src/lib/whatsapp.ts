import { siteConfig } from "@/config/site";
import { QuoteFormData } from "@/types";

/**
 * Builds standard WhatsApp click-to-chat URL with cleanly formatted Arabic messages.
 */
export function buildWhatsAppInquiryUrl(params?: {
  collectionTitle?: string;
  itemTitle?: string;
  customMessage?: string;
}): string {
  let message = "";

  if (params?.customMessage) {
    message = params.customMessage;
  } else if (params?.collectionTitle) {
    message = `مرحبًا فريق موليه، أود الاستفسار عن تفاصيل وحجوزات مجموعة (${params.collectionTitle}) لمناسبة قادمة. هل يمكنكم تزويدي بالخيارات المتاحة والأسعار؟ شكرًا لكم.`;
  } else if (params?.itemTitle) {
    message = `مرحبًا فريق موليه، أود الاستفسار عن صنف الضيافة (${params.itemTitle})، الحد الأدنى للطلب وإمكانية التخصيص. شكرًا لكم.`;
  } else {
    // Default message specified in requirements:
    message = "مرحبًا فريق موليه، أرغب في الاستفسار عن خدمات الضيافة والتجهيز لمناسبة خاصة. أرجو تزويدي بالخيارات المتاحة والأسعار. شكرًا لكم.";
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedMessage}`;
}

/**
 * Converts custom quotation form details into a structured, elegant WhatsApp summary.
 */
export function buildWhatsAppQuotationUrl(data: QuoteFormData): string {
  const lines: (string | null)[] = [
    `✨ *طلب عرض سعر وتنسيق مناسبة — موليه (Moule)* ✨`,
    `----------------------------------------`,
    `👤 *الاسم الكريم:* ${data.customerName.trim()}`,
    `📱 *رقم الجوال:* ${data.phone.trim()}`,
    `🎉 *نوع المناسبة:* ${data.occasionType}`,
    `📅 *تاريخ المناسبة:* ${data.eventDate}`,
    data.guestCount ? `👥 *عدد الضيوف / الكمية التقريبية:* ${data.guestCount}` : null,
    `🍽️ *نوع الضيافة أو التغليف المطلوبة:* ${data.serviceType}`,
    `📍 *المدينة أو القاعة:* ${data.locationCity}`,
    data.budgetRange ? `💰 *الميزانية التقريبية:* ${data.budgetRange}` : null,
    data.notes ? `📝 *ملاحظات وتفاصيل إضافية:* \n${data.notes}` : null,
    `----------------------------------------`,
    `مُرسل من خلال موقع موليه الرسمي | جدة`,
  ];

  const fullText = lines.filter(Boolean).join("\n");
  const encoded = encodeURIComponent(fullText);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}

/**
 * Generates plain text summary for clipboard copy fallback.
 */
export function generateQuoteTextSummary(data: QuoteFormData): string {
  const lines: (string | null)[] = [
    `طلب عرض سعر — موليه (Moule)`,
    `-----------------------------`,
    `الاسم: ${data.customerName.trim()}`,
    `الجوال: ${data.phone.trim()}`,
    `المناسبة: ${data.occasionType}`,
    `التاريخ: ${data.eventDate}`,
    data.guestCount ? `العدد / الكمية: ${data.guestCount}` : null,
    `الخدمة المطلوبة: ${data.serviceType}`,
    `الموقع: ${data.locationCity}`,
    data.budgetRange ? `الميزانية: ${data.budgetRange}` : null,
    data.notes ? `ملاحظات: ${data.notes}` : null,
  ];

  return lines.filter(Boolean).join("\n");
}

