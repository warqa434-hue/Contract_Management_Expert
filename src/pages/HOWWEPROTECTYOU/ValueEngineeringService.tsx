import { Link } from 'react-router-dom';
import { TrendingDown, CheckCircle2, ArrowRight, BarChart3, Zap, Target, DollarSign } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';

export default function ValueEngineeringService() {
  const { dir, language } = useLanguage();

  const seo = {
    en: {
      title: 'Value Engineering & Cost Optimization | UAE Construction',
      description:
        'Unlock 15–25% cost savings on your UAE construction project without compromising quality. BCX provides expert value engineering, BOQ optimization, and contract restructuring.',
    },
    ar: {
      title: 'هندسة القيمة وتحسين التكاليف في مشاريع البناء بالإمارات',
      description:
        'حقق وفورات 15-25٪ في تكاليف مشروع البناء في الإمارات دون المساس بالجودة. BCX يقدم هندسة القيمة وتحسين جداول الكميات وإعادة هيكلة العقود.',
    },
  };
  const s = seo[language];

  const content = {
    en: {
      hero: {
        title: 'Value Engineering & Cost Optimization',
        subtitle: 'Unlock 15–25% cost savings without compromising quality or safety through strategic contract restructuring, specification optimization, and innovative sourcing.',
      },
      included: {
        heading: "What's Included",
        intro: 'Comprehensive value engineering review to identify and quantify cost reduction opportunities while maintaining project quality and functionality.',
        items: [
          'Contract and specification deep-dive to identify redundancies and over-specifications',
          'Market and sourcing review exploring alternative materials and procurement strategies',
          'Scope optimization challenging non-value-adding elements without reducing functionality',
          'Risk reallocation restructuring contract risk to reduce contingency and pricing buffers',
          'Innovation and technology proposals for modern methods and tech-enabled processes',
          'Cost-benefit analysis with prioritized recommendations and implementation roadmaps',
          'Revised specifications or BOQ reflecting approved value engineering changes',
        ],
      },
      whoFor: {
        heading: 'Who This Is For',
        items: [
          { label: 'Homeowners:', desc: 'Looking to optimize villa budgets before finalizing contracts' },
          { label: 'Developers:', desc: 'Seeking strategic cost optimization across design, procurement, and delivery' },
        ],
      },
      benefits: {
        items: [
          { title: '15-25% Cost Savings', description: 'Proven track record of delivering significant cost reductions without compromising quality' },
          { title: 'Strategic Optimization', description: 'Restructure contracts and specifications to unlock hidden cost savings' },
          { title: 'Innovation & Technology', description: 'Introduce modern methods, modular solutions, and efficiency improvements' },
          { title: 'Risk-Adjusted Pricing', description: 'Reduce contingencies and pricing buffers through smarter risk allocation' },
        ],
      },
      approach: {
        heading: 'Our Approach',
        items: [
          { title: 'For Pre-Tender Projects', description: 'Analyze the project brief and proposed specifications before procurement. Identify optimization opportunities and challenge scope assumptions before budgets and contracts are locked in.' },
          { title: 'For Tender Evaluation', description: 'Review bids and contracts post-award, identifying cost reduction opportunities without re-tendering. Negotiate alternative solutions or staged implementation to reduce initial capital outlay.' },
          { title: 'For Ongoing Projects', description: 'Identify and implement value engineering during design development or early construction, when changes are still cost-effective.' },
        ],
        timelineTitle: 'Typical Value Engineering Engagement',
        timelineDesc: 'Most value engineering reviews are completed within 2-4 weeks depending on project scope and complexity. Costs typically pay for themselves within weeks through identified savings.',
      },
      cta: {
        heading: 'Ready to Optimize Your Project Costs?',
        sub: 'Get expert value engineering analysis to unlock cost savings without compromising quality or schedule.',
        primary: 'Start a Review',
        secondary: 'Learn About Our Process',
      },
    },
    ar: {
      hero: {
        title: 'هندسة القيمة وتحسين التكاليف',
        subtitle: 'حقق وفورات في التكاليف تتراوح بين 15-25٪ دون المساس بالجودة أو السلامة من خلال إعادة الهيكلة الاستراتيجية للعقود وتحسين المواصفات والتوريد المبتكر.',
      },
      included: {
        heading: 'ما يتضمنه الخدمة',
        intro: 'مراجعة شاملة لهندسة القيمة لتحديد وتحديد فرص خفض التكاليف مع الحفاظ على جودة المشروع وأداء وظائفه.',
        items: [
          'التعمق في العقد والمواصفات لتحديد الازدواجية والمواصفات الزائدة',
          'مراجعة السوق والتوريد واستكشاف مواد بديلة واستراتيجيات الشراء',
          'تحسين النطاق بتحدي العناصر التي لا تضيف قيمة دون تقليل الوظائف',
          'إعادة توزيع المخاطر بإعادة هيكلة مخاطر العقد لتقليل الطوارئ وهوامش التسعير',
          'مقترحات الابتكار والتكنولوجيا للأساليب الحديثة والعمليات التقنية',
          'تحليل التكلفة والفائدة مع توصيات ذات أولوية وخرائط طريق التنفيذ',
          'مواصفات أو جداول كميات منقحة تعكس تغييرات هندسة القيمة المعتمدة',
        ],
      },
      whoFor: {
        heading: 'لمن هذه الخدمة',
        items: [
          { label: 'أصحاب المنازل:', desc: 'الراغبون في تحسين ميزانيات الفلل قبل إتمام العقود' },
          { label: 'المطورون:', desc: 'الساعون إلى تحسين التكاليف الاستراتيجية عبر التصميم والمشتريات والتسليم' },
        ],
      },
      benefits: {
        items: [
          { title: 'وفورات 15-25٪ في التكاليف', description: 'سجل حافل موثق في تحقيق تخفيضات كبيرة في التكاليف دون المساس بالجودة' },
          { title: 'تحسين استراتيجي', description: 'إعادة هيكلة العقود والمواصفات لفتح وفورات التكاليف الخفية' },
          { title: 'الابتكار والتكنولوجيا', description: 'تقديم أساليب حديثة وحلول معيارية وتحسينات في الكفاءة' },
          { title: 'تسعير معدّل للمخاطر', description: 'تقليل الطوارئ وهوامش التسعير من خلال توزيع أذكى للمخاطر' },
        ],
      },
      approach: {
        heading: 'نهجنا',
        items: [
          { title: 'للمشاريع قبل المناقصة', description: 'تحليل المشروع التفصيلي والمواصفات المقترحة قبل الشراء. تحديد فرص التحسين وتحدي افتراضات النطاق قبل قفل الميزانيات والعقود.' },
          { title: 'لتقييم المناقصة', description: 'مراجعة العروض والعقود بعد الترسية، وتحديد فرص خفض التكاليف دون إعادة المناقصة. التفاوض على حلول بديلة أو تنفيذ مرحلي لتقليل رأس المال الأولي.' },
          { title: 'للمشاريع الجارية', description: 'تحديد وتطبيق هندسة القيمة أثناء تطوير التصميم أو البناء المبكر، عندما لا تزال التغييرات فعالة من حيث التكلفة.' },
        ],
        timelineTitle: 'مشاركة هندسة القيمة المعتادة',
        timelineDesc: 'تُنجز معظم مراجعات هندسة القيمة في غضون 2-4 أسابيع حسب نطاق المشروع وتعقيده. تتكفل التكاليف عادةً بنفسها في غضون أسابيع من خلال الوفورات المحددة.',
      },
      cta: {
        heading: 'هل أنت مستعد لتحسين تكاليف مشروعك؟',
        sub: 'احصل على تحليل متخصص لهندسة القيمة لفتح وفورات التكاليف دون المساس بالجودة أو الجدول الزمني.',
        primary: 'ابدأ مراجعة',
        secondary: 'تعرف على طريقة عملنا',
      },
    },
  };

  const c = content[language];
  const benefitIcons = [DollarSign, Target, Zap, BarChart3];

  return (
    <div>
      <SEOHead title={s.title} description={s.description} path="/HOWWEPROTECTYOU/value-engineering" lang={language} />
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <TrendingDown className="text-white" size={40} />
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
            <h3 className="text-2xl font-bold mb-4 text-center">{c.approach.timelineTitle}</h3>
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
              to="/how-we-work"
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
