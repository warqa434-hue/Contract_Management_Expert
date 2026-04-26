import { MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { trackWhatsAppClick, buildWhatsAppTrackingUrl } from '../lib/analytics';

export default function FloatingReviewButton() {
  const [isVisible, setIsVisible] = useState(false);
  const { t, dir, language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappNumber = '+971569001888';
  const whatsappMessage = encodeURIComponent(t.home.whatsappPrefill);
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}?text=${whatsappMessage}`;

  return (
    <a
      href={buildWhatsAppTrackingUrl(whatsappUrl, 'floating_button', language)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick('floating_button', { language })}
      className={`fixed ${dir === 'rtl' ? 'left-6' : 'right-6'} bottom-6 z-50 flex items-center ${dir === 'rtl' ? 'space-x-reverse' : ''} space-x-3 px-6 py-4 bg-green-600 text-white rounded-full shadow-2xl hover:shadow-3xl hover:bg-green-700 transition-all transform hover:scale-105 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      style={{ transition: 'all 0.3s ease-in-out' }}
      aria-label={t.floatingButton.chatWhatsApp}
    >
      <MessageCircle size={24} />
      <span className="font-semibold hidden sm:inline">{t.floatingButton.chatWhatsApp}</span>
      <span className="font-semibold sm:hidden">{t.floatingButton.chatWhatsAppShort}</span>
    </a>
  );
}
