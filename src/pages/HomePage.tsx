import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  Building2,
  ClipboardCheck,
  Scale,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  MessageCircle,
  ChevronDown,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import { trackEvent } from '../lib/analytics';

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'BCX – Building Contract Expert',
  url: 'https://bcx.ae',
  logo: 'https://bcx.ae/favicon.svg',
  telephone: '+971569001888',
  email: 'info@bcx.ae',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dubai',
    addressCountry: 'AE',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United Arab Emirates',
  },
  serviceType: [
    'Construction Contract Review',
    'Contract Claims Management',
    'Value Engineering',
    'Project Management',
    'Property Handover Inspection',
  ],
  sameAs: ['https://www.instagram.com/bcx.ae'],
  priceRange: 'Contact for pricing',
};

const FAQ_CONTENT = {
  en: {
    heading: 'Frequently Asked Questions',
    subheading: 'Common questions about UAE construction contracts and how BCX can help.',
    items: [
      {
        q: 'Do I need a contract review before signing?',
        a: 'Yes — strongly recommended. Most construction contracts in the UAE are drafted by or in favour of the contractor. Without a professional review, you may unknowingly accept vague scope, hidden cost risks, unfair payment terms, or limited recourse if things go wrong. A review before signing is far less expensive than resolving a dispute after.',
      },
      {
        q: 'What is a BOQ and why does it matter?',
        a: 'BOQ stands for Bill of Quantities — a detailed schedule listing all the materials, quantities, and prices in your construction project. If the BOQ is vague, incomplete, or missing items, you could face significant extra costs for work that should have been included. We review your BOQ to identify gaps, inconsistencies, and pricing risks before you commit.',
      },
      {
        q: 'How long does a contract review take?',
        a: 'Most standard home-building contract reviews are completed within 2–4 business days. Larger or more complex projects (developers, multi-package tenders) typically take 5–7 business days depending on the volume of documents. We confirm the timeline when you send your documents.',
      },
      {
        q: 'How much does a contract review cost?',
        a: 'Pricing depends on the scope and complexity of the documents. We offer a free 60-minute initial consultation to understand your situation before providing a proposal. In most cases, the fee is recovered many times over through the risks and costs we help you avoid.',
      },
      {
        q: 'Can you help if construction has already started?',
        a: 'Yes. We regularly assist clients with ongoing projects — reviewing variation claims, assessing extension of time entitlements, preparing or responding to payment disputes, and managing handover issues. The earlier we get involved, the more options you have, but it is rarely too late.',
      },
      {
        q: 'Do you work across the UAE or only in Dubai?',
        a: 'We serve clients across the UAE — Dubai, Abu Dhabi, Sharjah, Ras Al Khaimah, and other emirates. Most contract review and advisory work can be handled remotely with documents shared digitally. Site visits can be arranged where necessary.',
      },
    ],
  },
  ar: {
    heading: 'الأسئلة الشائعة',
    subheading: 'أسئلة شائعة حول عقود البناء في الإمارات وكيف يمكن لـ BCX مساعدتك.',
    items: [
      {
        q: 'هل أحتاج إلى مراجعة العقد قبل التوقيع؟',
        a: 'نعم — يُنصح بشدة بذلك. معظم عقود البناء في الإمارات تُصاغ لصالح المقاول. بدون مراجعة احترافية، قد تقبل دون علمك بنطاق غامض ومخاطر تكاليف خفية وشروط دفع غير عادلة أو تقييد للخيارات عند حدوث مشكلات. المراجعة قبل التوقيع أقل تكلفة بكثير من حل نزاع بعد ذلك.',
      },
      {
        q: 'ما هو جدول الكميات (BOQ) ولماذا هو مهم؟',
        a: 'جدول الكميات (BOQ) هو جدول تفصيلي يسرد جميع المواد والكميات والأسعار في مشروع البناء الخاص بك. إذا كان جدول الكميات غامضاً أو غير مكتمل أو يفتقر إلى بنود، فقد تواجه تكاليف إضافية كبيرة لأعمال كان يجب أن تكون مدرجة. نراجع جدول الكميات الخاص بك لتحديد الثغرات وعدم الاتساق ومخاطر التسعير قبل التزامك.',
      },
      {
        q: 'كم يستغرق مراجعة العقد؟',
        a: 'تُنجز معظم مراجعات عقود بناء المنازل القياسية في غضون 2-4 أيام عمل. المشاريع الأكبر أو الأكثر تعقيداً (المطورون والمناقصات متعددة الحزم) تستغرق عادةً 5-7 أيام عمل حسب حجم الوثائق. نؤكد الجدول الزمني عند استلام وثائقك.',
      },
      {
        q: 'كم تكلفة مراجعة العقد؟',
        a: 'تعتمد الأسعار على نطاق الوثائق وتعقيدها. نقدم استشارة مجانية لمدة 60 دقيقة لفهم وضعك قبل تقديم عرض. في معظم الحالات، تُسترد الرسوم أضعافاً من خلال المخاطر والتكاليف التي نساعدك على تجنبها.',
      },
      {
        q: 'هل يمكنك المساعدة إذا كان البناء قد بدأ بالفعل؟',
        a: 'نعم. نساعد العملاء بانتظام في المشاريع الجارية - مراجعة مطالبات التغيير وتقييم استحقاقات تمديد الوقت وإعداد أو الرد على نزاعات الدفع وإدارة مشكلات التسليم. كلما شاركنا مبكراً كلما كانت لديك خيارات أكثر، لكن نادراً ما يكون الوقت متأخراً جداً.',
      },
      {
        q: 'هل تعملون في جميع أنحاء الإمارات أم في دبي فقط؟',
        a: 'نخدم العملاء في جميع أنحاء الإمارات - دبي وأبوظبي والشارقة ورأس الخيمة وغيرها من الإمارات. يمكن معالجة معظم أعمال مراجعة العقود والاستشارات عن بُعد مع مشاركة الوثائق رقمياً. يمكن ترتيب زيارات الموقع عند الضرورة.',
      },
    ],
  },
};

