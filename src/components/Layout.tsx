import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';
import FloatingReviewButton from './FloatingReviewButton';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../contexts/LanguageContext';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, dir } = useLanguage();

  const navigation = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.about, href: '/about' },
    { name: t.nav.services, href: '/HOWWEPROTECTYOU' },
    { name: t.nav.portfolio, href: '/portfolio' },
    { name: t.nav.howWeWork, href: '/how-we-work' },
    { name: t.nav.contact, href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className={`flex items-center ${dir === 'rtl' ? 'space-x-reverse' : ''} space-x-2`}>
              <div className="bg-gradient-to-br from-slate-700 to-slate-900 text-white px-3 py-2 rounded-lg font-bold text-xl">
                BCX
              </div>
              <span className="hidden sm:block text-slate-700 font-medium">Building Contract Expert</span>
            </Link>

            <div className="hidden md:flex items-center space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-slate-100 text-slate-900'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              <LanguageToggle />
            </div>

            <div className="md:hidden flex items-center space-x-3">
              <LanguageToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-slate-600 hover:bg-slate-100"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-md text-base font-medium transition-colors ${
                      isActive(item.href)
                        ? 'bg-slate-100 text-slate-900'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <FloatingReviewButton />

      <footer className="bg-slate-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className={`flex items-center ${dir === 'rtl' ? 'space-x-reverse' : ''} space-x-2 mb-4`}>
                <div className="bg-gradient-to-br from-slate-700 to-slate-600 text-white px-3 py-2 rounded-lg font-bold text-xl">
                  BCX
                </div>
                <span className="font-medium">Building Contract Expert</span>
              </div>
              <p className="text-slate-300 text-sm">
                {t.footer.description}
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">{t.footer.quickLinks}</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link to={item.href} className="hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">{t.footer.contact}</h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className={`flex items-start ${dir === 'rtl' ? 'space-x-reverse' : ''} space-x-2`}>
                  <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                  <span>{t.footer.location}</span>
                </li>
                <li className={`flex items-start ${dir === 'rtl' ? 'space-x-reverse' : ''} space-x-2`}>
                  <Mail size={16} className="mt-0.5 flex-shrink-0" />
                  <span>esam@bcx.ae</span>
                </li>
                <li className={`flex items-start ${dir === 'rtl' ? 'space-x-reverse' : ''} space-x-2`}>
                  <Phone size={16} className="mt-0.5 flex-shrink-0" />
                  <span>+971 56 900 1888</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
            <p>&copy; {new Date().getFullYear()} {t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
