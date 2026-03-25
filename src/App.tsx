import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import HomeBuildersService from './pages/services/HomeBuildersService';
import DevelopersSMEsService from './pages/services/DevelopersSMEsService';
import ProjectManagementService from './pages/services/ProjectManagementService';
import ValueEngineeringService from './pages/services/ValueEngineeringService';
import ClaimsVariationsService from './pages/services/ClaimsVariationsService';
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
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/home-builders" element={<HomeBuildersService />} />
          <Route path="/services/developers-smes" element={<DevelopersSMEsService />} />
          <Route path="/services/project-management" element={<ProjectManagementService />} />
          <Route path="/services/value-engineering" element={<ValueEngineeringService />} />
          <Route path="/services/claims-variations" element={<ClaimsVariationsService />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/how-we-work" element={<HowWeWorkPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
