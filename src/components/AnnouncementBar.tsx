import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Sparkles, ArrowLeft } from "lucide-react";

export default function AnnouncementBar() {
  if (!siteConfig.announcement.isEnabled) return null;

  return (
    <div className="bg-moule-espresso text-moule-ivory py-2 px-4 text-center border-b border-moule-champagne/20 relative z-50 text-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap font-medium">
        <Sparkles className="w-3.5 h-3.5 text-moule-champagne shrink-0" />
        <span>{siteConfig.announcement.textAr}</span>
        {siteConfig.announcement.ctaTextAr && (
          <Link
            href={siteConfig.announcement.link}
            className="inline-flex items-center gap-1 text-moule-champagne hover:underline mr-2 font-semibold"
          >
            <span>{siteConfig.announcement.ctaTextAr}</span>
            <ArrowLeft className="w-3 h-3" />
          </Link>
        )}
      </div>
    </div>
  );
}

