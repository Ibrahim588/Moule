import Link from "next/link";
import { 
  Sparkles, 
  ArrowLeft, 
  Star, 
  Gift, 
  CheckCircle2, 
  CalendarDays, 
  MapPin, 
  MessageCircle, 
  Phone, 
  ExternalLink,
  Instagram,
  PackageCheck,
  ShieldCheck,
  HeartHandshake
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { occasionCollections, featuredHospitalityItems } from "@/data/catalogue";
import OccasionCard from "@/components/OccasionCard";
import { buildWhatsAppInquiryUrl } from "@/lib/whatsapp";

export default function HomePage() {
  const verifiedBranch = siteConfig.branches.find((b) => b.isVerified);

  return (
    <div className="space-y-24 sm:space-y-32 pb-24 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-b from-moule-sand/70 via-moule-ivory to-moule-ivory px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Text Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-right">
            
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-moule-champagne/20 border border-moule-champagne/40 text-moule-espresso text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-moule-champagne shrink-0" />
              <span>ضيافة فاخرة وتغليف هدايا للمناسبات — جدة</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-moule-espresso tracking-tight leading-[1.15]">
              تفاصيل تليق بأجمل مناسباتكم
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-xl text-moule-espresso/80 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              ضيافات وهدايا وتفاصيل مُنسّقة بعناية، لتجعل مناسباتكم أكثر أناقة وتميّزًا.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/catalogue"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-moule-espresso text-moule-ivory font-semibold text-sm hover:bg-moule-espresso/90 hover:shadow-lg transition-all text-center flex items-center justify-center gap-2 group"
              >
                <span>اكتشفوا مجموعاتنا</span>
                <ArrowLeft className="w-4 h-4 text-moule-champagne group-hover:-translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/quote"
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-moule-espresso/30 text-moule-espresso font-semibold text-sm hover:bg-moule-beige/40 transition-all text-center"
              >
                اطلبوا عرض سعر
              </Link>
            </div>

            {/* Trust Metric (Owner Supplied) */}
            {siteConfig.ownerSuppliedRating.isVerifiedByOwner && (
              <div className="pt-6 border-t border-moule-beige/60 flex items-center justify-center lg:justify-start gap-3 text-xs text-moule-espresso/70 flex-wrap">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="font-bold text-moule-espresso text-sm">
                  {siteConfig.ownerSuppliedRating.score}
                </span>
                <span>/ 5</span>
                <span className="text-moule-espresso/40">•</span>
                <span>
                  مبني على {siteConfig.ownerSuppliedRating.totalReviews} تقييم مسجل في جدة
                </span>
              </div>
            )}
          </div>

          {/* Hero Editorial Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative border */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-3xl border border-moule-champagne/40 -rotate-1 pointer-events-none" />
              
              {/* Main image container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-moule-sand aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85"
                  alt="ضيافات وتنسيقات موليه الفاخرة للأفراح في جدة"
                  className="w-full h-full object-cover"
                />
                
                {/* Floating highlight card */}
                <div className="absolute bottom-5 right-5 left-5 bg-moule-ivory/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-moule-beige/80">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-moule-sand flex items-center justify-center shrink-0">
                      <Sparkles className="w-5 h-5 text-moule-champagne" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-moule-espresso">
                        ضيافة وتنسيق مخصص
                      </p>
                      <p className="text-[11px] text-moule-espresso/70">
                        صواني ملكية متناغمة مع ديكور وثيم ليلتكم
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OCCASION COLLECTIONS (مجموعات المناسبات) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-moule-champagne font-bold">
              <span>مجموعاتنا المقترحة</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-moule-espresso">
              لكل مناسبة تفاصيلها الفريدة
            </h2>
            <p className="text-xs sm:text-sm text-moule-espresso/70 leading-relaxed">
              تصفحوا مجموعات الضيافة والتغليف المصممة لتتكامل مع مختلف المناسبات العائلية والمؤسسية في مدينة جدة.
            </p>
          </div>
          <Link
            href="/catalogue"
            className="inline-flex items-center gap-2 text-xs font-bold text-moule-espresso hover:text-moule-champagne transition-colors group shrink-0"
          >
            <span>عرض الكتالوج الكامل</span>
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {occasionCollections.map((col) => (
            <OccasionCard key={col.slug} collection={col} />
          ))}
        </div>
      </section>

      {/* 3. FEATURED HOSPITALITY SECTION (أصناف مختارة من كتالوج الضيافة) */}
      <section id="hospitality-items" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-moule-champagne font-bold">
            صواني وتقديمات مختارة
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-moule-espresso">
            أبرز خيارات الضيافة والتقديم
          </h2>
          <p className="text-xs sm:text-sm text-moule-espresso/70 leading-relaxed">
            نماذج مقترحة لصواني التقديم والتوزيعات التذكارية. يمكن تعديل المقاسات، الألوان، والأصناف بما يناسب ذوقكم.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredHospitalityItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-moule-beige hover:shadow-luxury transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-moule-sand">
                  <img
                    src={item.image}
                    alt={item.titleAr}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-3 right-3 bg-white/95 text-[10px] font-semibold text-moule-espresso px-2.5 py-1 rounded-full shadow-sm">
                    {item.categoryAr}
                  </span>
                </div>
                <div className="p-5 space-y-3">
                  <h3 className="text-base font-serif font-bold text-moule-espresso line-clamp-1">
                    {item.titleAr}
                  </h3>
                  <p className="text-xs text-moule-espresso/70 line-clamp-2 leading-relaxed">
                    {item.descriptionAr}
                  </p>
                  <div className="pt-2 text-[11px] text-moule-espresso/60 space-y-1">
                    <p>• {item.servingStyleAr}</p>
                    <p>• الكمية: {item.minimumOrderQuantityAr}</p>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-moule-beige/40 flex items-center justify-between gap-2 mt-2">
                <span className="text-xs font-semibold text-moule-champagne">
                  {item.priceDisplayAr}
                </span>
                <a
                  href={buildWhatsAppInquiryUrl({ itemTitle: item.titleAr })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full bg-moule-sand hover:bg-moule-champagne/20 text-moule-espresso text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-moule-champagne" />
                  <span>استفسار</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PACKAGING AND PERSONALIZED GIFTS (التغليف والهدايا) */}
      <section className="bg-moule-espresso text-moule-ivory py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-moule-champagne/15 border border-moule-champagne/30 text-moule-champagne text-xs font-semibold">
              <Gift className="w-3.5 h-3.5" />
              <span>فلسفة التغليف والإهداء</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-bold leading-[1.2]">
              أناقة التقديم وجمال الانطباع الأول
            </h2>

            <p className="text-moule-ivory/80 text-sm sm:text-base leading-relaxed">
              في «موليه»، التغليف ليس مجرد غطاء خارجي، بل هو لغة تقدير ورمزية فاخرة. نحرص على اختيار أرقى الأقمشة الإيطالية والمخمل والأشرطة الحريرية والبطاقات المذهبة لتعبر عن ذوقكم الرفيع في مناسباتكم الخاصة.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-moule-champagne shrink-0 mt-1" />
                <div className="text-xs">
                  <strong className="block text-moule-ivory mb-0.5">تناغم كامل مع الثيم</strong>
                  <span className="text-moule-ivory/70">مواءمة الألوان بدقة مع قاعات وديكورات الأفراح.</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-moule-champagne shrink-0 mt-1" />
                <div className="text-xs">
                  <strong className="block text-moule-ivory mb-0.5">تخصيص الأسماء والتواريخ</strong>
                  <span className="text-moule-ivory/70">أختام شمعية وتطريز فاخر يخلد اللحظة.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="px-8 py-3.5 rounded-full bg-moule-champagne text-moule-espresso font-semibold text-xs hover:bg-moule-champagne/90 transition-colors text-center inline-flex items-center justify-center gap-2"
              >
                <span>طلب تصميم وتنسيق مخصص</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
              <Link
                href="/catalogue/packaging-and-gifting"
                className="px-8 py-3.5 rounded-full border border-moule-champagne/40 text-moule-ivory font-medium text-xs hover:bg-white/10 transition-colors text-center"
              >
                استعراض أفكار التغليف
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=700&q=80"
                  alt="تغليف هدايا فاخر"
                  className="rounded-2xl h-64 sm:h-72 w-full object-cover shadow-lg"
                  loading="lazy"
                />
                <img
                  src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=700&q=80"
                  alt="بوكسات إهداء ومناسبات"
                  className="rounded-2xl h-44 sm:h-52 w-full object-cover shadow-lg"
                  loading="lazy"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=700&q=80"
                  alt="أشرطة وتنسيقات ملكة"
                  className="rounded-2xl h-44 sm:h-52 w-full object-cover shadow-lg"
                  loading="lazy"
                />
                <img
                  src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=700&q=80"
                  alt="توزيعات مواليد"
                  className="rounded-2xl h-64 sm:h-72 w-full object-cover shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW ORDERING WORKS (كيف نبدأ) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-moule-champagne font-bold">
            خطوات ميسرة
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-moule-espresso">
            كيف تسير رحلة طلبكم؟
          </h2>
          <p className="text-xs sm:text-sm text-moule-espresso/70 leading-relaxed">
            أربع خطوات واضحة تضمن ترتيب وتنسيق كافة تفاصيل مناسبتكم الكريمة مع فريق موليه.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              num: "01",
              title: "اختاروا المناسبة",
              desc: "حددوا نوع المناسبة (زواج، ملكة، استقبال، شركات) وتاريخها التقريبي في مدينة جدة.",
            },
            {
              num: "02",
              title: "استكشفوا الخيارات المتاحة",
              desc: "تصفحوا مجموعات الكتالوج أو أرسلوا لنا رؤيتكم الخاصة وألوان الديكور المرغوبة.",
            },
            {
              num: "03",
              title: "أرسلوا تفاصيل طلبكم",
              desc: "عبر نموذج طلب عرض السعر أو مباشرة إلى واتساب مع عدد الضيوف والكمية المطلوبة.",
            },
            {
              num: "04",
              title: "التأكيد والاعتماد",
              desc: "يتواصل معكم فريقنا لاعتماد خيارات الصواني، التغليف، مواعيد التسليم، والتسعير النهائي.",
            },
          ].map((item) => (
            <div
              key={item.num}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-moule-beige hover:border-moule-champagne transition-all space-y-4 relative"
            >
              <span className="text-3xl font-serif font-bold text-moule-champagne block">
                {item.num}
              </span>
              <h3 className="text-base font-serif font-bold text-moule-espresso">
                {item.title}
              </h3>
              <p className="text-xs text-moule-espresso/75 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Clear ordering disclaimer */}
        <div className="mt-8 text-center max-w-2xl mx-auto p-4 rounded-2xl bg-moule-sand/80 border border-moule-beige/60">
          <p className="text-xs text-moule-espresso/70">
            * <strong>تنبيه شفاف:</strong> إرسال الاستفسار أو فتح محادثة واتساب هو خطوة أولى للتنسيق، ولا يُعتبر الطلب مؤكداً حتى يتم اعتماده رسمياً ودفع العربون من قبل فريق عمل موليه.
          </p>
        </div>
      </section>

      {/* 6. BRAND STORY (قصة وفلسفة موليه) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-moule-champagne/20 text-moule-espresso text-xs font-semibold">
          <HeartHandshake className="w-3.5 h-3.5 text-moule-champagne" />
          <span>عن علامة موليه</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-moule-espresso">
          الضيافة السعودية بلمسة عصرية راقية
        </h2>
        <div className="max-w-3xl mx-auto space-y-4 text-sm sm:text-base text-moule-espresso/80 leading-relaxed font-light">
          <p>
            انطلقت «موليه» في عروس البحر الأحمر — جدة، لتعيد تعريف مفاهيم الضيافة وتقديم الهدايا. نجمع بين حفاوة الكرم السعودي الأصيل ودقة التنسيق المعاصر المستوحى من أرقى دور الهدايا العالمية.
          </p>
          <p>
            نعمل بشغف مع العائلات والمقبلين على الزواج ومنظمي المناسبات لتحويل لحظات الفرح إلى ذكريات بصرية ومذاقية متناغمة، حيث يُعامل كل صنف من صوانينا وتغليفاتنا كقطعة فنية صممت لتلائم أصحابها.
          </p>
        </div>
      </section>

      {/* 7. SOCIAL MEDIA GALLERY (معرض الإلهام والتواصل) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-moule-champagne font-bold">
              متابعة يومية للتفاصيل
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-moule-espresso">
              من كواليس أعمالنا على إنستغرام وتيك توك
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full border border-moule-beige bg-white text-xs font-semibold text-moule-espresso hover:text-moule-champagne flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>@moule.official</span>
            </a>
            <a
              href={siteConfig.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full border border-moule-beige bg-white text-xs font-semibold text-moule-espresso hover:text-moule-champagne flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <span>TikTok</span>
              <ExternalLink className="w-3 h-3 text-moule-champagne" />
            </a>
          </div>
        </div>

        {/* Responsive Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
              title: "تجهيز صواني أفراح ملكية",
            },
            {
              url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
              title: "تنسيق حفلات الملكة",
            },
            {
              url: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=600&q=80",
              title: "تغليف هدايا خاص",
            },
            {
              url: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=600&q=80",
              title: "استقبال مواليد ناعم",
            },
          ].map((img, i) => (
            <div
              key={i}
              className="relative h-60 sm:h-72 rounded-2xl overflow-hidden group bg-moule-sand"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-moule-espresso/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4 text-center">
                <span className="text-white text-xs font-medium">
                  {img.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. BRANCHES & CONTACT SECTION (فروعنا في جدة) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-moule-beige rounded-3xl p-8 sm:p-12 shadow-sm space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-moule-beige/60">
            <div>
              <span className="text-xs uppercase tracking-widest text-moule-champagne font-bold">
                مواقعنا الرسمية
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-moule-espresso mt-1">
                فروع موليه في مدينة جدة
              </h2>
            </div>
            <Link
              href="/branches"
              className="text-xs font-bold text-moule-espresso hover:text-moule-champagne inline-flex items-center gap-1.5"
            >
              <span>تفاصيل الفروع وساعات العمل</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Main Verified Branch: Al-Faisaliyah */}
            {verifiedBranch && (
              <div className="p-6 rounded-2xl bg-moule-sand/50 border border-moule-beige space-y-4 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-moule-champagne">
                      جدة، المملكة العربية السعودية
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] bg-green-100 text-green-800 font-semibold px-2 py-0.5 rounded-full">
                      <ShieldCheck className="w-3 h-3" />
                      <span>فرع معتمد ومثبت</span>
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-moule-espresso">
                    {verifiedBranch.nameAr}
                  </h3>
                  <p className="text-xs text-moule-espresso/75">
                    {verifiedBranch.addressAr}
                  </p>
                </div>

                <div className="pt-4 border-t border-moule-beige/60 flex items-center justify-between gap-3">
                  <a
                    href={verifiedBranch.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-moule-espresso hover:text-moule-champagne underline"
                  >
                    <MapPin className="w-3.5 h-3.5 text-moule-champagne" />
                    <span>الاتجاهات عبر Google Maps</span>
                  </a>
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="p-2 rounded-full bg-white border border-moule-beige text-moule-espresso hover:text-moule-champagne"
                    title="اتصال هاتفي"
                  >
                    <Phone className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}

            {/* Unverified / Additional Branch Note: Al-Rayyan */}
            <div className="p-6 rounded-2xl bg-moule-sand/30 border border-dashed border-moule-beige space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-moule-espresso/60">
                    جدة، المملكة العربية السعودية
                  </span>
                  <span className="text-[10px] bg-amber-100 text-amber-800 font-semibold px-2 py-0.5 rounded-full">
                    قيد تأكيد العنوان النهائي
                  </span>
                </div>
                <h3 className="text-xl font-serif font-bold text-moule-espresso">
                  فرع الريان
                </h3>
                <p className="text-xs text-moule-espresso/70 leading-relaxed">
                  يتم تأكيد العنوان الدقيق وموقع الخريطة لفرع حي الريان مع إدارة العلامة قبل إتاحته على الخريطة الرسمية.
                </p>
              </div>

              <div className="pt-4 border-t border-moule-beige/60">
                <a
                  href={buildWhatsAppInquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-moule-espresso hover:text-moule-champagne inline-flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-moule-champagne" />
                  <span>تواصل عبر واتساب للاستفسار عن موقع الفرع ←</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

