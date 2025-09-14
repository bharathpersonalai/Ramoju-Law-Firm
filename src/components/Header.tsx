import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); 
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="#home" aria-label="Ramoju Law Firm, go to homepage">
  <img 
    src="/images/logo.png" // IMPORTANT: Use your exact file name and extension (e.g., .png, .svg)
    alt="Ramoju Law Firm Logo"
    className="h-10 w-auto" // You can adjust h-10 to change the logo size
  />
</a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-navy-900 font-medium transition-colors duration-200"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Phone Number */}
          <div className="hidden md:flex items-center">
            <Phone className="h-4 w-4 text-gold mr-2" />
            <a
              href="tel:919553410353" 
              className="text-navy-900 font-semibold hover:text-gold transition-colors duration-200"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              +91 95534 10353 
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-navy-900" />
            ) : (
              <Menu className="h-6 w-6 text-navy-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-navy-900 font-medium text-left transition-colors duration-200"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center pt-2">
                <Phone className="h-4 w-4 text-gold mr-2" />
                <a
                  href="tel:919553410353" 
                  className="text-navy-900 font-semibold hover:text-gold transition-colors duration-200"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  +91 95534 10353
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;