import { Link } from 'react-router-dom';
import { Building2, CheckCircle2, ArrowRight, TrendingDown, Users, FileWarning, ClipboardCheck } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';

export default function DevelopersSMEsService() {
  const { dir, language } = useLanguage();

  const seo = {
    en: {
      title: 'Contract & Tender Review for Developers | UAE',
      description:
        'Pre-award and post-award contract review for UAE developers and SMEs. BCX identifies risk allocations, ambiguous clauses, and cost exposures before you commit.',
    },
    ar: {
      title: 'مراجعة العقود والمناقصات للمطورين وأصحاب المشاريع في الإمارات',
      description:
        'مراجعة العقود قبل وبعد الترسية للمطورين وأصحاب المشاريع في الإمارات. نحدد توزيع المخاطر والبنود الغامضة والتكاليف المخفية قبل الالتزام.',
    },
  };
  const s = seo[language];

  const content = {
    en: {
      hero: {
        title: 'Contract & Tender Review for Developers',
        subtitle: 'Structured review of tender documents, contract conditions, specifications, and BOQ to identify risks, gaps, ambiguities and cost exposures before contract award.',
      },
      included: {
        heading: "What's Included",
        intro: 'A comprehensive pre-award or post-award review of your contract package to identify risks, ambiguities, and opportunities before you commit or mobilize.',
        items: [
          'Pre-award contract review (conditions, specifications, BOQ, drawings)',
          'Risk and opportunity analysis before tender submission',
          'Review of contract amendments, addenda, and tender clarifications',
          'Assessment of dispute resolution mechanisms and liability caps',
          'Coordination requirements, insurance, and bonds review',
          'Identification of vague or unbalanced clauses in employer-drafted contracts',
          'Written summary with strategic recommendations for negotiation',
        ],
      },
      whoFor: {
        heading: 'Who This Is For',
        items: [
          { label: 'Developers:', desc: 'Owners and employers preparing to award contracts for commercial or residential projects' },
          { label: 'Development Managers:', desc: 'Teams coordinating multiple packages and needing tighter risk control before award' },
          { label: 'Investor-Led Projects:', desc: 'Private investors and family offices requiring an independent contract risk review' },
        ],
      },
      benefits: {
        items: [
          { title: 'Reduce Claims & Variations', description: 'Identify ambiguities and gaps in the contract before construction starts' },
          { title: 'Stronger Negotiation Position', description: 'Enter commercial discussions armed with a detailed understanding of risk allocation' },
          { title: 'Avoid Costly Mistakes', description: 'Catch unbalanced clauses, missing items, and risk transfer issues early' },
          { title: 'Better Project Delivery', description: 'Start with a clear, complete contract foundation that supports smooth execution' },
        ],
      },
      approach: {
        heading: 'Our Approach',
        items: [
          { title: 'Pre-Tender Review', description: "We analyze the full contract package (drawings, specs, BOQ, general and special conditions) before you submit your bid – helping you understand what you're pricing and what risks you're accepting." },
          { title: 'Post-Award / Pre-Execution', description: 'After contract award, We help review final contract documents, coordinate startup requirements, and set up contract administration systems.' },
          { title: 'Commercial & Technical Alignment', description: 'We work at the intersection of commercial and technical delivery – making sure your contract, design, and execution strategy are aligned.' },
        ],
        timeline: 'Typical Timeline',
        timelineDesc: 'Most contract reviews are completed within 3-7 business days depending on project size and complexity.',
      },
      cta: {
        heading: 'Get a Clear Understanding Before You Sign',
        sub: "Whether you're about to bid, negotiate, or sign – get expert contract review to identify risks and strengthen your position.",
        primary: 'Request a Review',
        secondary: 'View Project Examples',
      },
    },
    ar: {
      hero: {
        title: 'مراجعة العقود والمناقصات للمطورين وأصحاب المشاريع',
        subtitle: 'مراجعة منظمة لوثائق المناقصات وشروط العقود والمواصفات وجداول الكميات لتحديد المخاطر والفجوات والغموض والتقلبات المخفية في التكاليف قبل توقيع العقد.',
      },
      included: {
        heading: 'ما يتضمنه الخدمة',
        intro: 'مراجعة شاملة قبل أو بعد توقيع العقد لتحديد المخاطر والغموض والفرص قبل الالتزام أو التعبئة.',
        items: [
          'مراجعة العقد قبل التوقيع (الشروط والمواصفات وجداول الكميات والرسومات)',
          'تحليل المخاطر والفرص قبل تقديم العطاء',
          'مراجعة تعديلات العقود والملاحق وتوضيحات المناقصة',
          'تقييم آليات تسوية النزاعات وحدود المسؤولية',
          'مراجعة متطلبات التنسيق والتأمين والضمانات',
          'تحديد البنود الغامضة أو غير المتوازنة في العقود التي يصيغها صاحب العمل',
          'ملخص مكتوب مع توصيات استراتيجية للتفاوض',
        ],
      },
      whoFor: {
        heading: 'لمن هذه الخدمة',
        items: [
          { label: 'المطورون:', desc: 'الملاك وأصحاب العمل الذين يستعدون لإرساء عقود مشاريع تجارية أو سكنية' },
          { label: 'مديرو التطوير:', desc: 'فرق تنسق حزمًا متعددة وتحتاج إلى ضبط أكثر صرامة للمخاطر قبل الترسية' },
          { label: 'المشاريع بقيادة المستثمرين:', desc: 'المستثمرون الخاصون والمكاتب العائلية التي تتطلب مراجعة مستقلة لمخاطر العقود' },
        ],
      },
      benefits: {
        items: [
          { title: 'تقليل المطالبات والتغييرات', description: 'تحديد الغموض والثغرات في العقد قبل بدء البناء' },
          { title: 'موقف تفاوضي أقوى', description: 'الدخول في المناقشات التجارية مسلحاً بفهم تفصيلي لتوزيع المخاطر' },
          { title: 'تجنب الأخطاء المكلفة', description: 'اكتشاف البنود غير المتوازنة والعناصر المفقودة وقضايا نقل المخاطر مبكراً' },
          { title: 'تسليم مشروع أفضل', description: 'ابدأ بأساس عقد واضح ومكتمل يدعم التنفيذ السلس' },
        ],
      },
      approach: {
        heading: 'نهجنا',
        items: [
          { title: 'المراجعة قبل المناقصة', description: 'نحلل حزمة العقود الكاملة (الرسومات والمواصفات وجداول الكميات والشروط العامة والخاصة) قبل تقديم عطائك - لمساعدتك على فهم ما تسعر عليه وما تقبله من مخاطر.' },
          { title: 'ما بعد الترسية / قبل التنفيذ', description: 'بعد إرساء العقد، نساعد في مراجعة وثائق العقد النهائية وتنسيق متطلبات البدء وإعداد أنظمة إدارة العقود.' },
          { title: 'التوافق التجاري والفني', description: 'نعمل عند تقاطع التسليم التجاري والفني - للتأكد من توافق عقدك وتصميمك واستراتيجية تنفيذك.' },
        ],
        timeline: 'الجدول الزمني المعتاد',
        timelineDesc: 'تُنجز معظم مراجعات العقود في غضون 3-7 أيام عمل حسب حجم المشروع وتعقيده.',
      },
      cta: {
        heading: 'احصل على فهم واضح قبل التوقيع',
        sub: 'سواء كنت على وشك تقديم عطاء أو التفاوض أو التوقيع - احصل على مراجعة متخصصة لتحديد المخاطر وتعزيز موقفك.',
        primary: 'اطلب مراجعة',
        secondary: 'عرض أمثلة المشاريع',
      },
    },
  };

  const c = content[language];
  const benefitIcons = [TrendingDown, Users, FileWarning, ClipboardCheck];

  return (
    <div>
      <SEOHead title={s.title} description={s.description} path="/HOWWEPROTECTYOU/developers-smes" lang={language} />
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Building2 className="text-white" size={40} />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center">{c.hero.title}</h1>
          <p className="text-xl text-slate-200 text-center max-w-3xl mx-auto leading-relaxed">{c.hero.subtitle}</p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-6">{c.included.heading}</h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">{c.included.intro}</p>
              <div className="space-y-4">
                {c.included.items.map((item, index) => (
                  <div key={index} className={`flex items-start ${dir === 'rtl' ? 'space-x-reverse' : ''} space-x-3`}>
                    <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-300 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold text-slate-100 mb-6">{c.whoFor.heading}</h3>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                {c.whoFor.items.map((item, i) => (
                  <p key={i}><strong className="text-slate-100">{item.label}</strong> {item.desc}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.benefits.items.map((benefit, index) => {
              const Icon = benefitIcons[index];
              return (
                <div key={index} className="bg-slate-800 p-6 rounded-xl shadow-md border border-slate-700">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-slate-300" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-100 mb-2">{benefit.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-12 text-center">{c.approach.heading}</h2>
          <div className="space-y-6">
            {c.approach.items.map((item, index) => (
              <div key={index} className="bg-slate-800 p-8 rounded-xl shadow-md border border-slate-700">
                <h3 className="text-xl font-semibold text-slate-100 mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-gradient-to-br from-slate-700 to-slate-800 text-white p-8 rounded-xl border border-slate-600">
            <h3 className="text-2xl font-bold mb-4 text-center">{c.approach.timeline}</h3>
            <p className="text-slate-200 text-center leading-relaxed">{c.approach.timelineDesc}</p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-6">{c.cta.heading}</h2>
          <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto">{c.cta.sub}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg hover:from-slate-500 hover:to-slate-600 transition-all transform hover:scale-105 shadow-lg"
            >
              {c.cta.primary}
              <ArrowRight className={`${dir === 'rtl' ? 'mr-2 rotate-180' : 'ml-2'}`} size={20} />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-200 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all border border-slate-600 shadow-md"
            >
              {c.cta.secondary}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
