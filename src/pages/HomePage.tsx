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
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function HomePage() {
  const { t, dir } = useLanguage();

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
      <section className="relative bg-slate-900 text-white overflow-hidden min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/elitefix-hero-001.jpg"
            alt={t.home.hero.title}
            className="w-full h-full object-cover opacity-75"
          />
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
