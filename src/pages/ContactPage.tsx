import { useState, FormEvent, useEffect } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { getSupabase } from '../lib/supabase';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';

export default function ContactPage() {
  const { t, dir, language } = useLanguage();
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    client_type: '',
    project_location: '',
    service_needed: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const selectedPersona = searchParams.get('persona');

  const formHeading =
    formData.client_type === 'developer'
      ? language === 'ar'
        ? 'استفسار المطورين'
        : 'Developer Inquiry'
      : formData.client_type === 'individual'
        ? language === 'ar'
          ? 'استفسار مالك منزل'
          : 'Homeowner Inquiry'
        : t.contact.form.title;

  const formSubheading =
    formData.client_type === 'developer'
      ? language === 'ar'
        ? 'شاركنا تفاصيل المشروع وسنعود إليك بخطة دعم مناسبة.'
        : 'Share your project details and we will respond with a tailored support plan.'
      : formData.client_type === 'individual'
        ? language === 'ar'
          ? 'شاركنا تفاصيل البناء وسنوضح لك أفضل الخطوات قبل الالتزام.'
          : 'Share your build details and we will guide your next safest contract step.'
        : '';

  useEffect(() => {
    if (selectedPersona === 'developer' && formData.client_type !== 'developer') {
      setFormData((prev) => ({ ...prev, client_type: 'developer' }));
    } else if (selectedPersona === 'homeowner' && formData.client_type !== 'individual') {
      setFormData((prev) => ({ ...prev, client_type: 'individual' }));
    }
  }, [selectedPersona, formData.client_type]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const supabase = getSupabase();
      const { error } = await supabase
        .from('contacts')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            client_type: formData.client_type,
            project_location: formData.project_location,
            service_needed: formData.service_needed,
            message: formData.message,
          },
        ]);

      if (error) throw error;

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        client_type: '',
        project_location: '',
        service_needed: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t.contact.info.email,
      value: 'esam@bcx.ae',
      href: 'mailto:esam@bcx.ae',
      ltr: true,
    },
    {
      icon: Phone,
      label: t.contact.info.phone,
      value: '+971 56 900 1888',
      href: 'tel:+971569001888',
      ltr: true,
    },
    {
      icon: MapPin,
      label: t.contact.info.location,
      value: t.contact.info.locationValue,
      href: null,
    },
  ];

  const seo = {
    en: {
      title: 'Contact BCX – Book a Free Construction Contract Consultation',
      description:
        'Get in touch with BCX for a free 60-minute construction contract consultation. Based in Dubai, serving homeowners and developers across the UAE.',
    },
    ar: {
      title: 'تواصل مع BCX – احجز استشارة مجانية لعقود البناء',
      description:
        'تواصل مع BCX للحصول على استشارة مجانية مدتها 60 دقيقة في عقود البناء. مقرنا في دبي ونخدم أصحاب المنازل والمطورين في جميع أنحاء الإمارات.',
    },
  };
  const s = seo[language];

  return (
    <div>
      <SEOHead title={s.title} description={s.description} path="/contact" lang={language} />
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">{t.contact.title}</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-slate-800 p-8 sm:p-10 rounded-xl shadow-lg border border-slate-700">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-6">
                  {formHeading}
                </h2>
                {formSubheading && (
                  <p className="text-slate-400 leading-relaxed mb-6">
                    {formSubheading}
                  </p>
                )}

                {status === 'success' && (
                  <div className={`mb-6 bg-green-950 border-${dir === 'rtl' ? 'r' : 'l'}-4 border-green-500 p-5 rounded-${dir === 'rtl' ? 'l' : 'r'}-lg`}>
                    <div className={`flex items-start ${dir === 'rtl' ? 'space-x-reverse' : ''} space-x-3`}>
                      <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={22} />
                      <div>
                        <p className="font-semibold text-green-400 mb-1">{t.contact.form.success}</p>
                        <p className="text-green-300 text-sm">
                          {t.contact.form.successMessage}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div className={`mb-6 bg-red-950 border-${dir === 'rtl' ? 'r' : 'l'}-4 border-red-500 p-5 rounded-${dir === 'rtl' ? 'l' : 'r'}-lg`}>
                    <div className={`flex items-start ${dir === 'rtl' ? 'space-x-reverse' : ''} space-x-3`}>
                      <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={22} />
                      <div>
                        <p className="font-semibold text-red-400 mb-1">{t.contact.form.error}</p>
                        <p className="text-red-300 text-sm">{t.contact.form.errorMessage}</p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">
                        {t.contact.form.name} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-600 text-slate-100 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all placeholder-slate-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">
                        {t.contact.form.email} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-600 text-slate-100 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all placeholder-slate-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-300 mb-2">
                      {t.contact.form.phone}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-600 text-slate-100 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all placeholder-slate-500"
                      placeholder="+971 56 900 1888"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="client_type" className="block text-sm font-semibold text-slate-300 mb-2">
                        {t.contact.form.clientType} *
                      </label>
                      <select
                        id="client_type"
                        name="client_type"
                        value={formData.client_type}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-600 text-slate-100 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all"
                      >
                        <option value="">{t.contact.form.clientTypes.select}</option>
                        <option value="individual">{t.contact.form.clientTypes.individual}</option>
                        <option value="developer">{t.contact.form.clientTypes.developer}</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="project_location" className="block text-sm font-semibold text-slate-300 mb-2">
                        {t.contact.form.projectLocation}
                      </label>
                      <select
                        id="project_location"
                        name="project_location"
                        value={formData.project_location}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-600 text-slate-100 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all"
                      >
                        <option value="">{t.contact.form.locations.select}</option>
                        <option value="abu_dhabi">{t.contact.form.locations.abuDhabi}</option>
                        <option value="dubai">{t.contact.form.locations.dubai}</option>
                        <option value="sharjah">{t.contact.form.locations.sharjah}</option>
                        <option value="other_emirates">{t.contact.form.locations.otherEmirates}</option>
                        <option value="outside_uae">{t.contact.form.locations.outsideUAE}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service_needed" className="block text-sm font-semibold text-slate-300 mb-2">
                      {t.contact.form.serviceNeeded} *
                    </label>
                    <select
                      id="service_needed"
                      name="service_needed"
                      value={formData.service_needed}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-600 text-slate-100 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all"
                    >
                      <option value="">{t.contact.form.services.select}</option>
                      <option value="contract_review_home">{t.contact.form.services.contractReviewHome}</option>
                      <option value="contract_review_developer">{t.contact.form.services.contractReviewDeveloper}</option>
                      <option value="project_management">{t.contact.form.services.projectManagement}</option>
                      <option value="value_engineering">{t.contact.form.services.valueEngineering}</option>
                      <option value="claims_variations">{t.contact.form.services.claimsVariations}</option>
                      <option value="consultation">{t.contact.form.services.consultation}</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-2">
                      {t.contact.form.message} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-600 text-slate-100 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all resize-none placeholder-slate-500"
                      placeholder={t.contact.form.messagePlaceholder}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full px-8 py-4 text-lg font-semibold text-white bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg hover:from-slate-500 hover:to-slate-600 transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {status === 'submitting' ? t.contact.form.submitting : t.contact.form.submit}
                  </button>

                  <p className="text-sm text-slate-500 text-center">
                    {t.contact.form.required}
                  </p>
                </form>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-700">
                <h3 className="text-xl font-semibold text-slate-100 mb-6">
                  {t.contact.info.title}
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((contact, index) => {
                    const Icon = contact.icon;
                    return (
                      <div key={index} className={`flex items-start ${dir === 'rtl' ? 'space-x-reverse' : ''} space-x-4`}>
                        <div className="w-10 h-10 bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="text-slate-300" size={20} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-400 mb-1">
                            {contact.label}
                          </p>
                          {contact.href ? (
                            <a
                              href={contact.href}
                              dir={contact.ltr ? 'ltr' : undefined}
                              className="text-slate-200 hover:text-white transition-colors"
                            >
                              {contact.value}
                            </a>
                          ) : (
                            <p className="text-slate-200">{contact.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
                <h3 className="text-xl font-semibold text-slate-100 mb-4">
                  {t.contact.response.title}
                </h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  {t.contact.response.description}
                </p>
                <div className={`flex items-start ${dir === 'rtl' ? 'space-x-reverse' : ''} space-x-3 bg-slate-900 p-4 rounded-lg border border-slate-700`}>
                  <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {t.contact.response.freeConsultation}
                  </p>
                </div>
              </div>

              <div className="bg-blue-950 p-6 rounded-xl border border-blue-800">
                <h4 className="font-semibold text-slate-100 mb-3">
                  {t.contact.directEmail.title}
                </h4>
                <p className="text-sm text-slate-300 mb-3 leading-relaxed">
                  {t.contact.directEmail.description}
                </p>
                <a
                  href="mailto:esam@bcx.ae"
                  dir="ltr"
                  className="text-blue-400 font-semibold hover:text-blue-300 transition-colors"
                >
                  esam@bcx.ae
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-8 text-center">
            {t.contact.nextSteps.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800 p-6 rounded-xl shadow-md border border-slate-700 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 text-white rounded-xl flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-slate-100 mb-2">
                {t.contact.nextSteps.step1.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {t.contact.nextSteps.step1.description}
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl shadow-md border border-slate-700 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 text-white rounded-xl flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-slate-100 mb-2">
                {t.contact.nextSteps.step2.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {t.contact.nextSteps.step2.description}
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl shadow-md border border-slate-700 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 text-white rounded-xl flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-slate-100 mb-2">
                {t.contact.nextSteps.step3.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {t.contact.nextSteps.step3.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-700 to-slate-800 text-white p-8 sm:p-12 rounded-xl text-center border border-slate-600">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              {t.contact.questions.title}
            </h2>
            <p className="text-slate-200 mb-6 leading-relaxed">
              {t.contact.questions.description}
            </p>
            <p className="text-lg font-semibold text-white">
              {t.contact.questions.cta}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
