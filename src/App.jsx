import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { ServicesById } from './pages/ServicesById';
import { NavBar, ServicesPage } from './components';
import { Footer } from './components/Footer/Footer';
import { LandingServices } from './pages/LandingServices';
import { PortFolioLandingPage } from './pages/PortFolioLandingPage';
import { PreciosLandingPage } from './pages/PreciosLandingPage';
import { BlogLandingPage } from './pages/BlogLandingPage';
import { ContactLandingPage } from './pages/ContactLandingPage';
import { FloatingButton } from './components/FloatingButton';
import { HeaderBar } from './components/HeaderBar';
import { HeaderBarPage } from './pages/HeaderBarPage';

export const App = () => {

  return (

    <BrowserRouter>
      <HeaderBar />
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/service" element={<LandingServices />} />
        <Route path="/portfolio" element={<PortFolioLandingPage />} />
        <Route path="/pricing" element={<PreciosLandingPage />} />
        <Route path="/blog" element={<BlogLandingPage />} />
        <Route path="/contact" element={<ContactLandingPage />} />
        <Route path="/formulario" element={<HeaderBarPage />} />


        <Route path="/services/:id" element={<ServicesById />} />
      </Routes>
      <Footer />
      <FloatingButton />
    </BrowserRouter>
  )
}
