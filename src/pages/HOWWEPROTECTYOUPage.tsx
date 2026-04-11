import { Link } from 'react-router-dom';
import { FileText, Building2, ClipboardCheck, Scale, Key, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function HOWWEPROTECTYOUPage() {
  const { t, dir } = useLanguage();

  const services = [
    {
      icon: FileText,
      title: t.HOWWEPROTECTYOU.homeBuilders.title,
      description: t.HOWWEPROTECTYOU.homeBuilders.description,
      link: '/HOWWEPROTECTYOU/home-builders',
      tags: t.HOWWEPROTECTYOU.homeBuilders.tags,
    },
    {
      icon: Building2,
      title: t.HOWWEPROTECTYOU.developers.title,
      description: t.HOWWEPROTECTYOU.developers.description,
      link: '/HOWWEPROTECTYOU/developers-smes',
      tags: t.HOWWEPROTECTYOU.developers.tags,
    },
    {
      icon: ClipboardCheck,
      title: t.HOWWEPROTECTYOU.projectManagement.title,
      description: t.HOWWEPROTECTYOU.projectManagement.description,
      link: '/HOWWEPROTECTYOU/project-management',
      tags: t.HOWWEPROTECTYOU.projectManagement.tags,
    },
    {
      icon: Scale,
      title: t.HOWWEPROTECTYOU.valueEngineering.title,
      description: t.HOWWEPROTECTYOU.valueEngineering.description,
      link: '/HOWWEPROTECTYOU/value-engineering',
      tags: t.HOWWEPROTECTYOU.valueEngineering.tags,
    },
    {
      icon: Scale,
      title: t.HOWWEPROTECTYOU.claims.title,
      description: t.HOWWEPROTECTYOU.claims.description,
      link: '/HOWWEPROTECTYOU/claims-variations',
      tags: t.HOWWEPROTECTYOU.claims.tags,
    },
    {
      icon: Key,
      title: t.HOWWEPROTECTYOU.handover.title,
      description: t.HOWWEPROTECTYOU.handover.description,
      link: '/HOWWEPROTECTYOU/property-handover',
      tags: t.HOWWEPROTECTYOU.handover.tags,
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t.HOWWEPROTECTYOU.title}</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            {t.HOWWEPROTECTYOU.subtitle}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  to={service.link}
                  className="group block bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-700 hover:border-slate-500 overflow-hidden"
                >
                  <div className="p-8 sm:p-10">
                    <div className={`flex flex-col sm:flex-row sm:items-start space-y-6 sm:space-y-0 ${dir === 'rtl' ? 'sm:space-x-reverse' : ''} sm:space-x-8`}>
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl flex items-center justify-center group-hover:from-slate-500 group-hover:to-slate-600 transition-all duration-300">
                          <Icon className="text-slate-300 group-hover:text-white transition-colors" size={32} />
                        </div>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-100 mb-4 group-hover:text-white transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-slate-400 leading-relaxed mb-6">
                          {service.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {service.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className={`inline-flex items-center text-slate-400 font-semibold group-hover:text-slate-200 ${dir === 'rtl' ? 'space-x-reverse' : ''}`}>
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

      <section className="py-16 sm:py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-6">
            {t.HOWWEPROTECTYOU.notSure.title}
          </h2>
          <p className="text-lg text-slate-400 mb-8 leading-relaxed">
            {t.HOWWEPROTECTYOU.notSure.description}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg hover:from-slate-500 hover:to-slate-600 transition-all transform hover:scale-105 shadow-lg"
          >
            {t.HOWWEPROTECTYOU.notSure.cta}
            <ArrowRight className={`${dir === 'rtl' ? 'mr-2 rotate-180' : 'ml-2'}`} size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
