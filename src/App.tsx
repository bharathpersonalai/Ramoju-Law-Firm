import React, { useEffect } from 'react';
import AOS from 'aos';                  // Import AOS
import 'aos/dist/aos.css';               // Import AOS styles 
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import CallFloat from './components/CallFloat'; // 1. Import the new CallFloat component 

function App() {
  useEffect(() => {
    // Import Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Merriweather:wght@400;700;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Update page title
    document.title = 'Ramoju Law Firm - Experienced Legal Counsel';

    // --- INITIALIZE AOS HERE ---
    AOS.init({
      duration: 2000, // Animation lasts 2 second
      once: false,     // Animation happens only once when you scroll down
    });
    // -------------------------

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Home />
        <About />
        <Services />
        <Gallery /> 
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat /> 
       <CallFloat />
    </div>
  );
}

export default App;