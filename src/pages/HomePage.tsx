import { Link } from 'react-router-dom';
import { FileText, Building2, ClipboardCheck, Scale, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function HomePage() {
  const { t, dir, language } = useLanguage();

  const personaContent =
    language === 'ar'
      ? {
          homeownerTitle: 'أنا مالك منزل',
          homeownerDescription: 'أبني فيلا أو منزل خاص وأحتاج مراجعة عقدي بوضوح قبل الالتزام.',
          homeownerPrimaryCta: 'ابدأ مراجعة عقد المنزل',
          developerTitle: 'أنا مطور',
          developerDescription: 'أدير مشروعا تطويريا وأحتاج دعما في العقود والمناقصات وتقليل المخاطر.',
          developerPrimaryCta: 'اطلب مراجعة للمطورين',
          secondaryCta: 'استكشف الخدمات',
        }
      : {
          homeownerTitle: 'I am a Homeowner',
          homeownerDescription: 'I am building a villa or private residence and need contract clarity before I commit.',
          homeownerPrimaryCta: 'Start Home Contract Review',
          developerTitle: 'I am a Developer',
          developerDescription: 'I am leading a development project and need contract, tender, and risk support.',
          developerPrimaryCta: 'Request Developer Review',
          secondaryCta: 'Explore Services',
        };

  const HOWWEPROTECTYOU = [
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

  return (
    <div>
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/elitefix-hero-001.jpg"
            alt="Construction project management in luxury setting"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/78 via-slate-900/55 to-slate-900/35"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center lg:text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {t.home.hero.title}
          </h1>
          <p className="text-xl sm:text-2xl text-slate-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            {t.home.hero.subtitle}
          </p>
          <p className="text-lg sm:text-xl font-semibold text-amber-200 mb-8 max-w-3xl mx-auto">
            Free Contract Risk Review: Know the hidden clauses before you sign.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10 text-left">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-2">{personaContent.homeownerTitle}</h3>
              <p className="text-slate-200 mb-5 leading-relaxed">{personaContent.homeownerDescription}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/HOWWEPROTECTYOU/home-builders"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-slate-900 bg-white rounded-lg hover:bg-slate-100 transition-all shadow-lg"
                >
                  {personaContent.homeownerPrimaryCta}
                  <ArrowRight className={`${dir === 'rtl' ? 'mr-2 rotate-180' : 'ml-2'}`} size={18} />
                </Link>
                <Link
                  to="/contact?persona=homeowner"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-slate-700 rounded-lg hover:bg-slate-600 transition-all border border-slate-500"
                >
                  {t.home.hero.bookConsultation}
                </Link>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-2">{personaContent.developerTitle}</h3>
              <p className="text-slate-200 mb-5 leading-relaxed">{personaContent.developerDescription}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/HOWWEPROTECTYOU/developers-smes"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-slate-900 bg-white rounded-lg hover:bg-slate-100 transition-all shadow-lg"
                >
                  {personaContent.developerPrimaryCta}
                  <ArrowRight className={`${dir === 'rtl' ? 'mr-2 rotate-180' : 'ml-2'}`} size={18} />
                </Link>
                <Link
                  to="/contact?persona=developer"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-slate-700 rounded-lg hover:bg-slate-600 transition-all border border-slate-500"
                >
                  {t.home.hero.bookConsultation}
                </Link>
              </div>
            </div>
          </div>

          <div className={`flex flex-wrap items-center justify-center gap-4 text-sm text-slate-300 max-w-3xl mx-auto ${dir === 'rtl' ? 'space-x-reverse' : ''}`}>
            <CheckCircle2 size={18} className="text-green-400" />
            <span>{t.home.hero.credentials}</span>
          </div>
        </div>
      </section>

      <section className="py-14 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800 rounded-2xl border border-slate-700 p-8 sm:p-10 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-4">
              What problem we solve
            </h2>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              We help homeowners and developers in the UAE avoid costly contract mistakes before signing, so projects stay protected from hidden legal and financial risks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact?offer=free-risk-review"
                className="inline-flex items-center justify-center px-7 py-3 text-base font-semibold text-white bg-slate-600 rounded-lg hover:bg-slate-500 transition-all"
              >
                Claim Free Contract Risk Review
              </Link>
              <Link
                to="/contact?offer=free-checklist"
                className="inline-flex items-center justify-center px-7 py-3 text-base font-semibold text-slate-200 bg-slate-700 rounded-lg hover:bg-slate-600 transition-all border border-slate-600"
              >
                Get Free Contract Risk Checklist
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-6">
            Popular UAE contract topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-slate-300">
            <Link to="/HOWWEPROTECTYOU/home-builders" className="p-5 border border-slate-700 rounded-xl hover:border-slate-500 hover:bg-slate-800 transition-colors">
              Contract Review UAE for Homeowners
            </Link>
            <Link to="/HOWWEPROTECTYOU/developers-smes" className="p-5 border border-slate-700 rounded-xl hover:border-slate-500 hover:bg-slate-800 transition-colors">
              Construction Contract Risk UAE for Developers
            </Link>
            <Link to="/HOWWEPROTECTYOU/claims-variations" className="p-5 border border-slate-700 rounded-xl hover:border-slate-500 hover:bg-slate-800 transition-colors">
              Legal and Commercial Risk Before Signing in UAE
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
              {t.home.HOWWEPROTECTYOU.title}
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              {t.home.HOWWEPROTECTYOU.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {HOWWEPROTECTYOU.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  to={service.link}
                  className="group bg-slate-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-700 hover:border-slate-500"
                >
                  <div className={`flex items-start ${dir === 'rtl' ? 'space-x-reverse' : ''} space-x-4`}>
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg flex items-center justify-center group-hover:from-slate-500 group-hover:to-slate-600 transition-all duration-300">
                        <Icon className="text-slate-300 group-hover:text-white transition-colors" size={28} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-100 mb-3 group-hover:text-white transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className={`inline-flex items-center text-slate-400 font-medium group-hover:text-slate-200 ${dir === 'rtl' ? 'space-x-reverse' : ''}`}>
                        {t.common.learnMore}
                        <ArrowRight className={`${dir === 'rtl' ? 'mr-2 rotate-180' : 'ml-2'} group-hover:translate-x-1 transition-transform`} size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
              {t.home.portfolio.title}
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              {t.home.portfolio.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                <img
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Luxury residential villa architecture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-100 mb-2">
                  {t.home.portfolio.residential.title}
                </h3>
                <p className="text-slate-400">
                  {t.home.portfolio.residential.description}
                </p>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                <img
                  src="https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Modern commercial office building"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-100 mb-2">
                  {t.home.portfolio.commercial.title}
                </h3>
                <p className="text-slate-400">
                  {t.home.portfolio.commercial.description}
                </p>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                <img
                  src="https://images.pexels.com/photos/5668838/pexels-photo-5668838.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Business professionals reviewing contract documents"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-100 mb-2">
                  {t.home.portfolio.claims.title}
                </h3>
                <p className="text-slate-400">
                  {t.home.portfolio.claims.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 sm:p-12 text-center text-white shadow-xl border border-slate-600">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {t.home.cta.title}
            </h2>
            <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
              {t.home.cta.subtitle}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-900 bg-white rounded-lg hover:bg-slate-100 transition-all transform hover:scale-105 shadow-lg"
            >
              {t.common.getStarted}
              <ArrowRight className={`${dir === 'rtl' ? 'mr-2 rotate-180' : 'ml-2'}`} size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
