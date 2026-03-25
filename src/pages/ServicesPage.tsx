import { Link } from 'react-router-dom';
import { FileText, Building2, ClipboardCheck, Scale, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ServicesPage() {
  const { t, dir } = useLanguage();

  const services = [
    {
      icon: FileText,
      title: t.services.homeBuilders.title,
      description: t.services.homeBuilders.description,
      link: '/services/home-builders',
      tags: t.services.homeBuilders.tags,
    },
    {
      icon: Building2,
      title: t.services.developers.title,
      description: t.services.developers.description,
      link: '/services/developers-smes',
      tags: t.services.developers.tags,
    },
    {
      icon: ClipboardCheck,
      title: t.services.projectManagement.title,
      description: t.services.projectManagement.description,
      link: '/services/project-management',
      tags: t.services.projectManagement.tags,
    },
    {
      icon: Scale,
      title: t.services.valueEngineering.title,
      description: t.services.valueEngineering.description,
      link: '/services/value-engineering',
      tags: t.services.valueEngineering.tags,
    },
    {
      icon: Scale,
      title: t.services.claims.title,
      description: t.services.claims.description,
      link: '/services/claims-variations',
      tags: t.services.claims.tags,
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t.services.title}</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  to={service.link}
                  className="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-slate-300 overflow-hidden"
                >
                  <div className="p-8 sm:p-10">
                    <div className={`flex flex-col sm:flex-row sm:items-start space-y-6 sm:space-y-0 ${dir === 'rtl' ? 'sm:space-x-reverse' : ''} sm:space-x-8`}>
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center group-hover:from-slate-700 group-hover:to-slate-900 transition-all duration-300">
                          <Icon className="text-slate-700 group-hover:text-white transition-colors" size={32} />
                        </div>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-slate-700 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed mb-6">
                          {service.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {service.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className={`inline-flex items-center text-slate-700 font-semibold group-hover:text-slate-900 ${dir === 'rtl' ? 'space-x-reverse' : ''}`}>
                          {t.common.learnMore}
                          <ArrowRight className={`${dir === 'rtl' ? 'mr-2 rotate-180' : 'ml-2'} group-hover:translate-x-1 transition-transform`} size={18} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            {t.services.notSure.title}
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            {t.services.notSure.description}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg hover:from-slate-600 hover:to-slate-800 transition-all transform hover:scale-105 shadow-lg"
          >
            {t.services.notSure.cta}
            <ArrowRight className={`${dir === 'rtl' ? 'mr-2 rotate-180' : 'ml-2'}`} size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
