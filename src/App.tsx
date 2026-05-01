import { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import HOWWEPROTECTYOUPage from './pages/HOWWEPROTECTYOUPage';
import HomeBuildersService from './pages/HOWWEPROTECTYOU/HomeBuildersService';
import DevelopersSMEsService from './pages/HOWWEPROTECTYOU/DevelopersSMEsService';
import ProjectManagementService from './pages/HOWWEPROTECTYOU/ProjectManagementService';
import ValueEngineeringService from './pages/HOWWEPROTECTYOU/ValueEngineeringService';
import ClaimsVariationsService from './pages/HOWWEPROTECTYOU/ClaimsVariationsService';
import PropertyHandoverService from './pages/HOWWEPROTECTYOU/PropertyHandoverService';
import PortfolioPage from './pages/PortfolioPage';
import HowWeWorkPage from './pages/HowWeWorkPage';
import ContactPage from './pages/ContactPage';
import LinksPage from './pages/LinksPage';
import { trackPageView, trackUTMParams } from './lib/analytics';

function RouteTracker() {
  const location = useLocation();
  const utmTracked = useRef(false);

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  useEffect(() => {
    if (!utmTracked.current) {
      trackUTMParams();
      utmTracked.current = true;
    }
  }, []);

  return null;
}

function LayoutWrapper() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

function App() {
  return (
    <BrowserRouter>
      <RouteTracker />
      <Routes>
        <Route path="/links" element={<LinksPage />} />
        <Route element={<LayoutWrapper />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/HOWWEPROTECTYOU" element={<HOWWEPROTECTYOUPage />} />
          <Route path="/HOWWEPROTECTYOU/home-builders" element={<HomeBuildersService />} />
          <Route path="/HOWWEPROTECTYOU/developers-smes" element={<DevelopersSMEsService />} />
          <Route path="/HOWWEPROTECTYOU/project-management" element={<ProjectManagementService />} />
          <Route path="/HOWWEPROTECTYOU/value-engineering" element={<ValueEngineeringService />} />
          <Route path="/HOWWEPROTECTYOU/claims-variations" element={<ClaimsVariationsService />} />
          <Route path="/HOWWEPROTECTYOU/property-handover" element={<PropertyHandoverService />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/how-we-work" element={<HowWeWorkPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
