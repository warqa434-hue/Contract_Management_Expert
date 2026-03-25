import { Link } from 'react-router-dom';
import { FileText, Building2, ClipboardCheck, Scale, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function HomePage() {
  const { t, dir } = useLanguage();

  const services = [
    {
      icon: FileText,
      title: t.home.services.homeBuilders.title,
      description: t.home.services.homeBuilders.description,
      link: '/services/home-builders',
    },
    {
      icon: Building2,
      title: t.home.services.developers.title,
      description: t.home.services.developers.description,
      link: '/services/developers-smes',
    },
    {
      icon: ClipboardCheck,
      title: t.home.services.projectManagement.title,
      description: t.home.services.projectManagement.description,
      link: '/services/project-management',
    },
    {
      icon: Scale,
      title: t.home.services.valueEngineering.title,
      description: t.home.services.valueEngineering.description,
      link: '/services/value-engineering',
    },
  ];

  return (
    <div>
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/elitefix-hero-001.jpg"
            alt="Construction project management in luxury setting"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center lg:text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {t.home.hero.title}
          </h1>
          <p className="text-xl sm:text-2xl text-slate-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            {t.home.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-900 bg-white rounded-lg hover:bg-slate-100 transition-all transform hover:scale-105 shadow-lg"
            >
              {t.home.hero.bookConsultation}
              <ArrowRight className={`${dir === 'rtl' ? 'mr-2 rotate-180' : 'ml-2'}`} size={20} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-slate-700 rounded-lg hover:bg-slate-600 transition-all transform hover:scale-105 shadow-lg border border-slate-600"
            >
              {t.home.hero.sendContract}
            </Link>
          </div>

          <div className={`flex flex-wrap items-center justify-center gap-4 text-sm text-slate-300 max-w-3xl mx-auto ${dir === 'rtl' ? 'space-x-reverse' : ''}`}>
            <CheckCircle2 size={18} className="text-green-400" />
            <span>{t.home.hero.credentials}</span>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              {t.home.services.title}
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              {t.home.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  to={service.link}
                  className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-slate-300"
                >
                  <div className={`flex items-start ${dir === 'rtl' ? 'space-x-reverse' : ''} space-x-4`}>
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center group-hover:from-slate-700 group-hover:to-slate-900 transition-all duration-300">
                        <Icon className="text-slate-700 group-hover:text-white transition-colors" size={28} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className={`inline-flex items-center text-slate-700 font-medium group-hover:text-slate-900 ${dir === 'rtl' ? 'space-x-reverse' : ''}`}>
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

      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              {t.home.portfolio.title}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t.home.portfolio.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                <img
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Luxury residential villa architecture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {t.home.portfolio.residential.title}
                </h3>
                <p className="text-slate-600">
                  {t.home.portfolio.residential.description}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                <img
                  src="https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Modern commercial office building"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {t.home.portfolio.commercial.title}
                </h3>
                <p className="text-slate-600">
                  {t.home.portfolio.commercial.description}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                <img
                  src="https://images.pexels.com/photos/5668838/pexels-photo-5668838.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Business professionals reviewing contract documents"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {t.home.portfolio.claims.title}
                </h3>
                <p className="text-slate-600">
                  {t.home.portfolio.claims.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 sm:p-12 text-center text-white shadow-xl">
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
