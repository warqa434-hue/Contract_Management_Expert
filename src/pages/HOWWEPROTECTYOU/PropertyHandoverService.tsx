import { Link } from 'react-router-dom';
import { trackEvent } from '../../lib/analytics';
import { Key, CheckCircle2, AlertTriangle, ArrowRight, Clock, HeartPulse, Shield } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';

export default function PropertyHandoverService() {
  const { dir, language } = useLanguage();

  const seo = {
    en: {
      title: 'Expert Property Handover Management | UAE',
      description:
        'Professional property handover inspection and snagging for UAE residential projects. Ensure your property meets contract standards before you take the keys.',
    },
    ar: {
      title: 'إدارة تسليم العقارات بشكل احترافي في الإمارات',
      description:
        'فحص احترافي لتسليم العقارات والعيوب في المشاريع السكنية بالإمارات. تأكد من أن عقارك يستوفي معايير العقد قبل استلام المفاتيح.',
    },
  };
  const s = seo[language];

  const content = {
    en: {
      hero: {
        title: 'Expert Property Handover Management',
        subtitle: 'Professional representation for property owners during the final transition from contractor to owner. I ensure your investment meets every contractual standard before you sign off.',
      },
      included: {
        heading: "Key Services Included",
        intro: "A systematic, expert-led inspection and documentation process so you receive exactly what you paid for — nothing less.",
        items: [
          'Detailed Snagging: Systematic inspection to identify construction defects or finishing flaws',
          'Contract Compliance: Verifying that all materials and layouts match the agreed specifications',
          'Documentation Review: Ensuring all warranties, operation manuals, and permits are handed over correctly',
          'Issue Resolution: Managing the rectification process with the contractor on your behalf',
          'Final Walkthrough: Conducting the ultimate inspection to confirm all snags are resolved',
        ],
      },
      warning: {
        heading: 'Why This Matters',
        p1: 'Signing off too early can waive your contractual right to demand repairs from the contractor.',
        p2: 'Hidden defects discovered after handover — damp, cracks, faulty MEP — become your financial responsibility alone.',
        p3: 'Professional representation at handover is the last line of defence for your investment.',
      },
      benefits: {
        heading: 'Why Choose Professional Representation?',
        items: [
          { title: 'Save Time', description: 'I handle all back-and-forth communication with site engineers on your behalf' },
          { title: 'Reduce Stress', description: 'Avoid the technical headache of spotting hidden building issues yourself' },
          { title: 'Protect Value', description: 'Ensure your property is in perfect condition before accepting it, preventing future repair costs' },
        ],
      },
      process: {
        heading: 'How It Works',
        items: [
          { step: '1', title: 'Pre-Handover Briefing', description: 'We review your contract and specifications to understand exactly what the contractor is obligated to deliver' },
          { step: '2', title: 'Snagging Inspection', description: 'Systematic on-site walkthrough to document all defects, unfinished items, and specification non-compliances' },
          { step: '3', title: 'Contractor Engagement', description: 'We issue a formal snagging report and manage the rectification process directly with the contractor' },
          { step: '4', title: 'Final Sign-Off', description: 'Once all issues are resolved, we conduct the final walkthrough and confirm your property is ready to accept' },
        ],
      },
      cta: {
        heading: 'Ready for Your Property Handover?',
        sub: "Don't sign off until every defect is resolved. Get professional representation and protect your investment at the final stage.",
        primary: 'Book a Handover Consultation',
        secondary: 'Learn About Our Process',
      },
    },
    ar: {
      hero: {
        title: 'إدارة تسليم العقارات باحترافية',
        subtitle: 'تمثيل احترافي لأصحاب العقارات خلال مرحلة التسليم النهائي من المقاول إلى المالك. أضمن أن استثمارك يلبي كل المعايير التعاقدية قبل توقيعك على التسليم.',
      },
      included: {
        heading: 'الخدمات الرئيسية المشمولة',
        intro: 'عملية فحص وتوثيق منهجية يقودها خبراء لضمان استلامك ما دفعت ثمنه بالضبط — لا أقل من ذلك.',
        items: [
          'الكشف التفصيلي: فحص منهجي لتحديد عيوب البناء أو قصور التشطيب',
          'الامتثال التعاقدي: التحقق من مطابقة جميع المواد والتخطيطات للمواصفات المتفق عليها',
          'مراجعة الوثائق: التأكد من تسليم جميع الضمانات ودلائل التشغيل والتصاريح بشكل صحيح',
          'حل المشكلات: إدارة عملية الإصلاح مع المقاول نيابةً عنك',
          'الجولة الأخيرة: إجراء الفحص النهائي للتأكد من حل جميع العيوب',
        ],
      },
      warning: {
        heading: 'لماذا هذا مهم',
        p1: 'التوقيع المبكر على التسليم قد يُسقط حقك التعاقدي في المطالبة بالإصلاحات من المقاول.',
        p2: 'العيوب الخفية التي تُكتشف بعد التسليم — كالرطوبة والشقوق وأعطال الميكانيكا والكهرباء — تصبح مسؤوليتك المالية وحدك.',
        p3: 'التمثيل الاحترافي عند التسليم هو خط الدفاع الأخير لحماية استثمارك.',
      },
      benefits: {
        heading: 'لماذا تختار التمثيل الاحترافي؟',
        items: [
          { title: 'وفّر وقتك', description: 'أتولى جميع التواصل مع المهندسين في الموقع بدلاً عنك' },
          { title: 'تجنب التعقيدات', description: 'ابتعد عن صداع اكتشاف العيوب الإنشائية الخفية بنفسك' },
          { title: 'احمِ قيمة عقارك', description: 'تأكد أن العقار في حالة مثالية قبل قبوله، لتجنب تكاليف الإصلاح المستقبلية' },
        ],
      },
      process: {
        heading: 'كيف يعمل',
        items: [
          { step: '١', title: 'إحاطة ما قبل التسليم', description: 'نراجع عقدك ومواصفاتك لفهم ما التزم المقاول بتسليمه بالضبط' },
          { step: '٢', title: 'فحص العيوب', description: 'جولة ميدانية منهجية لتوثيق جميع العيوب والأعمال غير المكتملة وحالات عدم مطابقة المواصفات' },
          { step: '٣', title: 'التواصل مع المقاول', description: 'نُصدر تقريراً رسمياً بالعيوب وندير عملية التصحيح مباشرةً مع المقاول' },
          { step: '٤', title: 'التوقيع النهائي', description: 'بعد حل جميع المشكلات، نُجري الجولة الأخيرة ونؤكد جاهزية عقارك للاستلام' },
        ],
      },
      cta: {
        heading: 'هل أنت مستعد لتسليم عقارك؟',
        sub: 'لا توقع على التسليم حتى يتم حل كل العيوب. احصل على تمثيل احترافي لحماية استثمارك في المرحلة الأخيرة.',
        primary: 'احجز استشارة للتسليم',
        secondary: 'تعرف على طريقة عملنا',
      },
    },
  };

  const c = content[language];
  const benefitIcons = [Clock, HeartPulse, Shield];

  return (
    <div>
      <SEOHead title={s.title} description={s.description} path="/HOWWEPROTECTYOU/property-handover" lang={language} />
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Key className="text-white" size={40} />
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
              onClick={() => trackEvent('cta_click', { label: 'property_handover_primary' })}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-900 bg-white rounded-lg hover:bg-slate-100 transition-all transform hover:scale-105 shadow-lg"
            >
              {c.cta.primary}
              <ArrowRight className={`${dir === 'rtl' ? 'mr-2 rotate-180' : 'ml-2'}`} size={20} />
            </Link>
            <Link
              to="/how-we-work"
              onClick={() => trackEvent('cta_click', { label: 'property_handover_secondary' })}
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
