import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, Shield, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from '../components/LanguageToggle';
import SEOHead from '../components/SEOHead';
import { trackEvent, trackWhatsAppClick, buildWhatsAppTrackingUrl } from '../lib/analytics';

const UTM = 'utm_source=instagram&utm_medium=linkinbio';

export default function LinksPage() {
  const { t, dir, language } = useLanguage();

  const whatsappNumber = '971569001888';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const links = [
    {
      key: 'consultation',
      label: t.links.bookConsultation,
      to: `/contact?${UTM}&utm_campaign=links_consultation`,
      icon: <Users size={20} />,
      internal: true,
    },
    {
      key: 'whatsapp',
      label: t.links.whatsappUs,
      to: buildWhatsAppTrackingUrl(whatsappUrl, 'linkinbio', language),
      icon: <MessageCircle size={20} />,
      internal: false,
      isWhatsApp: true,
    },
    {
      key: 'services',
      label: t.links.ourServices,
      to: `/HOWWEPROTECTYOU?${UTM}&utm_campaign=links_services`,
      icon: <Shield size={20} />,
      internal: true,
    },
    {
      key: 'about',
      label: t.links.aboutBcx,
      to: `/about?${UTM}&utm_campaign=links_about`,
      icon: <Users size={20} />,
      internal: true,
    },
  ];

  const handleClick = (key: string, isWhatsApp?: boolean) => {
    trackEvent('linkinbio_click', { link: key, language });
    if (isWhatsApp) {
      trackWhatsAppClick('linkinbio', { language });
    }
  };

  return (
    <>
      <SEOHead
        title="Links"
        description="BCX Building Contract Expert — Quick links to our services, consultation booking, and WhatsApp contact."
        path="/links"
        lang={language}
      />
      <div
        dir={dir}
        className="min-h-screen bg-background flex items-center justify-center px-4 py-12"
      >
        <div className="w-full max-w-md space-y-8 text-center">
          {/* Logo */}
          <div className="space-y-3">
            <div className="inline-block bg-gradient-to-br from-slate-600 to-slate-800 text-white px-5 py-3 rounded-xl font-bold text-2xl">
              BCX
            </div>
            <h1 className="text-xl font-semibold text-white">{t.links.title}</h1>
            <p className="text-sm text-slate-400">{t.links.subtitle}</p>
          </div>

          {/* Language Toggle */}
          <div className="flex justify-center">
            <LanguageToggle />
          </div>

          {/* Link Buttons */}
          <div className="space-y-3">
            {links.map((link) =>
              link.internal ? (
                <Link
                  key={link.key}
                  to={link.to}
                  onClick={() => handleClick(link.key)}
                  className={`flex items-center justify-center ${dir === 'rtl' ? 'space-x-reverse' : ''} space-x-3 w-full bg-surface border border-white/10 hover:border-brand-500 text-white rounded-xl py-4 px-6 font-medium transition-all hover:bg-white/5`}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              ) : (
                <a
                  key={link.key}
                  href={link.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleClick(link.key, link.isWhatsApp)}
                  className={`flex items-center justify-center ${dir === 'rtl' ? 'space-x-reverse' : ''} space-x-3 w-full ${
                    link.isWhatsApp
                      ? 'bg-green-600 hover:bg-green-700 border-green-500'
                      : 'bg-surface border-white/10 hover:border-brand-500'
                  } border text-white rounded-xl py-4 px-6 font-medium transition-all`}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              )
            )}
          </div>

          {/* Instagram Footer */}
          <a
            href="https://instagram.com/bcx.ae"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('instagram_click', { source: 'linkinbio' })}
            className={`inline-flex items-center ${dir === 'rtl' ? 'space-x-reverse' : ''} space-x-2 text-sm text-slate-500 hover:text-white transition-colors`}
          >
            <Instagram size={16} />
            <span>{t.links.followUs}</span>
          </a>
        </div>
      </div>
    </>
  );
}
