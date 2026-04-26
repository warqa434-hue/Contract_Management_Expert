import { Award, MapPin, Target } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';

export default function AboutPage() {
  const { t, dir, language } = useLanguage();

  const seo = {
    en: {
      title: 'About BCX – UAE Building Contract Expert',
      description:
        'BCX is led by a former UAE government expert with over 20 years in construction contracts, claims management, and dispute resolution across the UAE.',
    },
    ar: {
      title: 'عن BCX – خبير عقود البناء في الإمارات',
      description:
        'BCX بقيادة خبير حكومي إماراتي سابق يمتلك أكثر من 20 عامًا في عقود البناء وإدارة المطالبات وحل النزاعات عبر الإمارات.',
    },
  };
  const s = seo[language];

  const stats = [
    { icon: Award, label: t.about.profile.experience },
    { icon: MapPin, label: t.about.profile.location },
    { icon: Target, label: t.about.profile.savings },
  ];

  return (
    <div>
      <SEOHead title={s.title} description={s.description} path="/about" lang={language} />
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t.about.title}</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            {t.about.subtitle}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-6">
                {t.about.who.title}
              </h2>
              <div className="prose prose-lg text-slate-400 space-y-4">
                <p className="leading-relaxed">
                  {t.about.who.p1}
                </p>
                <p className="leading-relaxed">
                  {t.about.who.p2}
                </p>
                <p className="leading-relaxed">
                  {t.about.who.p3}
                </p>
              </div>
            </div>

            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold text-slate-100 mb-6">{t.about.profile.title}</h3>
              <div className="space-y-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className={`flex items-start ${dir === 'rtl' ? 'space-x-reverse' : ''} space-x-3`}>
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg flex items-center justify-center">
                          <Icon className="text-slate-200" size={20} />
                        </div>
                      </div>
                      <p className="text-slate-300 leading-relaxed pt-2">{stat.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-12 text-center">
            {t.about.difference.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-xl shadow-md border border-slate-700">
              <h3 className="text-xl font-semibold text-slate-100 mb-4">
                {t.about.difference.clientSide.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {t.about.difference.clientSide.description}
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-xl shadow-md border border-slate-700">
              <h3 className="text-xl font-semibold text-slate-100 mb-4">
                {t.about.difference.technical.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {t.about.difference.technical.description}
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-xl shadow-md border border-slate-700">
              <h3 className="text-xl font-semibold text-slate-100 mb-4">
                {t.about.difference.dispute.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {t.about.difference.dispute.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-12 text-center">
            {t.about.credentials.title}
          </h2>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-slate-200 mb-6">
              {t.about.credentials.memberships}
            </h3>
            <ul className="space-y-3 text-slate-400 leading-relaxed">
              {t.about.credentials.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
