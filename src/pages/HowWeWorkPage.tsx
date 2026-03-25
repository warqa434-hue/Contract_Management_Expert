import { Link } from 'react-router-dom';
import { MessageSquare, FileSearch, FileText, CheckCircle2, ArrowRight, Shield, Target, Users, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function HowWeWorkPage() {
  const { t, dir } = useLanguage();
  const process = [
    {
      icon: MessageSquare,
      step: '1',
      title: t.howWeWork.process.step1.title,
      description: t.howWeWork.process.step1.description,
      deliverable: t.howWeWork.process.step1.deliverable,
    },
    {
      icon: FileSearch,
      step: '2',
      title: t.howWeWork.process.step2.title,
      description: t.howWeWork.process.step2.description,
      deliverable: t.howWeWork.process.step2.deliverable,
    },
    {
      icon: FileText,
      step: '3',
      title: t.howWeWork.process.step3.title,
      description: t.howWeWork.process.step3.description,
      deliverable: t.howWeWork.process.step3.deliverable,
    },
    {
      icon: CheckCircle2,
      step: '4',
      title: t.howWeWork.process.step4.title,
      description: t.howWeWork.process.step4.description,
      deliverable: t.howWeWork.process.step4.deliverable,
    },
  ];

  const principles = [
    {
      icon: Shield,
      title: t.howWeWork.principles.independence.title,
      description: t.howWeWork.principles.independence.description,
    },
    {
      icon: Target,
      title: t.howWeWork.principles.prevention.title,
      description: t.howWeWork.principles.prevention.description,
    },
    {
      icon: Users,
      title: t.howWeWork.principles.communication.title,
      description: t.howWeWork.principles.communication.description,
    },
    {
      icon: Clock,
      title: t.howWeWork.principles.responsive.title,
      description: t.howWeWork.principles.responsive.description,
    },
  ];

  const what = [
    {
      title: t.howWeWork.scope.review.title,
      items: t.howWeWork.scope.review.items,
    },
    {
      title: t.howWeWork.scope.support.title,
      items: t.howWeWork.scope.support.items,
    },
    {
      title: t.howWeWork.scope.dontDo.title,
      items: t.howWeWork.scope.dontDo.items,
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">{t.howWeWork.title}</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            {t.howWeWork.subtitle}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
            {t.howWeWork.process.title}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {process.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
                  <div className={`flex items-start ${dir === 'rtl' ? 'space-x-reverse' : ''} space-x-4 mb-6`}>
                    <div className="w-14 h-14 bg-gradient-to-br from-slate-700 to-slate-900 text-white rounded-xl flex items-center justify-center text-xl font-bold shadow-lg flex-shrink-0">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">
                        {item.title}
                      </h3>
                    </div>
                    <Icon className="text-slate-400 flex-shrink-0" size={24} />
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <p className="text-sm font-semibold text-slate-700 mb-1">{dir === 'rtl' ? 'المخرجات:' : 'Deliverable:'}</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.deliverable}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
            {t.howWeWork.principles.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
                  <div className="w-14 h-14 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="text-slate-700" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
            {t.howWeWork.scope.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {what.map((section, index) => (
              <div
                key={index}
                className={`p-8 rounded-xl shadow-md border-2 ${
                  section.title === t.howWeWork.scope.dontDo.title
                    ? 'bg-slate-50 border-slate-300'
                    : 'bg-white border-slate-200'
                }`}
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-6">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className={`flex items-start ${dir === 'rtl' ? 'space-x-reverse' : ''} space-x-3`}>
                      {section.title === t.howWeWork.scope.dontDo.title ? (
                        <>
                          <span className="text-slate-400 flex-shrink-0 mt-1">✕</span>
                          <span className="text-slate-600 leading-relaxed">{item}</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={18} />
                          <span className="text-slate-700 leading-relaxed">{item}</span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 text-center">
            {t.howWeWork.pricing.title}
          </h2>

          <div className="space-y-6 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {t.howWeWork.pricing.fixedFee.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {t.howWeWork.pricing.fixedFee.description}
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {t.howWeWork.pricing.hourly.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {t.howWeWork.pricing.hourly.description}
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {t.howWeWork.pricing.retainer.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {t.howWeWork.pricing.retainer.description}
              </p>
            </div>
          </div>

          <div className={`bg-blue-50 border-${dir === 'rtl' ? 'r' : 'l'}-4 border-blue-500 p-8 rounded-${dir === 'rtl' ? 'l' : 'r'}-xl`}>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              {t.howWeWork.pricing.custom.title}
            </h3>
            <p className="text-slate-700 leading-relaxed">
              {t.howWeWork.pricing.custom.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {t.howWeWork.cta.title}
          </h2>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t.howWeWork.cta.subtitle}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-900 bg-white rounded-lg hover:bg-slate-100 transition-all transform hover:scale-105 shadow-lg"
          >
            {t.howWeWork.cta.button}
            <ArrowRight className={`${dir === 'rtl' ? 'mr-2 rotate-180' : 'ml-2'}`} size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
