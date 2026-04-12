import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <button
      onClick={() => setLanguage(isArabic ? 'en' : 'ar')}
      className="px-4 py-2 rounded-md text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-slate-100 transition-colors"
      title={isArabic ? 'Switch to English' : 'التبديل إلى العربية'}
      aria-label={isArabic ? 'Switch to English' : 'Switch to Arabic'}
    >
      {isArabic ? 'EN' : 'ع'}
    </button>
  );
}
