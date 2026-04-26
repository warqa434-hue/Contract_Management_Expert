import { Link } from 'react-router-dom';
import { trackEvent } from '../../lib/analytics';
import { FileText, CheckCircle2, AlertTriangle, ArrowRight, Shield, Eye, FileCheck } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';

export default function HomeBuildersService() {
  const { dir, language } = useLanguage();

  const seo = {
    en: {
      title: 'Contract Review for Home Builders & Villa Owners | UAE',
      description:
        'Expert review of your UAE home-building contract before you sign. BCX identifies hidden costs, risky clauses, and BOQ gaps to protect your investment.',
    },
    ar: {
      title: 'مراجعة العقود لأصحاب الفلل والملاك الأفراد في الإمارات',
      description:
        'مراجعة احترافية لعقد بناء منزلك في الإمارات قبل التوقيع. نحدد التكاليف الخفية والبنود الخطرة وثغرات جداول الكميات لحماية استثمارك.',
    },
  };
  const s = seo[language];

  const content = {
    en: {
      hero: {
        title: 'Contract Review for Home Builders & Individual Owners',
        subtitle: 'Before you sign your home building contract, have an expert review it with you. I help owners understand contract terms and conditions, specifications, BOQ scope, payment terms, obligations, exclusions and risks in plain language.',
      },
      included: {
        heading: "What's Included",
        intro: "A comprehensive review of your contract package to help you understand what you're signing and protect your investment.",
        items: [
          'Line-by-line review of your construction contract',
          'Analysis of specifications and Bill of Quantities (BOQ)',
          'Identification of vague clauses, gaps, and missing items',
          'Risk assessment for cost exposure and payment terms',
          'Review of warranties, insurance, and defect liability provisions',
          'Plain-language summary of your obligations and contractor obligations',
          'Recommendations for amendments or clarifications before signing',
        ],
      },
      warning: {
        heading: 'Why This Matters',
        p1: 'Most homeowners sign construction contracts without fully understanding the cost risks, payment terms, or their own obligations.',
        p2: 'Vague scope definitions, missing BOQ items, and unclear variation clauses can lead to tens of thousands of dirhams in unexpected costs.',
        p3: 'A professional review before signing can save you from costly disputes later.',
      },
      benefits: {
        heading: 'Key Benefits',
        items: [
          { title: 'Avoid Cost Surprises', description: 'Identify hidden costs, unclear scope, and payment risks before you sign' },
          { title: "Know What You're Signing", description: 'Get a clear understanding of your rights, obligations, and risk exposure' },
          { title: 'Sign with Confidence', description: 'Proceed with full knowledge of what the contract commits you to' },
        ],
      },
      process: {
        heading: 'How It Works',
        items: [
          { step: '1', title: 'Submit Your Documents', description: 'Send us your draft contract, specifications, and BOQ (if available)' },
          { step: '2', title: 'Detailed Review', description: 'We review the documents and identify risks, gaps, and areas of concern' },
          { step: '3', title: 'Discussion & Report', description: 'We discuss findings and provide a written summary with recommendations' },
          { step: '4', title: 'Support to Sign', description: 'Optional support to negotiate amendments or clarifications with the contractor' },
        ],
      },
      cta: {
        heading: 'Ready to Review Your Contract?',
        sub: "Don't sign blindly. Get a professional review and understand your contract before you commit.",
        primary: 'Send Your Contract Now',
        secondary: 'Learn About Our Process',
      },
    },
    ar: {
      hero: {
        title: 'مراجعة العقود لأصحاب الفلل والملاك الأفراد',
        subtitle: 'قبل توقيع عقد بناء منزلك أو فيلتك، اطلب من خبير مستقل مراجعته معك. نساعد الملاك على فهم شروط وأحكام العقود والمواصفات ونطاق جداول الكميات وشروط الدفع والالتزامات والاستثناءات والمخاطر بلغة واضحة.',
      },
      included: {
        heading: 'ما يتضمنه الخدمة',
        intro: 'مراجعة شاملة لوثائق عقدك لمساعدتك على فهم ما توقعه وحماية استثمارك.',
        items: [
          'مراجعة سطر بسطر لعقد البناء الخاص بك',
          'تحليل المواصفات وجداول الكميات',
          'تحديد البنود الغامضة والثغرات والعناصر المفقودة',
          'تقييم المخاطر للتعرض للتكاليف وشروط الدفع',
          'مراجعة الضمانات والتأمين وأحكام مسؤولية العيوب',
          'ملخص بلغة بسيطة لالتزاماتك والتزامات المقاول',
          'توصيات بالتعديلات أو التوضيحات قبل التوقيع',
        ],
      },
      warning: {
        heading: 'لماذا هذا مهم',
        p1: 'معظم أصحاب المنازل يوقعون عقود البناء دون فهم كامل لمخاطر التكاليف أو شروط الدفع أو التزاماتهم.',
        p2: 'تعريفات النطاق الغامضة وعناصر جداول الكميات المفقودة وبنود التغيير غير الواضحة قد تؤدي إلى تكاليف غير متوقعة بعشرات الآلاف من الدراهم.',
        p3: 'مراجعة احترافية قبل التوقيع يمكن أن تنقذك من نزاعات مكلفة لاحقاً.',
      },
      benefits: {
        heading: 'المزايا الرئيسية',
        items: [
          { title: 'تجنب مفاجآت التكاليف', description: 'تحديد التكاليف الخفية ونطاق غير الواضح ومخاطر الدفع قبل التوقيع' },
          { title: 'اعرف ما توقعه', description: 'احصل على فهم واضح لحقوقك والتزاماتك وتعرضك للمخاطر' },
          { title: 'وقّع بثقة', description: 'تابع بمعرفة كاملة بما يلزمك به العقد' },
        ],
      },
      process: {
        heading: 'كيف يعمل',
        items: [
          { step: '١', title: 'أرسل وثائقك', description: 'أرسل لنا مسودة العقد والمواصفات وجداول الكميات (إن وجدت)' },
          { step: '٢', title: 'مراجعة تفصيلية', description: 'نراجع الوثائق ونحدد المخاطر والثغرات ومجالات القلق' },
          { step: '٣', title: 'المناقشة والتقرير', description: 'نناقش النتائج ونقدم ملخصاً مكتوباً مع التوصيات' },
          { step: '٤', title: 'دعم التوقيع', description: 'دعم اختياري للتفاوض على التعديلات أو التوضيحات مع المقاول' },
        ],
      },
      cta: {
        heading: 'هل أنت مستعد لمراجعة عقدك؟',
        sub: 'لا توقع بشكل أعمى. احصل على مراجعة احترافية وافهم عقدك قبل الالتزام.',
        primary: 'أرسل عقدك الآن',
        secondary: 'تعرف على طريقة عملنا',
      },
    },
  };

  const c = content[language];
  const benefitIcons = [Shield, Eye, FileCheck];

  return (
    <div>
      <SEOHead title={s.title} description={s.description} path="/HOWWEPROTECTYOU/home-builders" lang={language} />
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <FileText className="text-white" size={40} />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center">
            {c.hero.title}
          </h1>
          <p className="text-xl text-slate-200 text-center max-w-3xl mx-auto leading-relaxed">
            {c.hero.subtitle}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-6">
                {c.included.heading}
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                {c.included.intro}
              </p>
              <div className="space-y-4">
                {c.included.items.map((item, index) => (
                  <div key={index} className={`flex items-start ${dir === 'rtl' ? 'space-x-reverse' : ''} space-x-3`}>
                    <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-300 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-950 border-l-4 border-amber-500 p-8 rounded-r-xl">
              <div className={`flex items-start ${dir === 'rtl' ? 'space-x-reverse' : ''} space-x-4`}>
                <AlertTriangle className="text-amber-500 flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-4">
                    {c.warning.heading}
                  </h3>
                  <div className="space-y-3 text-slate-300 leading-relaxed">
                    <p>{c.warning.p1}</p>
                    <p>{c.warning.p2}</p>
                    <p className="font-semibold text-slate-100">{c.warning.p3}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-12 text-center">
            {c.benefits.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {c.benefits.items.map((benefit, index) => {
              const Icon = benefitIcons[index];
              return (
                <div key={index} className="bg-slate-800 p-8 rounded-xl shadow-md border border-slate-700">
                  <div className="w-14 h-14 bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="text-slate-300" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-3">{benefit.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-12 text-center">
            {c.process.heading}
          </h2>
          <div className="space-y-8">
            {c.process.items.map((item, index) => (
              <div key={index} className={`flex items-start ${dir === 'rtl' ? 'space-x-reverse' : ''} space-x-6`}>
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 text-white rounded-xl flex items-center justify-center text-2xl font-bold shadow-lg">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-semibold text-slate-100 mb-2">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">{c.cta.heading}</h2>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed">{c.cta.sub}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              onClick={() => trackEvent('cta_click', { label: 'home_builders_primary' })}
              className={`inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-900 bg-white rounded-lg hover:bg-slate-100 transition-all transform hover:scale-105 shadow-lg`}
            >
              {c.cta.primary}
              <ArrowRight className={`${dir === 'rtl' ? 'mr-2 rotate-180' : 'ml-2'}`} size={20} />
            </Link>
            <Link
              to="/how-we-work"
              onClick={() => trackEvent('cta_click', { label: 'home_builders_secondary' })}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-slate-700 rounded-lg hover:bg-slate-600 transition-all transform hover:scale-105 shadow-lg border border-slate-600"
            >
              {c.cta.secondary}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
