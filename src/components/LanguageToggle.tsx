import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <button
      onClick={() => setLanguage(isArabic ? 'en' : 'ar')}
      className="relative w-14 h-8 rounded-full bg-slate-700 border-2 border-slate-600 transition-all duration-300 hover:shadow-md hover:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900 focus-visible:ring-2 focus-visible:ring-slate-500"
      title={isArabic ? 'Switch to English' : 'التبديل إلى العربية'}
      aria-label={isArabic ? 'Switch to English' : 'Switch to Arabic'}
      aria-pressed={isArabic}
    >
      <div
        className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-slate-200 shadow-md transition-all duration-300 ease-out flex items-center justify-center ${
          isArabic ? 'translate-x-6' : 'translate-x-0'
        }`}
      >
        <span
          className={`text-xs font-bold transition-colors duration-300 ${
            isArabic ? 'text-amber-600' : 'text-blue-700'
          }`}
        >
          {isArabic ? 'ع' : 'EN'}
        </span>
      </div>

      <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
        <span className={`text-xs font-semibold transition-opacity duration-300 ${isArabic ? 'opacity-30' : 'opacity-100'} text-blue-400`}>
          EN
        </span>
        <span className={`text-xs font-semibold transition-opacity duration-300 ${isArabic ? 'opacity-100' : 'opacity-30'} text-amber-400`}>
          ع
        </span>
      </div>
    </button>
  );
}
