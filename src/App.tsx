import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
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
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
