import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./i18n/LanguageContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { LoadingScreen } from "./components/LoadingScreen";
import { WhatsAppFloat } from "./components/WhatsAppFloat";
import { SEOMeta } from "./components/SEOMeta";
import Home from "./pages/Home";
import TPA from "./pages/TPA";
import BaselineVision from "./pages/BaselineVision";
import Coaching from "./pages/Coaching";
import Tournament from "./pages/Tournament";
import Pathways from "./pages/Pathways";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Brand from "./pages/Brand";
import TennisInEnglish from "./pages/TennisInEnglish";
import AustraliaConsulting from "./pages/AustraliaConsulting";
import Pricing from "./pages/Pricing";
import BaselineVisionFAQ from "./pages/BaselineVisionFAQ";

function AppInner() {
  return (
    <>
      <ScrollToTop />
      <SEOMeta />
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tpa" element={<TPA />} />
          <Route path="/baseline-vision" element={<BaselineVision />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/tournament" element={<Tournament />} />
          <Route path="/pathways" element={<Pathways />} />
          <Route path="/tennis-in-english" element={<TennisInEnglish />} />
          <Route path="/australia-consulting" element={<AustraliaConsulting />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/baseline-vision-faq" element={<BaselineVisionFAQ />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <LoadingScreen />
        <BrowserRouter>
          <AppInner />
        </BrowserRouter>
      </LanguageProvider>
    </div>
  );
}

export default App;
