import { Link } from 'react-router-dom';
import { ClipboardCheck, CheckCircle2, ArrowRight, Calendar, FileText, Users, Clock } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';

export default function ProjectManagementService() {
  const { dir, language } = useLanguage();

  const seo = {
    en: {
      title: 'Project & Contract Management Support | UAE Construction',
      description:
        'Flexible, part-time project and contract management support for UAE homeowners and developers. Keep your construction project on time and contractually protected.',
    },
    ar: {
      title: 'دعم إدارة المشاريع والعقود في الإمارات',
      description:
        'دعم مرن بدوام جزئي لإدارة المشاريع والعقود لأصحاب المنازل والمطورين في الإمارات. حافظ على مشروعك في الموعد ومحمياً تعاقدياً.',
    },
  };
  const s = seo[language];

  const content = {
    en: {
      hero: {
        title: 'Project & Contract Management Support',
        subtitle: 'Part-time or task-based project and contract management support for homeowners and developers - keeping your project on time, on budget, and contractually protected.',
      },
      included: {
        heading: "What's Included",
        intro: 'Flexible support services tailored to your project phase and needs. From contract setup to handover, we can step in where you need help most.',
        items: [
          'Contract administration and correspondence management',
          'Review and processing of variations, instructions, and RFIs',
          'Preparation and review of monthly progress claims',
          'Meeting facilitation and documentation (site meetings, coordination meetings)',
          'Document control and filing systems setup',
          'Schedule monitoring and extension of time assessment',
          'Change management and approval workflows',
          'Handover preparation and defect management',
        ],
      },
      benefits: {
        items: [
          { title: 'Flexible Support', description: 'Part-time, task-based, or on-call support that fits your budget and project needs' },
          { title: 'Contract Compliance', description: 'Ensure all variations, claims, and instructions are properly documented and contractually sound' },
          { title: 'Neutral Third Party', description: 'Independent perspective that protects homeowner and developer interests across project stakeholders' },
          { title: 'Stay On Track', description: 'Keep your project moving forward with clear documentation and timely decision-making' },
        ],
      },
      whoFor: {
        heading: 'Who This Service Is For',
        groups: [
          {
            title: 'Homeowners & Developers',
            description: 'You have a project underway but lack in-house project management or contract administration expertise.',
            examplesLabel: 'Examples:',
            examples: ['Homeowners building villas', 'First-time developers', 'Investors overseeing remote projects'],
          },
          {
            title: 'Private Development Teams',
            description: 'You need support managing contract obligations, tracking variations, and protecting budget outcomes.',
            examplesLabel: 'Examples:',
            examples: ['Owner-side PM teams', 'Family office projects', 'Lean in-house delivery teams'],
          },
        ],
      },
      approach: {
        heading: 'How We Support Your Project',
        sub: 'We work with your existing team as an independent resource – filling gaps, supporting peak periods, or handling specialized contract tasks that require focused expertise.',
        items: [
          { title: 'Integrated Support', description: 'We work alongside your existing delivery team - not replacing them, but representing your interests by filling specific gaps in contract knowledge or capacity.' },
          { title: 'Scalable Engagement', description: 'Start with a specific task or challenge, then scale up or down based on project needs and budget.' },
          { title: 'Focus on Documentation', description: 'Good contract management is about documentation. We ensure all instructions, variations, claims, and decisions are properly recorded and contractually sound.' },
        ],
        engagementTitle: 'Engagement Models',
        engagement: [
          { label: 'Part-Time Support:', desc: 'Regular weekly or bi-weekly commitment for ongoing projects' },
          { label: 'Task-Based:', desc: 'Specific deliverables like variation reviews, claim preparation, or meeting support' },
          { label: 'On-Call Advisory:', desc: 'Available for urgent questions or document review as needed' },
        ],
      },
      cta: {
        heading: 'Need Project Support?',
        sub: 'Get flexible, expert project and contract management support without the overhead of a full-time hire.',
        primary: 'Discuss Your Project',
        secondary: 'Learn About Our Process',
      },
    },
    ar: {
      hero: {
        title: 'دعم إدارة المشاريع والعقود',
        subtitle: 'دعم إدارة المشاريع والعقود بدوام جزئي أو قائم على المهام لأصحاب المنازل والمطورين - للحفاظ على مشروعك في الموعد وفي الميزانية ومحمياً تعاقدياً.',
      },
      included: {
        heading: 'ما يتضمنه الخدمة',
        intro: 'خدمات دعم مرنة مصممة وفق مرحلة مشروعك واحتياجاتك. من إعداد العقود حتى التسليم، يمكننا التدخل حيث تحتاج المساعدة أكثر.',
        items: [
          'إدارة العقود والمراسلات',
          'مراجعة ومعالجة التغييرات والتعليمات وطلبات المعلومات',
          'إعداد ومراجعة مطالبات التقدم الشهرية',
          'تيسير الاجتماعات وتوثيقها (اجتماعات الموقع واجتماعات التنسيق)',
          'إعداد أنظمة ضبط الوثائق والحفظ',
          'مراقبة الجدول الزمني وتقييم تمديد الوقت',
          'إدارة التغييرات وسير عمل الموافقة',
          'إعداد التسليم وإدارة العيوب',
        ],
      },
      benefits: {
        items: [
          { title: 'دعم مرن', description: 'دعم بدوام جزئي أو قائم على المهام أو عند الطلب يناسب ميزانيتك واحتياجات مشروعك' },
          { title: 'الامتثال التعاقدي', description: 'ضمان توثيق جميع التغييرات والمطالبات والتعليمات بشكل صحيح وسليم تعاقدياً' },
          { title: 'طرف محايد', description: 'منظور مستقل يحمي مصالح صاحب المنزل والمطور عبر أصحاب المصلحة في المشروع' },
          { title: 'ابقَ على المسار', description: 'حافظ على تقدم مشروعك بوثائق واضحة واتخاذ قرارات في الوقت المناسب' },
        ],
      },
      whoFor: {
        heading: 'لمن هذه الخدمة',
        groups: [
          {
            title: 'أصحاب المنازل والمطورون',
            description: 'لديك مشروع جارٍ ولكن تفتقر إلى خبرة إدارة المشاريع أو إدارة العقود الداخلية.',
            examplesLabel: 'أمثلة:',
            examples: ['أصحاب المنازل الذين يبنون فللاً', 'المطورون لأول مرة', 'المستثمرون الذين يشرفون على مشاريع عن بُعد'],
          },
          {
            title: 'فرق التطوير الخاصة',
            description: 'تحتاج إلى دعم في إدارة الالتزامات التعاقدية وتتبع التغييرات وحماية نتائج الميزانية.',
            examplesLabel: 'أمثلة:',
            examples: ['فرق إدارة المشاريع من جانب المالك', 'مشاريع مكاتب العائلة', 'فرق التسليم الداخلية الرشيقة'],
          },
        ],
      },
      approach: {
        heading: 'كيف ندعم مشروعك',
        sub: 'نعمل مع فريقك الموجود كمورد مستقل - لسد الثغرات ودعم فترات الذروة أو التعامل مع مهام العقود المتخصصة التي تتطلب خبرة متركزة.',
        items: [
          { title: 'دعم متكامل', description: 'نعمل جنباً إلى جنب مع فريق التسليم الموجود لديك - لا نحل محله، بل نمثل مصالحك بسد ثغرات محددة في معرفة العقود أو الطاقة.' },
          { title: 'تعاقد قابل للتوسع', description: 'ابدأ بمهمة أو تحدٍّ محدد، ثم وسّع أو قلّص بناءً على احتياجات المشروع والميزانية.' },
          { title: 'التركيز على التوثيق', description: 'إدارة العقود الجيدة تتعلق بالتوثيق. نضمن تسجيل جميع التعليمات والتغييرات والمطالبات والقرارات بشكل صحيح وسليم تعاقدياً.' },
        ],
        engagementTitle: 'نماذج التعاقد',
        engagement: [
          { label: 'الدعم بدوام جزئي:', desc: 'التزام أسبوعي أو نصف أسبوعي منتظم للمشاريع المستمرة' },
          { label: 'قائم على المهام:', desc: 'تسليمات محددة مثل مراجعات التغييرات أو إعداد المطالبات أو دعم الاجتماعات' },
          { label: 'استشارة عند الطلب:', desc: 'متاح للأسئلة العاجلة أو مراجعة الوثائق حسب الحاجة' },
        ],
      },
      cta: {
        heading: 'هل تحتاج دعم مشروع؟',
        sub: 'احصل على دعم مرن ومتخصص في إدارة المشاريع والعقود دون تكاليف توظيف بدوام كامل.',
        primary: 'ناقش مشروعك',
        secondary: 'تعرف على طريقة عملنا',
      },
    },
  };

  const c = content[language];
  const benefitIcons = [Clock, FileText, Users, Calendar];

  return (
    <div>
      <SEOHead title={s.title} description={s.description} path="/HOWWEPROTECTYOU/project-management" lang={language} />
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <ClipboardCheck className="text-white" size={40} />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center">{c.hero.title}</h1>
          <p className="text-xl text-slate-200 text-center max-w-3xl mx-auto leading-relaxed">{c.hero.subtitle}</p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-6 text-center">{c.included.heading}</h2>
          <p className="text-lg text-slate-400 mb-12 text-center max-w-3xl mx-auto leading-relaxed">{c.included.intro}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {c.included.items.map((item, index) => (
              <div key={index} className={`flex items-start ${dir === 'rtl' ? 'space-x-reverse' : ''} space-x-3 bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-700`}>
                <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={20} />
                <span className="text-slate-300 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.benefits.items.map((benefit, index) => {
              const Icon = benefitIcons[index];
              return (
                <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-white" size={24} />
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-12 text-center">{c.whoFor.heading}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {c.whoFor.groups.map((audience, index) => (
              <div key={index} className="bg-slate-800 p-8 rounded-xl shadow-md border border-slate-700">
                <h3 className="text-xl font-semibold text-slate-100 mb-4">{audience.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-6">{audience.description}</p>
                <div className="border-t border-slate-700 pt-4">
                  <p className="text-sm font-semibold text-slate-400 mb-3">{audience.examplesLabel}</p>
                  <ul className="space-y-2">
                    {audience.examples.map((example, exIndex) => (
                      <li key={exIndex} className="text-sm text-slate-400 flex items-start">
                        <span className={`text-slate-500 ${dir === 'rtl' ? 'ml-2' : 'mr-2'}`}>•</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-6 text-center">{c.approach.heading}</h2>
          <p className="text-lg text-slate-400 mb-12 text-center max-w-3xl mx-auto leading-relaxed">{c.approach.sub}</p>
          <div className="space-y-6">
            {c.approach.items.map((item, index) => (
              <div key={index} className="bg-slate-800 p-8 rounded-xl shadow-md border border-slate-700">
                <h3 className="text-xl font-semibold text-slate-100 mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-blue-950 border-l-4 border-blue-500 p-8 rounded-r-xl">
            <h3 className="text-xl font-semibold text-slate-100 mb-4">{c.approach.engagementTitle}</h3>
            <div className="space-y-3 text-slate-300 leading-relaxed">
              {c.approach.engagement.map((item, i) => (
                <p key={i}><strong className="text-slate-100">{item.label}</strong> {item.desc}</p>
              ))}
            </div>
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
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-900 bg-white rounded-lg hover:bg-slate-100 transition-all transform hover:scale-105 shadow-lg"
            >
              {c.cta.primary}
              <ArrowRight className={`${dir === 'rtl' ? 'mr-2 rotate-180' : 'ml-2'}`} size={20} />
            </Link>
            <Link
              to="/how-we-work"
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