export default function HomePage() {
  const { t, dir, language } = useLanguage();

  const seo = {
    en: {
      title: 'UAE Construction Contract Review – Protect Your Investment',
      description:
        "Don't sign your construction contract without a professional review. BCX helps UAE homeowners and developers identify hidden risks, protect their budgets, and avoid costly disputes.",
    },
    ar: {
      title: 'مراجعة عقود البناء في الإمارات – احمِ استثمارك',
      description:
        'لا توقع عقد البناء دون مراجعة احترافية. نحمي أصحاب المنازل والمطورين في الإمارات من المخاطر الخفية والنزاعات المكلفة.',
    },
  };
  const s = seo[language];
  const faq = FAQ_CONTENT[language];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: language === 'ar' ? 'ar' : 'en',
    mainEntity: faq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  const whatsappUrl = `https://wa.me/971569001888?text=${encodeURIComponent(t.home.whatsappPrefill)}`;

  const services = [
    {
      icon: FileText,
      title: t.home.HOWWEPROTECTYOU.IdentifyHiddenRisks.title,
      description: t.home.HOWWEPROTECTYOU.IdentifyHiddenRisks.description,
      link: '/HOWWEPROTECTYOU/home-builders',
    },
    {
      icon: Building2,
      title: t.home.HOWWEPROTECTYOU.ProtectYourFinancialPosition.title,
      description: t.home.HOWWEPROTECTYOU.ProtectYourFinancialPosition.description,
      link: '/HOWWEPROTECTYOU/developers-smes',
    },
    {
      icon: ClipboardCheck,
      title: t.home.HOWWEPROTECTYOU.PreventFutureDisputes.title,
      description: t.home.HOWWEPROTECTYOU.PreventFutureDisputes.description,
      link: '/HOWWEPROTECTYOU/project-management',
    },
    {
      icon: Scale,
      title: t.home.HOWWEPROTECTYOU.valueEngineering.title,
      description: t.home.HOWWEPROTECTYOU.valueEngineering.description,
      link: '/HOWWEPROTECTYOU/value-engineering',
    },
  ];

  const painPoints = [
    t.home.problem.pain1,
    t.home.problem.pain2,
    t.home.problem.pain3,
    t.home.problem.pain4,
  ];

  const solutionItems = [
    t.home.solution.item1,
    t.home.solution.item2,
    t.home.solution.item3,
    t.home.solution.item4,
  ];

  const trustStats = [
    { value: t.home.trust.stat1, label: t.home.trust.stat1Label },
    { value: t.home.trust.stat2, label: t.home.trust.stat2Label },
    { value: t.home.trust.stat3, label: t.home.trust.stat3Label },
    { value: t.home.trust.stat4, label: t.home.trust.stat4Label },
  ];

  return (
    <div>
      <SEOHead title={s.title} description={s.description} path="/" lang={language} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="relative bg-slate-900 text-white overflow-hidden min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <picture>
            <source srcSet="/elitefix-hero-001.webp" type="image/webp" />
            <img
              src="/elitefix-hero-001.jpg"
              alt={t.home.hero.title}
              width={2752}
              height={1536}
              className="w-full h-full object-cover opacity-75"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/85 via-slate-900/65 to-slate-900/90" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 leading-tight text-white">
            {t.home.hero.title}
          </h1>
          <p className="text-xl sm:text-2xl text-slate-200 mb-3 max-w-3xl mx-auto leading-relaxed">
            {t.home.hero.subtitle}
          </p>
          <p className="text-lg sm:text-xl text-amber-300 mb-10 font-medium">
            {t.home.hero.emotionalAnchor}
          </p>

          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 ${dir === 'rtl' ? 'sm:flex-row-reverse' : ''}`}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-hero-whatsapp"
              onClick={() => trackEvent('whatsapp_click', { label: 'hero', language })}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold text-white bg-green-600 rounded-xl hover:bg-green-500 transition-all shadow-lg w-full sm:w-auto"
            >
              <MessageCircle size={22} />
              {t.home.hero.whatsappCta}
            </a>
            <Link
              to="/contact"
              data-testid="link-hero-consultation"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-white/10 border border-white/30 rounded-xl hover:bg-white/20 transition-all w-full sm:w-auto backdrop-blur-sm"
            >
              {t.home.hero.bookConsultation}
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-slate-400 max-w-2xl mx-auto">
            <CheckCircle2 size={16} className="text-green-400 flex-shrink-0" />
            <span>{t.home.hero.credentials}</span>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-3">
              {t.home.problem.title}
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              {t.home.problem.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {painPoints.map((pain, i) => (
              <div
                key={i}
                data-testid={`card-pain-${i + 1}`}
                className={`flex items-start gap-4 bg-slate-800 border border-slate-700 rounded-xl p-5 ${dir === 'rtl' ? 'flex-row-reverse text-right' : ''}`}
              >
                <div className="flex-shrink-0 mt-0.5">
                  <AlertTriangle size={22} className="text-amber-400" />
                </div>
                <p className="text-slate-200 leading-relaxed">{pain}</p>
              </div>
            ))}
          </div>

          <div className={`flex items-center justify-center gap-3 bg-amber-950/50 border border-amber-800/50 rounded-xl px-6 py-4 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
            <AlertTriangle size={20} className="text-amber-400 flex-shrink-0" />
            <p className="text-amber-200 font-medium text-center">
              {t.home.problem.warning}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-3">
              {t.home.solution.title}
            </h2>
            <p className="text-lg text-slate-400">
              {t.home.solution.subtitle}
            </p>
          </div>

          <div className="space-y-4 mb-10">
            {solutionItems.map((item, i) => (
              <div
                key={i}
                data-testid={`item-solution-${i + 1}`}
                className={`flex items-start gap-4 ${dir === 'rtl' ? 'flex-row-reverse text-right' : ''}`}
              >
                <div className="flex-shrink-0 mt-0.5">
                  <CheckCircle2 size={22} className="text-green-400" />
                </div>
                <p className="text-slate-200 text-lg leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-solution-whatsapp"
              onClick={() => trackEvent('whatsapp_click', { label: 'solution', language })}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-green-600 rounded-xl hover:bg-green-500 transition-all shadow-lg"
            >
              <MessageCircle size={20} />
              {t.home.solution.cta}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
            {t.home.mortgage.title}
          </h2>
          <p className="text-xl text-slate-300 mb-4 leading-relaxed">
            {t.home.mortgage.line1}
          </p>
          <p className="text-lg text-amber-200 mb-10 font-medium leading-relaxed">
            {t.home.mortgage.line2}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-mortgage-whatsapp"
            onClick={() => trackEvent('whatsapp_click', { label: 'mortgage_section', language })}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-green-600 rounded-xl hover:bg-green-500 transition-all shadow-lg"
          >
            <MessageCircle size={20} />
            {t.home.mortgage.cta}
          </a>
        </div>
      </section>

      <section className="py-12 bg-slate-900 border-y border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {trustStats.map((stat, i) => (
              <div key={i} data-testid={`stat-trust-${i + 1}`}>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-3">
              {t.home.HOWWEPROTECTYOU.title}
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              {t.home.HOWWEPROTECTYOU.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <Link
                  key={i}
                  to={service.link}
                  data-testid={`card-service-${i + 1}`}
                  className="group bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-slate-500 transition-all duration-200"
                >
                  <div className={`flex items-start gap-4 ${dir === 'rtl' ? 'flex-row-reverse text-right' : ''}`}>
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center group-hover:bg-slate-600 transition-colors">
                        <Icon className="text-slate-300 group-hover:text-white transition-colors" size={24} />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-slate-100 mb-2 group-hover:text-white transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-3">
                        {service.description}
                      </p>
                      <span className={`inline-flex items-center gap-1.5 text-slate-400 text-sm font-medium group-hover:text-slate-200 transition-colors ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                        {t.common.learnMore}
                        <ArrowRight
                          className={`group-hover:translate-x-1 transition-transform ${dir === 'rtl' ? 'rotate-180' : ''}`}
                          size={15}
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-slate-900" dir={dir}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 ${dir === 'rtl' ? 'text-right sm:text-center' : ''}`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-3">
              {faq.heading}
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              {faq.subheading}
            </p>
          </div>
          <div className="space-y-3">
            {faq.items.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden"
                  data-testid={`faq-item-${i + 1}`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    data-testid={`faq-toggle-${i + 1}`}
                    className={`w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-slate-750 transition-colors ${dir === 'rtl' ? 'flex-row-reverse text-right' : ''}`}
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold text-slate-100 leading-snug">
                      {item.q}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`flex-shrink-0 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <div className={`px-6 pb-5 ${dir === 'rtl' ? 'text-right' : ''}`}>
                      <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                        {item.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 sm:p-12 text-center shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {t.home.finalCta.title}
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto leading-relaxed">
              {t.home.finalCta.subtitle}
            </p>
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${dir === 'rtl' ? 'sm:flex-row-reverse' : ''}`}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-final-whatsapp"
                onClick={() => trackEvent('whatsapp_click', { label: 'final_cta', language })}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-green-600 rounded-xl hover:bg-green-500 transition-all shadow-lg w-full sm:w-auto"
              >
                <MessageCircle size={20} />
                {t.home.finalCta.whatsappCta}
              </a>
              <Link
                to="/contact"
                data-testid="link-final-contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-300 bg-slate-700 border border-slate-600 rounded-xl hover:bg-slate-600 hover:text-white transition-all w-full sm:w-auto"
              >
                {t.home.finalCta.contactCta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
